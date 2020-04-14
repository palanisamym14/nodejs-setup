import { Environment } from './environment';
import { ConfigManager } from './config.manager';

export class AppSetting {

    public static Env = Environment.Prod;

    public static getConfig() {
        const configManager = new ConfigManager();
        return configManager.Config;
    }
}
