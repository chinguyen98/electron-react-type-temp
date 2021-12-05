export interface IBridgeAppApi {
  quitApp: () => void;
  writeSomeThing: (something: string) => void;
  asyncGetRandom: () => Promise<number>;
  getAppVersion: () => Promise<string>;
}
