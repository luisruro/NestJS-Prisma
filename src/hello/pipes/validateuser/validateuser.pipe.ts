//Crear nuestro pipe
//nest g pipe hello/pipes/validateuser lo que va hacer es que dentro de la carpeta hello va crear una carpeta pipes y dentro de la carpeta pipes crea la carpeta validateuser con los archivos

import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateuserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value', value);
    const ageNumber = parseInt(value.age.toString(), 10); //10 significa que el número está en base decimal (la forma númerica más común)
    if (isNaN(ageNumber)) {
      throw new HttpException('Age must be a number', HttpStatus.BAD_REQUEST, { cause: new Error('Invalid age') });
    }
    //Vas a retornar todos los valores que recibiste (...value)
    return { ...value, age: ageNumber }
  }
}
