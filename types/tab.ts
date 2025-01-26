type Tab = chrome.tabs.Tab;

interface TabService {
  getTabs(): Promise<Tab[]>;

  createTab(url: string): Promise<Tab>;

  closeTab(tabId: string): Promise<void>;
}
