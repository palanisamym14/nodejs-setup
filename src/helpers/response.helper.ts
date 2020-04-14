class ResponseHelper {
    public Ok = (res: any, data: any) => {
        this.jsonResponse(res, data);
    }
    public jsonResponse(res: any, body = {}, status = 200) {
        res.status(status).json(body || null);
    }
    public Error = (res: any, data: any, code = 500) => {
        this.jsonResponse(res, data, code);
    }
}

export default new ResponseHelper();
