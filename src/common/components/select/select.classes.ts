import { cva } from 'class-variance-authority';
import { formInputBase, inputBorderStyles, iconSizes } from '../../utilities/styles';

export const selectVariants = cva(
  `${formInputBase} appearance-none pr-10 ${inputBorderStyles.default}`,
);

export const selectIconVariants = cva(
  `pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 ${iconSizes.md} text-slate-400`,
);
