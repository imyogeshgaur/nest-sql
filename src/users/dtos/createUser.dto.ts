
import { IsEmail, IsNotEmpty, IsNumber} from "class-validator";

export class createUserDto{
    @IsEmail()
    email:string;

    @IsNumber()
    id:number;

    @IsNotEmpty()
    name:string;

}