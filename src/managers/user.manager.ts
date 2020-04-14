import { ErrorHandler } from './../helpers';

export class UserManager extends ErrorHandler {
    public postUserLogin = async (body: any) => {
        try {
            this.throwError();
            return {
                status: 'success',
            };
        } catch (err) {
            const error = this.handleError(err);
            throw error;
        }
    }
}
