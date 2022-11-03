import { useEffect, useRef } from 'react'

const useDidMountEffect = (cb, dependencies = []) => {
  const didMount = useRef(false)

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true
      return
    }
    cb()
  }, dependencies)
}

export default useDidMountEffect
