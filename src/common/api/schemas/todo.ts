import { z } from 'zod';
import { idSchema } from './_shared';

export const todoSchema = z.object({
  userId: idSchema,
  id: idSchema,
  title: z.string(),
  completed: z.boolean(),
});
