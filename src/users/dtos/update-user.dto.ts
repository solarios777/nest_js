import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDtos } from "./create-user.dto";

export class UpdateUserDtos extends PartialType(CreateUserDtos) {}