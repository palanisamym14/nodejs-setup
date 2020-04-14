import { AppSetting } from './app.setting';
import { Environment } from './environment';
import { ProdConfig } from './config.prod';
import { DevConfig } from './config.dev';

export class ConfigManager {
  public Config;
  constructor() {
    switch (AppSetting.Env) {
      case Environment.Dev:
        this.Config = DevConfig;
        break;
      case Environment.Prod:
        this.Config = ProdConfig;
        break;
      default:
        this.Config = DevConfig;
    }
  }
}
