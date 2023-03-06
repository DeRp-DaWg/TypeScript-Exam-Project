import React, { useEffect, useState } from 'react'
import { capatilizeFirstChar } from '../helpers'
import { Category } from '../types'

type Props = {
  category: Category
}

export default function Slide({category}: Props) {
  const [slideIndex, setSlideIndex] = useState<number>(0)
  
  useEffect(() => {
    renderSlide()
  }, [slideIndex])
  
  
  function showSlides() {
    
  }
  
  function nextSlide() {
    setSlideIndex((slideIndex+1)%category.tags.length)
  }
  
  function prevSlide() {
    setSlideIndex((slideIndex+1)%category.tags.length)
  }
  
  function renderSlide(): JSX.Element {
    return (
      <img src={"http://localhost:5173/"+category.tags[slideIndex].imgurl}/>
    )
  }
  
  return (
    <div>
      <h2>{capatilizeFirstChar(category.tags[slideIndex].name)}</h2>
      {renderSlide()}
      <br/>
      <button onClick={prevSlide}>prev</button>
      <button onClick={nextSlide}>next</button>
    </div>
  )
}
