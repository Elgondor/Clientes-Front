import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPhone',
  standalone: true,
})
export class FormatPhonePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    const valueString = value.toString();
    // Insertar espacio cada 4 caracteres
    return value.replace(/(.{4})(?=.)/g, '$1 ');
  }
}
