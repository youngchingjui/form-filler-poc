import { z } from 'zod';

export const financialFormSchema = z.object({
  assets: z.array(z.string()),
  income: z.array(z.string()),
  expenses: z.array(z.string()),
});

export type FinancialForm = z.infer<typeof financialFormSchema>;
