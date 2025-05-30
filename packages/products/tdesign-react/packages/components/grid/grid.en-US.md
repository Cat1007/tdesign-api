:: BASE_DOC ::

## API
### Row Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，Typescript：`React.CSSProperties` | N
align | String | top | options: start/end/center/stretch/baseline/top/middle/bottom | N
gutter | Number / Object / Array | 0 | Typescript：`number \|  GutterObject \| Array<GutterObject \| number>` `interface GutterObject { xs: number; sm: number; md: number; lg: number, xl: number; xxl: number; } `。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/grid/type.ts) | N
justify | String | start | options: start/end/center/space-around/space-between | N
tag | String | div | \- | N

### Col Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，Typescript：`React.CSSProperties` | N
flex | String / Number | - | \- | N
lg | Number / Object | - | Typescript：`number \| BaseColProps` | N
md | Number / Object | - | Typescript：`number \| BaseColProps` | N
offset | Number | 0 | \- | N
order | Number | 0 | \- | N
pull | Number | 0 | \- | N
push | Number | 0 | \- | N
sm | Number / Object | - | Typescript：`number \| BaseColProps` | N
span | Number | - | \- | N
tag | String | div | \- | N
xl | Number / Object | - | Typescript：`number \| BaseColProps` | N
xs | Number / Object | - | Typescript：`number \| BaseColProps` `interface BaseColProps { offset: number; order: number; pull: number; push: number; span: number }`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/grid/type.ts) | N
xxl | Number / Object | - | Typescript：`number \| BaseColProps` | N
