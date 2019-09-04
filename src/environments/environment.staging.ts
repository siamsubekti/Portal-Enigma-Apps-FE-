/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export * from './types/enum-types';
export * from './types/constants';
export const environment = {
  production: false,
  sessionExpiration: 30, // minutes,
  appName: 'Enigma Bootcamp',
  appId: 'efo',
  apiBaseUrl : 'https://localhost:4300/api',
  loginUrl: 'auth/login',
  services: {
    auth: {
      code: 'CAND_AUTH_SERVICES',
      name: 'Get public candidate auth services.',
      endpointUrl: 'auth/candidate/services',
      method: 'GET',
      serviceType: 'PUBLIC',
    },
    login: {
      code: 'LOGIN',
      endpointUrl: 'auth/login',
      method: 'POST',
    },
    logout: {
      code: 'LOGOUT',
      endpointUrl: 'auth/logout',
      method: 'DELETE',
    },
    privilege: {
      code: 'ACCOUNT_PRIVILEGES',
      endpointUrl: 'account/privileges',
      method: 'GET',
    },
  },
  maxPages: 10,
};
