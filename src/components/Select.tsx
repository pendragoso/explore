import dynamic from 'next/dynamic';

import type { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

import type { SelectProps } from '@zonos/amino/components/select/Select';
import type { SelectOption } from '@zonos/amino/types/SelectOption';

export type IGroupBase<TOption> = {
  readonly label?: string;
  readonly options: readonly TOption[];
};

/**
 * USE THIS over the direct import from @amino-ui
 *
 * Dynamically loaded using next because this component is large.
 */
export const Select = dynamic(async () => {
  // eslint-disable-next-line import/no-internal-modules
  const mod = await import('@zonos/amino/components/select/Select');
  return mod.Select;
}) as <
  TOption extends SelectOption,
  TGroup extends IGroupBase<TOption> = IGroupBase<TOption>
>({
  isClearable,
  label,
  value,
  ...props
}: SelectProps<TOption, false, TGroup>) => ReactJSXElement;
