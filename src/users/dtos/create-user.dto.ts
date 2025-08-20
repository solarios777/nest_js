import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateUserDtos {
    @IsNumber()
    id: number;
    age: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    gender: string;

    @IsEmail()
    email: string;

    @IsBoolean()
    isMerried: boolean;
}