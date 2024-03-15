import { Suspense } from 'react';

import {
  type MultiSelectProps,
  MultiSelect as AminoMultiSelect,
} from '@zonos/amino/components/select/MultiSelect';
import type { SelectOption } from '@zonos/amino/types/SelectOption';

export type IGroupBase<TOption> = {
  readonly label?: string;
  readonly options: readonly TOption[];
};

export const MultiSelect = <
  TOption extends SelectOption,
  TGroup extends IGroupBase<TOption>
>(
  props: MultiSelectProps<TOption, true, TGroup>
) => (
  <Suspense>
    <AminoMultiSelect
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  </Suspense>
);
