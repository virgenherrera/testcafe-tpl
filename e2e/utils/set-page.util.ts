import { getEnv } from './get-env.util';

export function SetPage(envPageKey: string): PropertyDecorator {
  getEnv();

  const value = process.env[envPageKey];

  return (target, propertyKey) => {
    Object.defineProperty(target, propertyKey, { value });
  };
}
