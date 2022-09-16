import React, { useState } from 'react'

interface Props {
  children: JSX.Element
}

interface ContextType {
  isMessageVisible: boolean
  setMessageVisibility: (isVisible: boolean) => void
  ratingStars: string
  setAmountOfStars: (value: string) => void
}

export const Context = React.createContext<ContextType>({
  isMessageVisible: false,
  setMessageVisibility: isVisible => {},
  ratingStars: null as unknown as string,
  setAmountOfStars: value => {},
})

export const ContextProvider = ({ children }: Props) => {
  const [isMessageVisible, setIsMessageVisible] = useState(false)
  const [ratingStars, setRatingStars] = useState<string>(
    null as unknown as string
  )

  const setMessageVisibility = (isVisible: boolean) => {
    setIsMessageVisible(isVisible)
  }

  const setAmountOfStars = (value: string) =>{
    setRatingStars(value)
  }

  return (
    <Context.Provider
      value={{
        isMessageVisible,
        setMessageVisibility,
        ratingStars,
        setAmountOfStars,
      }}
    >
      {children}
    </Context.Provider>
  )

  // return <Context1.Provider>
}
