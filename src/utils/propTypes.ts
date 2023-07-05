/*
 * @FilePath: propTypes.ts
 * @Author: lianxin wsl1933467270@gmail.com
 * @Date: 2023-06-30 14:22:26
 * @LastEditors: lianxin wsl1933467270@gmail.com
 * @LastEditTime: 2023-06-30 15:15:34
 * Copyright (c) 2023 by ${git_name} email: ${git_email}, All Rights Reserved.
 * @Descripttion:自定义类型 propTypes
 */
import { createTypes, VueTypesInterface, VueTypeValidableDef } from 'vue-types'
import { CSSProperties } from 'vue'

// 自定义扩展vue-types
type PropTypes = VueTypesInterface & {
  readonly style: VueTypeValidableDef<CSSProperties>
}

const propTypes = createTypes({
  func: undefined,
  bool: undefined,
  string: undefined,
  number: undefined,
  object: undefined,
  integer: undefined
}) as PropTypes

// 需要自定义扩展的类型
// see: https://dwightjack.github.io/vue-types/advanced/extending-vue-types.html#the-extend-method
propTypes.extend([
  {
    name: 'style',
    getter: true,
    type: [String, Object],
    default: undefined
  }
])

export { propTypes }
