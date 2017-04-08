export interface LoggingConfig {
  file: {
    level: string,
    filename: string,
    handleExceptions: boolean,
    json: boolean,
    maxsize: number,
    maxFiles: number,
    colorize: boolean
  };
  console: {
    level: string,
    handleExceptions: boolean,
    json: boolean,
    colorize: boolean
  };
  directory: string;
}

export const loggingConfig: LoggingConfig = {
  file: {
    level: 'error',
    filename: 'sbox.log',
    handleExceptions: true,
    json: true,
    maxsize: 5242880,
    maxFiles: 100,
    colorize: true
  },
  console: {
    level: 'error',
    handleExceptions: true,
    json: false,
    colorize: true
  },

  directory: __dirname
// tslint:disable-next-line:eofline
};