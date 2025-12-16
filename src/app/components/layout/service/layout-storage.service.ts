import { Injectable, signal } from '@angular/core';
import { Subject } from 'rxjs';
import { cloneDeep, get, set } from 'lodash'

@Injectable({
  providedIn: 'root',
})
export class LayoutStorageService {
  
  private storage: any = {};
  
  // changedKeyData: Subject<string> = new Subject<string>();
  private changedKeyDataSignal = signal<string | undefined>(undefined);
  readonly changedKeyData = this.changedKeyDataSignal.asReadonly();
    
  constructor() {}

  public addData(data: any) {
      this.storage = {...this.storage, ...(cloneDeep(data))};
  }

  public setData(data: any) {
      this.storage = cloneDeep(data);
  }

  public setKeyData(key: string, data: any) {
    this.storage[key] = cloneDeep(data);
    // this.changedKeyData.next(key);
    this.updateKey(key);
  }

  public getKeyData(key: string) {
      return cloneDeep(this.storage[key]);
  }

  public getThree(): any {
      return cloneDeep(this.storage);
  }

  public get(record: any, path: string, def: any = null): any {
    return get(record, path, def);
  }

  public set(record: any, path: string, value: any): void {
    set(record, path, value);
  }

  public setKeyRef(key: string, data: any) {
    this.storage[key] = data;
    this.updateKey(key);
    // this.changedKeyData.next(key);
  }

  public getKeyRef(key: string) {
    return this.storage[key];
  }

  private updateKey(key: string): void {
    this.changedKeyDataSignal.set(key);
  }

}
