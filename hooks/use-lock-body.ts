import * as React from "react"
// このコードはdocument.body.style.overflowをhiddenに設定してページのスクロールをロックします。そして、クリーンアップ関数として元のoverflowスタイルを復元する関数を返します。
// 
// @see https://usehooks.com/useLockBodyScroll.
export function useLockBody() {
  React.useLayoutEffect((): (() => void) => {
    const originalStyle: string = window.getComputedStyle(
      document.body
    ).overflow
    document.body.style.overflow = "hidden"
    return () => (document.body.style.overflow = originalStyle)
  }, [])
}
