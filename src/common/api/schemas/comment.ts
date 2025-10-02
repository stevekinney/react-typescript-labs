import { z } from 'zod';
import { idSchema } from './_shared';

export const commentSchema = z.object({
  postId: idSchema,
  id: idSchema,
  name: z.string(),
  email: z.string(),
  body: z.string(),
});
