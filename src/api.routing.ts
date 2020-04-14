import * as express from 'express';
import { AppSetting } from './config';
import { UserController } from './controllers';
export class ApiRouting {
  public static baseRoute = AppSetting.getConfig().BaseRoute;
  public static Register(app: express.Express) {
    app.use(ApiRouting.baseRoute + UserController.route, new UserController().router);
    app.get('/ping', (req, res) => {
      res.send('Pong');
    });
  }
}
