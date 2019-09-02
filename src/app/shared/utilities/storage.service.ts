import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { environment as env, DEFAULT_STORAGE } from '../../../environments/environment';

@Injectable()
export class StorageService {
  private default: Storage = DEFAULT_STORAGE;
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
    return this.storage.getItem(`${env.appId}_${key}`);
  }

  set(key: string, value: string): void {
    this.storage.setItem(`${env.appId}_${key}`, value);
    this.storageSubject.next(`${env.appId}_${key}`);
  }

  delete(key: string): void {
    this.storage.removeItem(`${env.appId}_${key}`);
    this.storageSubject.next(`${env.appId}_${key}`);
  }

  clear(): void {
    this.storage.clear();
    this.storageSubject.next('clear');
  }

  watch(): Observable<string> {
    return this.storageSubject.asObservable();
  }
 }
