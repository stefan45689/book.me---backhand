import { expressjwt } from "express-jwt";

const middleware = expressjwt ({
    secret: 'SECRET',
    algorithms: [ "HS256"],
    requestProperty: 'userData'
})

export default middleware;