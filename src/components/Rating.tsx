import React, { useContext } from 'react'
import { Context } from '../store/Context'
export default function Rating() {
  const { setMessageVisibility, ratingStars, setAmountOfStars } =
    useContext(Context)

  // const [ratingStars, setRatingStars] = useState<String>(null as unknown as String)

  const buttonClickHandler: (e:React.MouseEvent) => void = e => {
    // console.log(e.target.textContent)
    console.log(e.currentTarget.textContent)
    let stars= e.currentTarget.textContent as string
    setAmountOfStars(stars)
  }

  const submitHandler = () => {
    // debugger
    setMessageVisibility(true)
  }

  return (
    <div>
      <div className="inline-block p-[14px] bg-medium-grey rounded-full">
        <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
            fill="#FC7614"
          />
        </svg>
      </div>
      <h3 className="mb-2 text-xl text-white font-bold">How did we do?</h3>
      <p className="mb-6 text-[14px] text-light-grey">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex justify-between mb-6 text-16">
        <button
          className={`h-[45px] w-[45px] text-center align-middle ${
            ratingStars === '1'
              ? 'bg-orange text-white'
              : 'bg-medium-grey text-light-grey'
          }  rounded-full hover:bg-light-grey hover:text-white transition duration-200 ease-in-out`}
          onClick={buttonClickHandler}
        >
          1
        </button>
        <button
          className={`h-[45px] w-[45px] text-center align-middle ${
            ratingStars === '2'
              ? 'bg-orange text-white'
              : 'bg-medium-grey text-light-grey'
          }  rounded-full hover:bg-light-grey hover:text-white transition duration-200 ease-in-out`}
          onClick={buttonClickHandler}
        >
          2
        </button>
        <button
          className={`h-[45px] w-[45px] text-center align-middle ${
            ratingStars === '3'
              ? 'bg-orange text-white'
              : 'bg-medium-grey text-light-grey'
          }  rounded-full hover:bg-light-grey hover:text-white transition duration-200 ease-in-out`}
          onClick={buttonClickHandler}
        >
          3
        </button>
        <button
          className={`h-[45px] w-[45px] text-center align-middle ${
            ratingStars === '4'
              ? 'bg-orange text-white'
              : 'bg-medium-grey text-light-grey'
          }  rounded-full hover:bg-light-grey hover:text-white transition duration-200 ease-in-out`}
          onClick={buttonClickHandler}
        >
          4
        </button>
        <button
          className={`h-[45px] w-[45px] text-center align-middle ${
            ratingStars === '5'
              ? 'bg-orange text-white'
              : 'bg-medium-grey text-light-grey'
          }  rounded-full hover:bg-light-grey hover:text-white transition duration-200 ease-in-out`}
          onClick={buttonClickHandler}
        >
          5
        </button>
      </div>

      <button
        className="w-full py-4 uppercase text-white text-15 tracking-widest align-middle bg-orange rounded-full hover:opacity-80 disabled:bg-light-grey disabled:cursor-not-allowed"
        disabled={ratingStars === null}
        onClick={submitHandler}
      >
        submit
      </button>
    </div>
  )
}
