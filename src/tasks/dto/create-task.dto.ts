// Para hacer las validaciones ejecutamos el comando npm i --save class-validator class-transformer
import {
    IsString,
    MinLength
} from "class-validator";


export class CreateTaskDto {
    @IsString()  // Valida que sea un string pero no ejecuta la validación y eso lo hacemos con @usePipes en el controlador
    @MinLength(1)
    title: string
    @IsString()
    @MinLength(1)
    description: string
}