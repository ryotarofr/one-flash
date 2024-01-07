import { Model } from "@/types/model"
import Image from "next/image"

export const ModelCarouselItem = ({ data }: { data: Model }) => {
  return (

    <div className=' overflow-hidden flex'>
      {data.pictures.map((picture, index) => (
        <div key={index} className="flex-[0_0_100%]  aspect-video w-full  mx-4 overflow-hidden">
          <Image src={picture} alt="sample" width={2000} height={1500} className="w-full h-full object-cover rounded-lg" />
        </div>
      ))}
    </div>

  )
}