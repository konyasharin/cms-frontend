import { z } from 'zod';

export const AppSchema = z.object({
  id: z.number(),
  name: z.string(),
  associationColor: z.string(),
});

export type App = z.infer<typeof AppSchema>;
