import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  getCars(): string[] {
    return ['BMW', 'Tesla', 'Audi', 'Mercedes'];
  }
}