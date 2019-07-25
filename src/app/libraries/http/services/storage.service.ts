import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export default class StorageService {
  private default: Storage = localStorage;
  private storage: Storage;
  private storageSubject: Subject<string> = new Subject<string>();

  constructor() {
    this.storage = this.default;
  }

  set domain(storage: Storage) {
    this.storage = storage;
  }

  get length(): number {
    return this.storage.length;
  }

  key(index: number): string {
    return this.storage.key(index);
  }

  get(key: string): string {
    return this.storage.getItem(key);
  }

  set(key: string, value: string): void {
    this.storage.setItem(key, value);
    this.storageSubject.next(key);
  }

  delete(key: string): void {
    this.storage.removeItem(key);
    this.storageSubject.next(key);
  }

  clear(): void {
    this.storage.clear();
    this.storageSubject.next('clear');
  }

  watch(): Observable<string> {
    return this.storageSubject.asObservable();
  }
 }
