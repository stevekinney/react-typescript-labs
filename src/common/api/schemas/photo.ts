import { z } from 'zod';
import { idSchema } from './_shared';

export const photoSchema = z.object({
  albumId: idSchema,
  id: idSchema,
  title: z.string(),
  url: z.string().url(),
  thumbnailUrl: z.string().url(),
});
