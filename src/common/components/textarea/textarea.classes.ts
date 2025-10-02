import { cva } from 'class-variance-authority';
import { formInputBase, inputBorderStyles } from '../../utilities/styles';

export const textareaVariants = cva(formInputBase, {
  variants: {
    variant: {
      default: inputBorderStyles.default,
      error: inputBorderStyles.error,
    },
    autoResize: {
      true: 'resize-none overflow-hidden',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
