/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { InputProps } from '../input';
import { PopupProps } from '../popup';
import { SelectInputProps, SelectInputBlurContext, SelectInputValueChangeContext } from '../select-input';
import { TagProps } from '../tag';
import { TreeProps, TreeNodeModel, TreeKeysType } from '../tree';
import { PopupVisibleChangeContext, PopupTriggerEvent, PopupTriggerSource } from '../popup';
import { TNode, TElement, TreeOptionData, TreeKeysType } from '../common';
import { MouseEvent, KeyboardEvent, FocusEvent } from 'react';

export interface TdTreeSelectProps<
  DataOption extends TreeOptionData = TreeOptionData,
  TreeValueType extends TreeSelectValue = TreeSelectValue,
> {
  /**
   * 宽度随内容自适应
   * @default false
   */
  autoWidth?: boolean;
  /**
   * 自动聚焦
   * @default false
   */
  autofocus?: boolean;
  /**
   * 无边框模式
   * @default false
   */
  borderless?: boolean;
  /**
   * 是否允许清空
   * @default false
   */
  clearable?: boolean;
  /**
   * 多选情况下，用于设置折叠项内容，默认为 `+N`。如果需要悬浮就显示其他内容，可以使用 collapsedItems 自定义。`value` 表示当前存在的所有标签，`collapsedSelectedItems` 表示折叠的标签，`count` 表示折叠的数量，`onClose` 表示移除标签的事件回调
   */
  collapsedItems?: TNode<{
    value: DataOption[];
    collapsedSelectedItems: DataOption[];
    count: number;
    onClose: (context: { index: number; e?: MouseEvent }) => void;
  }>;
  /**
   * 树选择的数据列表。结构：`[{ label: TNode, value: string | number, text: string, ... }]`，其中 `label` 表示选项呈现的内容，可自定义；`value` 表示选项的唯一值；表示当 `label` 用于选项复杂内容呈现时，`text` 用于搜索功能。<br />其中 `label` 和 `value` 可以使用 `keys` 属性定义别名
   * @default []
   */
  data?: Array<DataOption>;
  /**
   * 是否禁用组件
   */
  disabled?: boolean;
  /**
   * 当下拉列表为空时显示的内容
   */
  empty?: TNode;
  /**
   * 过滤方法，用于对现有数据进行搜索过滤，判断是否过滤某一项数据
   */
  filter?: (filterWords: string, option: DataOption) => boolean;
  /**
   * 是否可搜索
   * @default false
   */
  filterable?: boolean;
  /**
   * 透传给 输入框 Input 组件的全部属性
   */
  inputProps?: InputProps;
  /**
   * 输入框的值
   */
  inputValue?: string;
  /**
   * 输入框的值，非受控属性
   */
  defaultInputValue?: string;
  /**
   * 用来定义 `value / label / disabled / children` 在 `data` 数据中对应的字段别名，示例：`{ value: 'key', label: 'name', children: 'list' }`
   */
  keys?: TreeKeysType;
  /**
   * 左侧文本
   */
  label?: TNode;
  /**
   * 是否正在加载数据
   * @default false
   */
  loading?: boolean;
  /**
   * 远程加载时显示的文字，支持自定义。如加上超链接
   */
  loadingText?: TNode;
  /**
   * 用于控制多选数量，值为 0 则不限制
   * @default 0
   */
  max?: number;
  /**
   * 最小折叠数量，用于多选情况下折叠选中项，超出该数值的选中项折叠。值为 0 则表示不折叠
   * @default 0
   */
  minCollapsedNum?: number;
  /**
   * 是否允许多选
   * @default false
   */
  multiple?: boolean;
  /**
   * 面板内的底部内容
   */
  panelBottomContent?: TNode;
  /**
   * 面板内的顶部内容
   */
  panelTopContent?: TNode;
  /**
   * 占位符
   */
  placeholder?: string;
  /**
   * 透传 Popup 组件全部属性
   */
  popupProps?: PopupProps;
  /**
   * 是否显示下拉框
   */
  popupVisible?: boolean;
  /**
   * 是否显示下拉框，非受控属性
   */
  defaultPopupVisible?: boolean;
  /**
   * 组件前置图标
   */
  prefixIcon?: TElement;
  /**
   * 只读状态，值为真会隐藏输入框，且无法打开下拉框
   */
  readonly?: boolean;
  /**
   * 多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词
   * @default false
   */
  reserveKeyword?: boolean;
  /**
   * 【开发中】透传 SelectInput 筛选器输入框组件的全部属性
   */
  selectInputProps?: SelectInputProps;
  /**
   * 尺寸
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 输入框状态
   * @default default
   */
  status?: 'default' | 'success' | 'warning' | 'error';
  /**
   * 后置图标前的后置内容
   */
  suffix?: TNode;
  /**
   * 组件后置图标
   */
  suffixIcon?: TElement;
  /**
   * 透传 Tag 标签组件全部属性
   */
  tagProps?: TagProps;
  /**
   * 输入框下方提示文本，会根据不同的 `status` 呈现不同的样式
   */
  tips?: TNode;
  /**
   * 透传 Tree 组件的全部属性
   */
  treeProps?: TreeProps;
  /**
   * 选中值，泛型 `TreeValueType` 继承自 `TreeSelectValue`
   */
  value?: TreeValueType;
  /**
   * 选中值，泛型 `TreeValueType` 继承自 `TreeSelectValue`，非受控属性
   */
  defaultValue?: TreeValueType;
  /**
   * 自定义选中项呈现方式
   */
  valueDisplay?: string | TNode<{ value: TreeOptionData | TreeOptionData[]; onClose: (index: number) => void }>;
  /**
   * 用于控制选中值的类型。假设数据选项为：`[{ label: '姓名', value: 'name' }]`，value 表示值仅返回数据选项中的 value， object 表示值返回全部数据
   * @default value
   */
  valueType?: 'value' | 'object';
  /**
   * 输入框失去焦点时触发
   */
  onBlur?: (context: SelectInputBlurContext & { value: TreeSelectValue }) => void;
  /**
   * 节点选中状态变化时触发，`context.node` 表示当前变化的选项，`context. trigger` 表示触发变化的来源。泛型 `TreeValueType` 继承自 `TreeSelectValue`
   */
  onChange?: (value: TreeValueType, context: TreeSelectChangeContext<DataOption>) => void;
  /**
   * 点击清除按钮时触发
   */
  onClear?: (context: { e: MouseEvent<SVGSVGElement> }) => void;
  /**
   * 回车键按下时触发。`inputValue` 表示输入框的值，`value` 表示选中值。泛型 `TreeValueType` 继承 `TreeSelectValue`
   */
  onEnter?: (context: { inputValue: string; e: KeyboardEvent<HTMLDivElement>; value: TreeValueType }) => void;
  /**
   * 输入框获得焦点时触发
   */
  onFocus?: (context: { value: TreeSelectValue; e: FocusEvent<HTMLDivElement> }) => void;
  /**
   * 输入框值发生变化时触发，`context.trigger` 表示触发输入框值变化的来源：文本输入触发、清除按钮触发、失去焦点等
   */
  onInputChange?: (value: string, context: SelectInputValueChangeContext) => void;
  /**
   * 下拉框显示或隐藏时触发。单选场景，选中某个选项时触发关闭，此时需要添加参数 `node`
   */
  onPopupVisibleChange?: (visible: boolean, context: TreeSelectPopupVisibleContext<DataOption>) => void;
  /**
   * 多选模式下，选中数据被移除时触发
   */
  onRemove?: (options: RemoveOptions<DataOption, TreeValueType>) => void;
  /**
   * 输入值变化时，触发搜索事件。主要用于远程搜索新数据。设置 `filterable=true` 开启此功能。优先级高于本地数据搜索 `filter`，即一旦存在这个远程搜索事件 `filter` 失效
   */
  onSearch?: (
    filterWords: string,
    context: { e: KeyboardEvent<HTMLDivElement> | SelectInputValueChangeContext['e'] },
  ) => void;
}

export type TreeSelectValue = string | number | TreeOptionData | Array<string | number | TreeOptionData>;

export interface TreeSelectChangeContext<DataOption> {
  node: TreeNodeModel<DataOption>;
  data: DataOption;
  index?: number;
  trigger: TreeSelectValueChangeTrigger;
  e?: MouseEvent<any> | KeyboardEvent<HTMLInputElement> | Event;
}

export type TreeSelectValueChangeTrigger = 'clear' | 'tag-remove' | 'backspace' | 'check' | 'uncheck';

export interface TreeSelectPopupVisibleContext<T> {
  e?: PopupTriggerEvent | Event;
  node?: TreeNodeModel<T>;
  trigger?: PopupTriggerSource | 'clear';
}

export interface RemoveOptions<T extends TreeOptionData = TreeOptionData, N extends TreeSelectValue = TreeSelectValue> {
  value: N;
  data: T;
  index: number;
  node: TreeNodeModel<T>;
  e?: MouseEvent<SVGSVGElement> | KeyboardEvent<HTMLInputElement>;
  trigger: 'tag-remove' | 'backspace';
}
