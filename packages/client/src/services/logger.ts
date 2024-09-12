type LogLevel = 'info' | 'error';

const logger = {
  log: (level: LogLevel, message: string, ...args: unknown[]) => {
    if (level === 'info') {
      console.log(`[INFO] ${message}`, ...args);
    } else {
      console.error(`[ERROR] ${message}`, ...args);
    }
  },
  info: (message: string, ...args: unknown[]) => {
    logger.log('info', message, ...args);
  },
  error: (message: string, ...args: unknown[]) => {
    logger.log('error', message, ...args);
  }
};

export default logger;