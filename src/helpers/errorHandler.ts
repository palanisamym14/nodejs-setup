export class ErrorHandler extends Error {
    constructor() {
        super();
    }
    public throwError = () => {
        throw new Error('err');
    }
}
