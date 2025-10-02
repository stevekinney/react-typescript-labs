import { z } from 'zod';
import { idSchema } from './_shared';

export const albumSchema = z.object({
  userId: idSchema,
  id: idSchema,
  title: z.string(),
});
