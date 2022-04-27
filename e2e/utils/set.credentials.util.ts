import { Credentials } from '../models/credentials.model';
import { getEnv } from './get-env.util';

export function SetCredentials(
  envUserKey: string,
  envPassKey: string,
): PropertyDecorator {
  getEnv();

  const username = process.env[envUserKey];
  const password = process.env[envPassKey];

  return (target, propertyKey) => {
    Object.defineProperty(target, propertyKey, {
      value: new Credentials(username, password),
    });
  };
}
