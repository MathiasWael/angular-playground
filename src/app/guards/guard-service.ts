import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardService {
  isAdmin = signal<boolean>(false);
}
