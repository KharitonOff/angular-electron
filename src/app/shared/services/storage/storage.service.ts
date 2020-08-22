import { Injectable } from '@angular/core';
import * as Store from 'electron-store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  store: Store
  constructor(schema: any) {
    this.store = new Store({ schema })
  }

  setData<T>(data: T): void {
    // TODO:validate data
    this.store.set(data);

    console.log(`initialized store at path ${this.store.path}`);
  }

  getData<T>(key: string) {
    return this.store.get(key)
  }

}
