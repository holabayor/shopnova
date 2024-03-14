import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

const InputWithBottomBorder = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full border-b border-gray-300 text-xs md:text-sm focus:border-gray-500 outline-none ring-offset-0',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

InputWithBottomBorder.displayName = 'InputWithBottomBorder';

const SearchBox = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type="search"
        className={cn(
          'flex h-10 w-full text-xs md:text-sm outline-none ring-offset-0',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
SearchBox.displayName = 'SearchBox';

export { Input, InputWithBottomBorder, SearchBox };
