require("dotenv").config();
const { exec, execSync } = require('child_process');
const axios = require("axios");

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
const FILE_PATH = 'rollup.d.ts'

function getContext(diff) {
    return `Given the following diff of a \`.d.ts\` file representing the public API of a TypeScript library, determine if it introduces a breaking change. A breaking change is any modification that could cause existing code relying on this API to fail (e.g., type errors, missing members, or incompatible changes). Focus on these key aspects:
1. Removed types, interfaces, properties, or methods.
2. Changed types (e.g., number to string) or narrowed unions (e.g., "a" | "b" to "a").
3. Added required properties or parameters that were previously optional.
4. Modified function signatures (e.g., parameter types, return types).
5. Changed or removed generic constraints.

Provide a clear "Yes" or "No" answer, followed by a brief explanation identifying the specific change(s) that make it breaking (if any) or confirming compatibility (if not). Here’s the diff:

${diff}

`
}

async function getDiff(filePath = FILE_PATH) {
    try {
        const diff = execSync(`git diff -- ${filePath}`, {
            encoding: 'utf-8'
        });
        return diff;
    } catch(error) {
        console.error(`Error getting diff: ${error}`)
        return null;
    }
}

function hasFileChanged(filePath = FILE_PATH) {
    try {
        const changedFiles = execSync(`git diff --name-only`, {
            encoding: 'utf-8'
        }).split('\n');
        return changedFiles.includes(filePath);
    } catch(error) {
        console.error(`Error checking changes: ${error}`)
        return false;
    }
}

async function callGemini(context) {
    const url = `${GEMINI_API_URL}?key=${process.env.GEMINI_API_KEY}`;
    const payload = {
        contents: [
            {
                parts: [
                    {
                        text: context
                    }
                ]
            }
        ]
    }

    try {
        const response = await axios.post(url, payload, {
            headers: { "Content-Type": "application/json" }
        })
        return response.data.candidates[0].content.parts[0].text;
    } catch (error) {
        throw new Error(`API call failed: ${error}`)
    }
}


async function main() {
    if (!hasFileChanged()) {
        console.log('No changes to the file.');
        return;
    }

    const diff = await getDiff();
    const context = getContext(diff);
    const response = await callGemini(context);
    console.log(response);
}

main().catch(console.error);
