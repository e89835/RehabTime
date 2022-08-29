import {LOG_LVL} from './Environment';

// Log Function
export interface LogFn {
    (message ?: any, ...optionalParams: any[]): void;
  }
  
  // Basic logger interface
  export interface Logger {
    log: LogFn;
    warn: LogFn;
    error: LogFn;
  }
  
  // Log levels
  export type logLevel= 'log'|'warn'|'error';

  const NOOP: LogFn= (message ?: any, ...optionalParams: any[])=> {};

  // Logger which outputs to the browser console
  export class ConsoleLogger implements Logger {
    readonly log: LogFn;
    readonly warn: LogFn;
    readonly error: LogFn;

    constructor(options ?: {level ?: logLevel}) {
        const{level}= options || {};

        this.error = console.error.bind(console);
        if(level === 'error'){ this.log= NOOP; this.warn= NOOP; return;}
        
        this.warn = console.warn.bind(console);
        if(level === 'warn'){ this.log= NOOP; return;}

        this.log = console.log.bind(console);
  }
} export const logger = new ConsoleLogger({ level: LOG_LVL });
