import { Request, Response } from 'express';
import winston from 'winston';

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
  ],
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'MMM-DD-YYYY HH:mm:ss',
    }),
    winston.format.printf((info) => `${info.level}: ${[info.timestamp]}: ${info.message}`),
  ),
});

export function loggerMiddleware(req: Request, res: Response, next: any) {
  logger.info(`${req.method} ${req.url}`);
  next();
}

export default logger;