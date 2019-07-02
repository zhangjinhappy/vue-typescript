import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // 定义接口
    interface Element extends VNode {}
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
