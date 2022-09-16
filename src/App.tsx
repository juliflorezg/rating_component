import autoAnimate from '@formkit/auto-animate'
import React, { useContext, useEffect, useRef } from 'react'
import Card from './components/Card'
import Rating from './components/Rating'
import ThankYou from './components/ThankYou'
import { Context } from './store/Context'

function App() {
  const ctx = useContext(Context)
  const parent = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // console.log(ctx)
    // console.log(parent.current)
    parent.current && autoAnimate(parent.current)
  }, [ctx, parent])

  return (
    <Card maxWidth="400px" ref={parent}>
      {ctx.isMessageVisible ? <ThankYou /> : <Rating />}
    </Card>
  )
}

export default App
