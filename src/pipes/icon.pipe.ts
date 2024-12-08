import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icon',
  standalone: true
})
export class IconPipe implements PipeTransform {

  private mapIcons = new Map<string, string>([
    ['happy','😄'],
    ['upset','😪'],
    ['kiss','😘']
  ]);

  transform(value: string): any  {
    return this.mapIcons.get(value) || '🤔';
  }

}
