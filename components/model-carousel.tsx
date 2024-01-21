"use client"

import { useEffect, useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { models } from '@/config/model'
import Image from 'next/image'
import { ModelCarouselItem } from './model-carousel-item'
import { Model } from '@/types/model'


function ModelCarousel({ data }: { data: Model }) {
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
    <div className="p-6 space-y-8 container max-w-3xl mx-auto">
      <div className="relative">
        <div className='hidden md:block'>
          <button
            onClick={handlePrevious}
            className="h-8 w-8 rounded-full flex items-center justify-center bg-white absolute top-1/2 -translate-y-1/2 z-10 shadow-md left-4"
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
            className="h-8 w-8 rounded-full flex items-center justify-center bg-white  absolute top-1/2 -translate-y-1/2 z-10 shadow-md right-4"
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
        </div>
        <div>
          <div>
            <div className='text-center text-xl md:text-2xl lg:text-4xl italic font-semibold border-b mb-2'>
              {data.name}
            </div>
            <div className="overflow-hidden" ref={emblaRef}>
              <div className='flex'>
                {data.pictures.map((picture, index) => (
                  <div key={index} className="flex-[0_0_100%]  aspect-video w-full  mx-4 overflow-hidden">
                    <Image src={picture} alt="sample" width={2000} height={1500} className="w-full h-full object-cover rounded-lg" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* 下のドット(いらないので非表示にしてる) */}
      <div className='hidden'>
        <div className="flex justify-center  gap-3">
          {data.pictures.map((picture, index) => (
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
          {data.pictures.map((picture, index) => (
            <button key={index} onClick={() => handleThumbClick(index)} className="flex-[0_0_28%]">
              <div
                className="aspect-video w-full flex items-center justify-center text-xl font-bold"
                style={{
                  opacity: index === selectedIndex ? 1 : 0.6,
                }}
              >
                <img src={picture} alt="thumbnail" className="object-cover rounded-lg" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ModelCarousel