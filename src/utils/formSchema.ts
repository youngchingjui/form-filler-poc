import { z } from 'zod';

export const financialFormSchema = z.object({
  assets: z.array(z.string()).nonempty(),
  income: z.array(z.string()).nonempty(),
  expenses: z.array(z.string()).nonempty(),
});

export type FinancialForm = z.infer<typeof financialFormSchema>;
