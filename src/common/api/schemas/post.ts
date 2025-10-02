import { z } from 'zod';
import { idSchema } from './_shared';

export const postSchema = z.object({
  userId: idSchema,
  id: idSchema,
  title: z.string(),
  body: z.string(),
});
