import { Injectable } from "@angular/core";

export interface LocalStoragePayload<T> {
  key: string
  item: T
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  save<T>({ key, item }: LocalStoragePayload<T>): void {
    localStorage.setItem(key, JSON.stringify(item))
  }

}
