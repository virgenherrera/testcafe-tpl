import * as dotenv from 'dotenv';

export function getEnv() {
  return dotenv.config();
}
