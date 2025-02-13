import { ZodType } from 'zod';

export const parse = <T>(value: T, schema: ZodType) => {
  if (import.meta.env.PROD) return schema.safeParse(value);
  return schema.parse(value);
};
