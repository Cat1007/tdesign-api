:: BASE_DOC ::

## API

### DateTimePicker Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
cancelBtn | String | 取消 | 取消按钮文字 | N
confirmBtn | String | - | 确定按钮文字 | N
end | String / Number | - | 选择器的最大可选时间，默认为当前时间+10年 | N
filter | Function | - | 列选项过滤函数，支持自定义列内容。(type 值可为: year, month, date, hour, minute, second)。TS 类型：`(type: TimeModeValues, columns: DateTimePickerColumn) => DateTimePickerColumn` `type DateTimePickerColumn = DateTimePickerColumnItem[]` `interface DateTimePickerColumnItem { label: string,value: string}`。[详细类型定义](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/date-time-picker/type.ts) | N
format | String | 'YYYY-MM-DD HH:mm:ss' | 用于pick、change、confirm事件参数格式化[详细文档](https://day.js.org/docs/en/display/format) | N
mode | String / Array | 'date' | year = 年；month = 年月；date = 年月日；hour = 年月日时； minute = 年月日时分；当类型为数组时，第一个值控制年月日，第二个值控制时分秒。TS 类型：`DateTimePickerMode` `type DateTimePickerMode = TimeModeValues \| Array<TimeModeValues> ` `type TimeModeValues = 'year' \| 'month' \| 'date' \| 'hour' \| 'minute' \| 'second'`。[详细类型定义](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/date-time-picker/type.ts) | N
renderLabel | Function | - | 自定义label。TS 类型：`(type: string, value: number) => string` | N
showWeek | Boolean | false | 【开发中】是否在日期旁边显示周几（如周一，周二，周日等） | N
start | String / Number | - | 选择器的最小可选时间，默认为当前时间-10年 | N
title | String | '选择时间' | 标题 | N
usePopup | Boolean | true | 是否使用弹出层包裹 | N
value | String / Number | - | 选中值。支持语法糖 `v-model` 或 `v-model:value`。TS 类型：`DateValue` `type DateValue = string \| number`。[详细类型定义](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/date-time-picker/type.ts) | N
defaultValue | String / Number | - | 选中值。非受控属性。TS 类型：`DateValue` `type DateValue = string \| number`。[详细类型定义](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/date-time-picker/type.ts) | N
onCancel | Function |  | TS 类型：`(context: { e: MouseEvent }) => void`<br/>取消按钮点击时触发 | N
onChange | Function |  | TS 类型：`(value: DateValue) => void`<br/>value改变时触发 | N
onConfirm | Function |  | TS 类型：`(value: DateValue) => void`<br/>确认按钮点击时触发 | N
onPick | Function |  | TS 类型：`(value: DateValue) => void`<br/>选中值发生变化时触发 | N

### DateTimePicker Events

名称 | 参数 | 描述
-- | -- | --
cancel | `(context: { e: MouseEvent })` | 取消按钮点击时触发
change | `(value: DateValue)` | value改变时触发
confirm | `(value: DateValue)` | 确认按钮点击时触发
pick | `(value: DateValue)` | 选中值发生变化时触发
