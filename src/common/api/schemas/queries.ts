import { z } from 'zod';

// Record of string->primitive for filtering
export const listQuerySchema = z.record(z.string(), z.union([z.string(), z.number(), z.boolean()]));

// PageQuery extends ListQuery with optional pagination fields; allow arbitrary filters via catchall
export const pageQuerySchema = z
  .object({
    _page: z.number().int().positive().optional(),
    _limit: z.number().int().positive().optional(),
  })
  .catchall(z.union([z.string(), z.number(), z.boolean()]));
