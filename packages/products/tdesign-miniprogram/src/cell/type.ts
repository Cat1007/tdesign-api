/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdCellProps {
  /**
   * 右侧内容的对齐方式，默认居中对齐
   * @default middle
   */
  align?: {
    type: StringConstructor;
    value?: 'top' | 'middle' | 'bottom';
  };
  /**
   * 是否显示右侧箭头
   * @default false
   */
  arrow?: {
    type: null;
    value?: boolean | object;
  };
  /**
   * 是否显示下边框
   * @default true
   */
  bordered?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 下方内容描述
   */
  description?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否开启点击反馈
   */
  hover?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 主图
   */
  image?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 链接跳转类型
   * @default navigateTo
   */
  jumpType?: {
    type: StringConstructor;
    value?: 'switchTab' | 'reLaunch' | 'redirectTo' | 'navigateTo';
  };
  /**
   * 左侧图标，出现在单元格标题的左侧
   */
  leftIcon?: {
    type: null;
    value?: string | object;
  };
  /**
   * 和标题同行的说明文字
   */
  note?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否显示表单必填星号
   * @default false
   */
  required?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 最右侧图标
   */
  rightIcon?: {
    type: null;
    value?: string | object;
  };
  /**
   * 标题
   */
  title?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 点击后跳转链接地址。如果值为空，则表示不需要跳转
   * @default ''
   */
  url?: {
    type: StringConstructor;
    value?: string;
  };
}
