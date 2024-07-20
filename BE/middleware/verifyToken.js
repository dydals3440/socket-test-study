import {errorHandler} from "../utils/error.js";
import jwt from "jsonwebtoken";

export const isAuthenticate = async (req, res, next) => {
    try {
        const token = req.cookies.access_token;

        if (!token) {
            return next(errorHandler(401, "Unauthorized"))
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return next(errorHandler(403, "Forbidden"));
            }

            req.user = user;
            // 그러고 다음 미들웨어로 넘어감. 그럼 이제 req.user로 다른데서 정보받을 수 있음. (해당 미들웨어통해)
            next();
        })
    } catch (error) {
        next(error);
    }
}