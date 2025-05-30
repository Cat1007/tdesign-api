:: BASE_DOC ::

## API

### TimePicker Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
allowInput | Boolean | false | \- | N
borderless | Boolean | false | \- | N
clearable | Boolean | false | \- | N
disableTime | Function | - | disable time config function。Typescript：`(h: number, m: number, s: number, ms: number) => Partial<{ hour: Array<number>, minute: Array<number>, second: Array<number>, millisecond: Array<number>  }>` | N
disabled | Boolean | undefined | \- | N
format | String | HH:mm:ss | \- | N
hideDisabledTime | Boolean | true | \- | N
inputProps | Object | - | Typescript：`InputProps`，[Input API Documents](./input?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/time-picker/type.ts) | N
label | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
placeholder | String | undefined | \- | N
popupProps | Object | - | Typescript：`PopupProps`，[Popup API Documents](./popup?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/time-picker/type.ts) | N
presets | Object | - | Typescript：`PresetTime` `interface PresetTime { [presetName: string]: TimePickerValue \| (() => TimePickerValue) }`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/time-picker/type.ts) | N
readonly | Boolean | undefined | Whether it is read only, the priority is greater than `allowInput` | N
selectInputProps | Object | - | Typescript：`SelectInputProps`，[SelectInput API Documents](./select-input?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/time-picker/type.ts) | N
size | String | medium | options: small/medium/large | N
status | String | default | options: default/success/warning/error | N
steps | Array | [1, 1, 1] | Typescript：`Array<string \| number>` | N
tips | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
value | String | - | Typescript：`TimePickerValue` `type TimePickerValue = string`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/time-picker/type.ts) | N
defaultValue | String | - | uncontrolled property。Typescript：`TimePickerValue` `type TimePickerValue = string`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/time-picker/type.ts) | N
valueDisplay | TNode | - | `MouseEvent<SVGElement>`。Typescript：`string \| TNode<{ value: TimePickerValue }>`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
onBlur | Function |  | Typescript：`(context: { value: TimePickerValue } & SelectInputBlurContext) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/time-picker/type.ts)。<br/>`import { SelectInputBlurContext } from '@SelectInput'`<br/> | N
onChange | Function |  | Typescript：`(value: TimePickerValue) => void`<br/> | N
onClear | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/>Triggered when the clear button is clicked | N
onClose | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/> | N
onConfirm | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/> | N
onFocus | Function |  | Typescript：`(context: { value: TimePickerValue; e: FocusEvent }) => void`<br/> | N
onInput | Function |  | Typescript：`(context: { value: TimePickerValue; e: InputEvent }) => void`<br/> | N
onOpen | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/> | N
onPick | Function |  | Typescript：`(value: TimePickerValue, context: { e: MouseEvent }) => void`<br/> | N


### TimeRangePicker Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
allowInput | Boolean | false | \- | N
autoSwap | Boolean | true | \- | N
borderless | Boolean | false | \- | N
clearable | Boolean | false | \- | N
disableTime | Function | - | Typescript：`(h: number, m: number, s: number, ms: number, context: { partial: TimeRangePickerPartial }) =>Partial<{ hour: Array<number>, minute: Array<number>, second: Array<number> }>` `type TimeRangePickerPartial = 'start' \| 'end'`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/time-picker/type.ts) | N
disabled | Boolean / Array | undefined | Typescript：`boolean \| Array<boolean>` | N
format | String | HH:mm:ss | \- | N
hideDisabledTime | Boolean | true | \- | N
label | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
placeholder | String / Array | undefined | Typescript：`string \| Array<string>` | N
popupProps | Object | - | Typescript：`PopupProps`，[Popup API Documents](./popup?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/time-picker/type.ts) | N
presets | Object | - | Typescript：`PresetTimeRange` `interface PresetTimeRange { [presetRageName: string]: TimeRangeValue \| (() => TimeRangeValue)}`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/time-picker/type.ts) | N
rangeInputProps | Object | - | Typescript：`RangeInputProps`，[RangeInput API Documents](./range-input?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/time-picker/type.ts) | N
readonly | Boolean | undefined | Whether it is read only, the priority is greater than `allowInput` | N
size | String | medium | options: small/medium/large | N
status | String | default | options: default/success/warning/error | N
steps | Array | [1, 1, 1] | Typescript：`Array<string \| number>` | N
tips | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
value | Array | - | Typescript：`TimeRangeValue` `type TimeRangeValue = Array<string>`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/time-picker/type.ts) | N
defaultValue | Array | - | uncontrolled property。Typescript：`TimeRangeValue` `type TimeRangeValue = Array<string>`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/time-picker/type.ts) | N
onBlur | Function |  | Typescript：`(context: { value: TimeRangeValue; e?: FocusEvent; position?: TimeRangePickerPartial })  => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/time-picker/type.ts)。<br/>`type TimeRangePickerPartial = 'start' \| 'end'`<br/> | N
onChange | Function |  | Typescript：`(value: TimeRangeValue) => void`<br/> | N
onFocus | Function |  | Typescript：`(context?: { value: TimeRangeValue; e?: FocusEvent; position?: TimeRangePickerPartial })  => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/time-picker/type.ts)。<br/>`type TimeRangePickerPartial = 'start' \| 'end'`<br/> | N
onInput | Function |  | Typescript：`(context: { value: TimeRangeValue; e?: InputEvent; position?: TimeRangePickerPartial  })  => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/time-picker/type.ts)。<br/>`type TimeRangePickerPartial = 'start' \| 'end'`<br/> | N
onPick | Function |  | Typescript：`(value: TimeRangeValue, context: { e: MouseEvent, position?: TimeRangePickerPartial }) => void`<br/> | N
