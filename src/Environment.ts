import { logLevel } from './Logger';

// App environment 
export type Environment = 'devel'|'prod';
export const APP_ENV: Environment= process.env.REACT_APP_APP_ENV === 'prod' ? 'prod' : 'devel';
export const LOG_LVL: logLevel= APP_ENV === 'prod' ? 'warn' : 'log';
