import { z } from 'zod';

export const appsettingsSchema = z.object({
  customMessage: z.string().optional(),
});

export type Appsettings = z.infer<typeof appsettingsSchema>;

// CHECKED 0.2.0
