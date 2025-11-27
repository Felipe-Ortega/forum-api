import { PartialType } from "@nestjs/mapped-types";
import { CreateQuestionDto } from "../../questions/dto/create-question.dto";

export class UpdateUserDto extends PartialType(CreateQuestionDto){};