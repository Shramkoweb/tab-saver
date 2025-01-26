import { IStorageService } from "@/lib/services/storage";

interface TabSession {
  id: string;
  name: string;
  createdAt: number,
  tabs: chrome.tabs.Tab[]
}

interface ISessionService {
  readonly storageService: IStorageService;

  getAllSessions(): TabSession[];

  getSession(id: string): TabSession | undefined;

  saveSession(session: TabSession): void;

  deleteSession(id: string): void;
}

class SessionService implements ISessionService {
  private readonly storageService: IStorageService;

  constructor(storageService: IStorageService) {
    this.storageService = storageService;
  }

  async getAllSessions(): TabSession[] {
    const sessions = await this.storageService.get();
  }

  async getSession(id: string): TabSession | undefined {
    throw new Error("Method not implemented.");
  }

  async saveSession(session: TabSession): void {
    throw new Error("Method not implemented.");
  }

  async deleteSession(id: string): void {
    throw new Error("Method not implemented.");
  }

}
