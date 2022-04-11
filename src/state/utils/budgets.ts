import { BudgetGroup } from '@state/types';
import { DeepReadonly } from '@vue/reactivity';

export const totals = (groups: DeepReadonly<BudgetGroup[]>): number[] => {
  const totals = new Array(12).fill(0);

  for (const { budgets } of groups) {
    for (const { values } of budgets) {
      for (let i = 0; i < values.length; i++) {
        totals[i] += values[i];
      }
    }
  }

  return totals;
};
