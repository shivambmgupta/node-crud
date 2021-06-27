export const SUCCESS = 'Success'
export const FAILURE = 'Failure'
export const ERROR = 'Error'


export const GREET = 'Welcome'
export const SERVER_UP = 'Server is running'
export const DB_CONNECTED = 'Conntected to the database'
export const DB_CONNECTION_ERR = 'Error connecting database'


export const Status = {
    ok: { code: 200, message: SUCCESS },
    accepted: { code: 200, message: "Accepted" },
    created: { code: 201, message: "Created" },
    updated: { code: 204, message: "Updated" },
    registered: { code: 201, message: "Registered" },
    badRequest: { code: 400, message: "Bad Request" },
    unauthorized: { code: 401, message: "Unauthorized" },
    forbidden: { code: 403, message: "Forbidden" },
    notFound: { code: 404, message: "Not Found" },
    notAcceptable: { code: 405, message: "Not acceptable" },
    serverError: { code: 500, message: "Something went wrong" }
}