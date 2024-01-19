import { InputForm } from "@/components/contct-form"
import TweetPreview from "@/components/tweet"

const ContactPage = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="mx-auto px-5 max-w-4xl">
          <div className="mx-4 sm:mx-0  py-4">
            <div className="text-xl font-semibold">お問い合わせ</div>
            <div className="text-gray-500 font-light">contact</div>
          </div>
          <div className="grid md:grid-cols-4 md:space-x-10 mt-4">
            <div className="md:col-span-3 pb-6">
              <InputForm />
            </div>
            <div className="md:col-span-1">
              <div className="text-center border-b text-xl">公式 X </div>
              <TweetPreview />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage