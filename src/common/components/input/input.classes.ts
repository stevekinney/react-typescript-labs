import { cva } from 'class-variance-authority';
import { formInputBase, inputBorderStyles } from '../../utilities/styles';

export const inputVariants = cva(formInputBase, {
  variants: {
    variant: {
      default: inputBorderStyles.default,
      error: inputBorderStyles.error,
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
