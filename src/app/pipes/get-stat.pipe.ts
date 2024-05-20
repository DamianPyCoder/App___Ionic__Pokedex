import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Pipe({
  name: 'getStat'
})
export class GetStatPipe implements PipeTransform {

  transform(value: Pokemon, nameStat: string): number {
    // Buscamos en los stats
    const statFound = value.stats.find(s => s.stat.name == nameStat);
    // si existe, devolvemos el valor del stat
    if (statFound) {
      return statFound.base_stat;
    }
    return 0;
  }

}
