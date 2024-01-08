import { InputForm } from "@/components/input-form"
import TweetPreview from "@/components/tweet"

const Personal = () => {
  return (
    <div className="flex justify-center mx-auto px-4">
      <div className="max-w-4xl grid md:grid-cols-4 md:space-x-10">
        <div className="md:col-span-3 pb-6">
          <InputForm />
        </div>
        <div className="md:col-span-1">
          <div className="text-center border-b text-xl">公式 X </div>
          <TweetPreview />
        </div>
      </div>
    </div>
  )
}

export default Personal