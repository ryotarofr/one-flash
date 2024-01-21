"use client"

import { useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { CheckSquare, ChevronDown, Square } from 'lucide-react'



function PersonalCarousel() {
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


  // menubar state
  const [area, setArea] = useState(
    {
      "osaka": true,
      "hyogo": true,
      "okayama": true
    },

  )

  const handleClickOsaka = () => {
    setArea((prevArea) => ({
      ...prevArea,
      osaka: !prevArea.osaka,
    }));
  }
  const handleClickHyogo = () => {
    setArea((prevArea) => ({
      ...prevArea,
      hyogo: !prevArea.hyogo,
    }));
  }

  const handleClickOkayama = () => {
    setArea((prevArea) => ({
      ...prevArea,
      okayama: !prevArea.okayama,
    }));
  }

  return (

    <div className="mx-auto">
      {/* menubar */}
      <div className='my-2'>
        <Menubar className=''>
          <MenubarMenu>
            <MenubarTrigger className='text-lg'>エリア<ChevronDown className='ml-2 text-gray-500' /></MenubarTrigger>
            <MenubarContent className='bg-white/80'>
              <MenubarItem>
                {area.osaka ? <CheckSquare onClick={handleClickOsaka} size="18px" color='green' /> : <Square size="18px" onClick={handleClickOsaka} />}{" "}<span onClick={handleClickOsaka} className='ml-2'>大阪</span>
              </MenubarItem>
              <MenubarItem>
                {area.hyogo ? <CheckSquare onClick={handleClickHyogo} size="18px" color='green' /> : <Square size="18px" onClick={handleClickHyogo} />}<span onClick={handleClickHyogo} className='ml-2'>兵庫</span>
              </MenubarItem>
              <MenubarItem>
                {area.okayama ? <CheckSquare onClick={handleClickOkayama} size="18px" color='green' /> : <Square size="18px" onClick={handleClickOkayama} />}{" "}<span onClick={handleClickOkayama} className='ml-2'>岡山</span>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>

      {/* メインのスライダー */}
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
                <Image src={slide.url} alt="sample" priority={true} width={1000} height={1000} className="w-full h-full object-cover rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 下のドット */}
      <div className='hidden'>
        <div className="flex justify-center gap-3">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => handleThumbClick(index)}
              className={`w-3 h-3 rounded-full ${index === selectedIndex ? 'bg-gray-500' : 'bg-gray-300'}`}
            ></button>
          ))}
        </div>
      </div>

      {/* プレビューのスライダー */}
      <div className="overflow-hidden" ref={emblaThumbsRef}>
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
      </div>
    </div>
  )
}

export default PersonalCarousel

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
