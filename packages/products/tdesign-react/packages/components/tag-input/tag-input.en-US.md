:: BASE_DOC ::

## API

### TagInput Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
autoWidth | Boolean | false | \- | N
borderless | Boolean | false | \- | N
clearable | Boolean | false | \- | N
collapsedItems | TElement | - | Typescript：`TNode<{ value: TagInputValue; collapsedSelectedItems: TagInputValue; count: number; onClose: (context: { index: number,  e?: MouseEvent }) => void }>`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
disabled | Boolean | undefined | \- | N
dragSort | Boolean | false | \- | N
excessTagsDisplayType | String | break-line | options: scroll/break-line | N
inputProps | Object | - | Typescript：`InputProps`，[Input API Documents](./input?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/tag-input/type.ts) | N
inputValue | String / Number | '' | input value。Typescript：`string` | N
defaultInputValue | String / Number | '' | input value。uncontrolled property。Typescript：`string` | N
label | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
max | Number | - | max tag number | N
minCollapsedNum | Number | 0 | \- | N
placeholder | String | undefined | placeholder description | N
prefixIcon | TElement | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
readonly | Boolean | undefined | \- | N
size | String | medium | options: small/medium/large。Typescript：`SizeEnum`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
status | String | - | options: default/success/warning/error | N
suffix | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
suffixIcon | TElement | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
tag | TNode | - | Typescript：`string \| TNode<{ value: string \| number }>`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
tagProps | Object | - | Typescript：`TagProps`，[Tag API Documents](./tag?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/tag-input/type.ts) | N
tips | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
value | Array | [] | value。Typescript：`TagInputValue` `type TagInputValue = Array<string \| number>`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/tag-input/type.ts) | N
defaultValue | Array | [] | value。uncontrolled property。Typescript：`TagInputValue` `type TagInputValue = Array<string \| number>`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/tag-input/type.ts) | N
valueDisplay | TNode | - | Typescript：`string \| TNode<{ value: TagInputValue; onClose: (index: number, item?: any) => void }>`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
onBlur | Function |  | Typescript：`(value: TagInputValue, context: { inputValue: string; e: FocusEvent }) => void`<br/>trigger on blur | N
onChange | Function |  | Typescript：`(value: TagInputValue, context: TagInputChangeContext) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/tag-input/type.ts)。<br/>`interface TagInputChangeContext { trigger: TagInputTriggerSource; index?: number; item?: string \| number; e?: MouseEvent \| KeyboardEvent }`<br/><br/>`type TagInputTriggerSource = 'enter' \| 'tag-remove' \| 'backspace' \| 'clear'`<br/> | N
onClear | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/> | N
onClick | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/> | N
onDragSort | Function |  | Typescript：`(context: TagInputDragSortContext) => void`<br/>trigger on drag sort。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/tag-input/type.ts)。<br/>`interface TagInputDragSortContext { newTags: TagInputValue; currentIndex: number; current: string \| number; targetIndex: number; target: string \| number }`<br/> | N
onEnter | Function |  | Typescript：`(value: TagInputValue, context: { e: KeyboardEvent; inputValue: string }) => void`<br/> | N
onFocus | Function |  | Typescript：`(value: TagInputValue, context: { inputValue: string; e: FocusEvent }) => void`<br/>trigger on focus | N
onInputChange | Function |  | Typescript：`(value: string, context?: InputValueChangeContext) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/tag-input/type.ts)。<br/>`interface InputValueChangeContext { e?: InputEvent \| MouseEvent \| CompositionEvent \| KeyboardEvent; trigger: 'input' \| 'clear' \| 'enter' \| 'blur'   }`<br/> | N
onMouseenter | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/>trigger on mouseenter | N
onMouseleave | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/>trigger on mouseleave | N
onPaste | Function |  | Typescript：`(context: { e: ClipboardEvent; pasteValue: string }) => void`<br/> | N
onRemove | Function |  | Typescript：`(context: TagInputRemoveContext) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/tag-input/type.ts)。<br/>`interface TagInputRemoveContext { value: TagInputValue; index: number; item: string \| number; e?: MouseEvent \| KeyboardEvent; trigger: TagInputRemoveTrigger }`<br/><br/>`type TagInputRemoveTrigger = 'tag-remove' \| 'backspace'`<br/> | N
