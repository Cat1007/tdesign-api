:: BASE_DOC ::

## API

### DropdownMenu Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
arrow-icon | String / Object | 'caret-down-small' | \- | N
close-on-click-overlay | Boolean | true | \- | N
duration | String / Number | 200 | \- | N
show-overlay | Boolean | true | \- | N
z-index | Number | 11600 | \- | N

### DropdownMenu Events

name | params | description
-- | -- | --
close | \- | \-
open | \- | \-

### DropdownMenu External Classes

className | Description
-- | --
t-class | \-
t-class-icon | \-
t-class-item | \-
t-class-label | \-


### DropdownItem Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
disabled | Boolean | false | \- | N
footer | Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
keys | Object | - | Typescript：`KeysType`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
label | String | - | \- | N
multiple | Boolean | false | \- | N
options | Array | [] | Typescript：`Array<DropdownOption>` `interface DropdownOption { label: string; disabled: boolean; value: DropdownValue; }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dropdown-item/type.ts) | N
options-columns | String / Number | 1 | \- | N
options-layout | String | columns | `deprecated` | N
placement | String | left | options: left/right | N
value | String / Number / Array | undefined | Typescript：`DropdownValue ` `type DropdownValue = string \| number \| Array<DropdownValue>;`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dropdown-item/type.ts) | N
default-value | String / Number / Array | undefined | uncontrolled property。Typescript：`DropdownValue ` `type DropdownValue = string \| number \| Array<DropdownValue>;`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dropdown-item/type.ts) | N

### DropdownItem Events

name | params | description
-- | -- | --
change | `(value: DropdownValue)` | \-
close | \- | \-
confirm | `(value: DropdownValue)` | \-
reset | \- | \-

### DropdownItem External Classes

className | Description
-- | --
t-class | \-
t-class-column | \-
t-class-column-item | \-
t-class-column-item-label | \-
t-class-content | \-
t-class-footer | \-
