import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greeting',
})
export class GreetingPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return `Hello ${value}`;
  }
}
