"use client"

import { useEffect, useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  })

  const [selectedIndex, setSelectedIndex] = useState(0)

  const updateCurrent = () => {
    if (!emblaApi || !emblaThumbsApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaApi.selectedScrollSnap())
  }

  const handlePrevious = () => {
    emblaApi?.scrollPrev()

    updateCurrent()
  }

  const handleNext = () => {
    emblaApi?.scrollNext()

    updateCurrent()
  }

  const handleThumbClick = (index: number) => {
    if (!emblaApi || !emblaThumbsApi) return
    emblaApi.scrollTo(index)

    updateCurrent()
  }

  return (
    // メインのスライダー
    <div className="mx-auto">
      <div className="relative">
        <button
          onClick={handlePrevious}
          className="h-8 w-8 lg:h-12 lg:w-12 rounded-full flex items-center justify-center bg-white/20 absolute top-1/2 -translate-y-1/2 z-10 shadow-md left-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="h-8 w-8 lg:h-12 lg:w-12 rounded-full flex items-center justify-center bg-white/20  absolute top-1/2 -translate-y-1/2 z-10 shadow-md right-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 rotate-180"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div key={index} className="flex-[0_0_100%]  aspect-video w-full overflow-hidden">
                <Image src={slide.url} alt="sample" priority={true} width={1000} height={1000} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 下のドット */}
      {/* <div className="flex justify-center  gap-3">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => handleThumbClick(index)}
            className={`w-3 h-3 rounded-full ${index === selectedIndex ? 'bg-gray-500' : 'bg-gray-300'}`}
          ></button>
        ))}
      </div> */}

      {/* プレビューのスライダー */}
      {/* <div className="overflow-hidden" ref={emblaThumbsRef}>
        <div className="flex  gap-3">
          {slides.map((thumb, index) => (
            <button key={index} onClick={() => handleThumbClick(index)} className="flex-[0_0_28%]">
              <div
                className="aspect-video w-full flex items-center justify-center text-xl font-bold"
                style={{
                  opacity: index === selectedIndex ? 1 : 0.6,
                }}
              >
                <img src={thumb.url} alt="thumbnail" className="object-cover rounded-lg" />
              </div>
            </button>
          ))}
        </div>
      </div> */}
    </div>
  )
}

export default HeroCarousel

const slides = [
  {
    url: '/image/77940-1.jpg',
  },
  {
    url: '/image/77931.jpg',
  },
  {
    url: '/image/4913959475038897143.99396958218ba7a03177a3fe4a737ae1.23080911.jpeg',
  },
  {
    url: '/image/IMG_4712-1.jpg',
  },
]
