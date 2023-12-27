import {
  Card
} from "@/components/ui/card"
import { Icons } from "../shared/icons"


export const CardSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 m-4 md:space-x-2 space-y-4 md:space-y-0">
      <Card className="p-4">
        <div className="">
          <div className="flex md:flex-col md:justify-center md:mx-auto space-x-3 md:space-x-0 md:space-y-4 items-center">
            <div className="p-4 rounded-full border border-pink-500 hover:bg-pink-200">
              <Icons.heart className="text-pink-500" />
            </div>
            <div>モデルの紹介</div>
          </div>
        </div>
      </Card>
      <Card className="p-4">
        <div className="">
          <div className="flex md:flex-col md:justify-center md:mx-auto space-x-3 md:space-x-0 md:space-y-4 items-center">
            <div className="p-4 rounded-full border border-pink-500 hover:bg-pink-200">
              <Icons.calendar className="text-pink-500" />
            </div>
            <div>撮影会スケジュール</div>
          </div>
        </div>
      </Card>
      <Card className="p-4">
        <div className="">
          <div className="flex md:flex-col md:justify-center md:mx-auto space-x-3 md:space-x-0 md:space-y-4 items-center">
            <div className="p-4 rounded-full border border-pink-500 hover:bg-pink-200">
              <Icons.camera className="text-pink-500" />
            </div>
            <div>出張撮影サービス</div>
          </div>
        </div>
      </Card>
    </div>
  )
}