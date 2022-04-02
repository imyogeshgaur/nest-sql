import { HttpException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction,Request} from "express";

@Injectable()
export class validateCustomerMiddleware implements NestMiddleware{
    use(req: Request,next:NextFunction){
        const {authorization} = req.headers;
        if(!authorization) throw new HttpException("No Token is Provided",HttpStatus.BAD_REQUEST)
        next();
    }
}