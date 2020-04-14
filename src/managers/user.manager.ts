
export class UserManager {
    public postUserLogin = async (body: any) => {
        try {
            return {
                status: 'success',
            };
        } catch (err) {
            throw err;
        }
    }
}
