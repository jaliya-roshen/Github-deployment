import { Injectable } from '@angular/core';
import { MOCK_DATA } from './mock-data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getData(): any[] {
    console.log(MOCK_DATA);
    return MOCK_DATA;
  }
}
