import { z } from 'zod';

export const appsettingsSchema = z.object({
  defaultThemeId: z.number().optional(),
});

export type Appsettings = z.infer<typeof appsettingsSchema>;

// CHECKED 0.2.1
