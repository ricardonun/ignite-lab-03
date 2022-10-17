import {Check} from 'phosphor-react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps{}

export function Checkbox(props: CheckboxProps) {
  return <CheckboxPrimitive.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded" {...props}>
    <CheckboxPrimitive.Indicator asChild>
        <Check className="h-5 w-5 text-cyan-600"></Check>
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>;
}
