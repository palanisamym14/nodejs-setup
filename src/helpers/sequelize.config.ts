import { AppSetting } from '../config/app.setting';
import * as SqlConnection from 'sequelize';
import { logger } from '../config/winston';

export class SequelizeConfig {
    private sequelize: SqlConnection.Sequelize;
    private sequelizeChatbot: SqlConnection.Sequelize;

    public setConnection() {
        const config = AppSetting.getConfig();
        const dbInfo = config.DBConnections['database'];
        this.sequelize = new SqlConnection.Sequelize(dbInfo.database, dbInfo.user, dbInfo.password, {
            host: dbInfo.host,
            dialect: dbInfo.dbType,
            logging: console.log,
            pool: {
                max:  10,
                min:  0
            }
        });
        this.ping(dbInfo);
    }

    private ping(dbInfo, type= null) {
        const connection = type ? this.sequelizeChatbot : this.sequelize;
        connection
            .authenticate()
            .then(() => {
                console.log(`Connection has been established to the database: ${dbInfo.host} - ${dbInfo.database} successfully.`);
            })
            .catch((err) => {
                logger.error(`Unable to connect to the database: : ${dbInfo.host} - ${dbInfo.database}`);
                console.log(`Unable to connect to the database: : ${dbInfo.host} - ${dbInfo.database}`, err);
            });
    }

    public getSequelize() {
        return this.sequelize;
    }

    public getChatbotSequelize() {
        return this.sequelizeChatbot;
    }

}

export const sequelize = new SequelizeConfig();