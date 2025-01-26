export default defineBackground(() => {
  // // chrome.alarms.create("saveTabs", { periodInMinutes: 1 });
  // chrome.alarms.onAlarm.addListener((alarm) => {
  //   if (alarm.name === "saveTabs") {
  //     chrome.tabs.query({}, (tabs) => {
  //       console.log('saveTabs', tabs)
  //       chrome.storage.local.set({ savedTabs: tabs });
  //     });
  //   }
  // });

  chrome.windows.onRemoved.addListener(() => {
    chrome.tabs.query({}, async (tabs) => {
      const { savedTabs } = await chrome.storage.local.get(['savedTabs']);
      chrome.storage.local.set({ savedTabs: [...savedTabs, ...tabs] });
    });
  });
});
