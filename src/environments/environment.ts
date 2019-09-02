/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

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
      code: 'AUTH_SERVICES',
      name: 'Get public auth services.',
      endpointUrl: 'auth/services',
      method: 'PUT',
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
