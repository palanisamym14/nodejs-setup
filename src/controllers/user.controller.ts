import { Router } from 'express';
import { UserManager } from './../managers/user.manager';
export class UserController {
  public static route = '/user';
  public router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  public init() {
    this.router.post('/login', this.userLogin);

  }
  private userLogin = async (request, response, next) => {
    try {
      const responseObj = await new UserManager().postUserLogin(request.body);
      response.status(200).send(responseObj);
    } catch (error) {
      response.status(500).send(error);
    }
  }
}
