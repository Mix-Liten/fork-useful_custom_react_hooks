import { useRef } from 'react'
import useDidMountEffect from './useDidMountEffect'

export default function LongPressComponent() {
  useDidMountEffect(() => {
    // react please run me if 'key' changes, but not on initial render
  }, [state.key])

  return (
    <div
      ref={elementRef}
      style={{
        backgroundColor: 'red',
        width: '100px',
        height: '100px',
        position: 'absolute',
        top: 'calc(50% - 50px)',
        left: 'calc(50% - 50px)',
      }}
    />
  )
}
