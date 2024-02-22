import * as React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IconProps extends React.ComponentPropsWithRef<'span'> {
  Shape: LucideIcon;
  strokeWidth?: number;
  color?: string;
}

const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
  (
    { Shape, className, strokeWidth = 1.5, color = '#000000', ...props },
    ref
  ) => {
    return (
      <span ref={ref} className={cn('rounded-full p-2', className)} {...props}>
        <Shape strokeWidth={strokeWidth} color={color} />
      </span>
    );
  }
);

Icon.displayName = 'Icon';

export default Icon;
