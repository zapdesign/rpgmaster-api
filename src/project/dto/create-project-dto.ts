import { IsNumber, IsString } from "class-validator";
import { Project } from "../entities/project.entity";

export class CreateProjectDto extends Project {

    @IsNumber()
    rodada: number

    @IsString()
    id_user: string
  
    @IsString()
    name: string;
  }