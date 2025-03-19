import*as t from"../../core/common/common.js";import*as n from"../../core/i18n/i18n.js";import*as e from"../../ui/legacy/legacy.js";const i={throttling:"Throttling",showThrottling:"Show Throttling",goOffline:"Go offline",device:"device",throttlingTag:"throttling",enableSlowGThrottling:"Enable slow `3G` throttling",enableFastGThrottling:"Enable fast `3G` throttling",goOnline:"Go online"},o=n.i18n.registerUIStrings("panels/mobile_throttling/mobile_throttling-meta.ts",i),a=n.i18n.getLazilyComputedLocalizedString.bind(void 0,o);let r;async function g(){return r||(r=await import("./mobile_throttling.js")),r}e.ViewManager.registerViewExtension({location:"settings-view",id:"throttling-conditions",title:a(i.throttling),commandPrompt:a(i.showThrottling),order:35,loadView:async()=>new((await g()).ThrottlingSettingsTab.ThrottlingSettingsTab),settings:["custom-network-conditions"],iconName:"performance"}),e.ActionRegistration.registerActionExtension({actionId:"network-conditions.network-offline",category:"NETWORK",title:a(i.goOffline),loadActionDelegate:async()=>new((await g()).ThrottlingManager.ActionDelegate),tags:[a(i.device),a(i.throttlingTag)]}),e.ActionRegistration.registerActionExtension({actionId:"network-conditions.network-low-end-mobile",category:"NETWORK",title:a(i.enableSlowGThrottling),loadActionDelegate:async()=>new((await g()).ThrottlingManager.ActionDelegate),tags:[a(i.device),a(i.throttlingTag)]}),e.ActionRegistration.registerActionExtension({actionId:"network-conditions.network-mid-tier-mobile",category:"NETWORK",title:a(i.enableFastGThrottling),loadActionDelegate:async()=>new((await g()).ThrottlingManager.ActionDelegate),tags:[a(i.device),a(i.throttlingTag)]}),e.ActionRegistration.registerActionExtension({actionId:"network-conditions.network-online",category:"NETWORK",title:a(i.goOnline),loadActionDelegate:async()=>new((await g()).ThrottlingManager.ActionDelegate),tags:[a(i.device),a(i.throttlingTag)]}),t.Settings.registerSettingExtension({storageType:"Synced",settingName:"custom-network-conditions",settingType:"array",defaultValue:[]});
