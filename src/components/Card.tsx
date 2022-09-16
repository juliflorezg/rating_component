import React, { useEffect, useState } from 'react'

interface Props {
  children: JSX.Element
  maxWidth: string
  ref: React.MutableRefObject<null>
}

// type Ref = React.MutableRefObject<null>



// export default function Card(props: Props, ref: Ref) {
//   // console.log(props.ref)
//   const [cssClasses, setCssClasses] = useState('')
//   useEffect(() => {
//     setCssClasses(`max-w-[${props.maxWidth}] p-6 bg-dark-blue rounded-2xl`)
//   }, [props.maxWidth])

//   // let cssClasses ='max-w-[400px] p-5 bg-dark-blue rounded-2xl'
//   return (
//     <div className={cssClasses} ref={ref}>
//       {props.children}
//     </div>
//   )
// }

const Card = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  // console.log(props.ref)
  const [cssClasses, setCssClasses] = useState('')
  useEffect(() => {
    setCssClasses(`max-w-[${props.maxWidth}] p-6 bg-dark-blue rounded-2xl sm:p-7`)
  }, [props.maxWidth])

  // let cssClasses ='max-w-[400px] p-5 bg-dark-blue rounded-2xl'
  return (
    <div className={cssClasses} ref={ref}>
      {props.children}
    </div>
  )
})

// const Card = React.forwardRef((props, ref) => {
//   // console.log(props.ref)
//   const [cssClasses, setCssClasses] = useState('')
//   useEffect(() => {
//     setCssClasses(`max-w-[${props.maxWidth}] p-6 bg-dark-blue rounded-2xl`)
//   }, [props.maxWidth])

//   // let cssClasses ='max-w-[400px] p-5 bg-dark-blue rounded-2xl'
//   return (
//     <div className={cssClasses} ref={ref}>
//       {props.children}
//     </div>
//   )
// })

export default Card 
// const ref = React.createRef()
/* <Card ref={ref}></Card> */ 