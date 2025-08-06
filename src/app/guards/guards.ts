import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { GuardService } from './guard-service';

export const adminGuard: CanActivateFn = (route, state) => {
  const guardService = inject(GuardService);

  console.log(`Admin guard activated: ${guardService.isAdmin()}`);

  return guardService.isAdmin();
};