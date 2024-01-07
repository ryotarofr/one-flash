import { Test } from "@/components/Test"
import { InputForm, InputWithButton } from "@/components/input-form"
import ModelCarousel from "@/components/model-carousel"
import { models } from "@/config/model";
import { Model } from "@/types/model";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const ModelPage = () => {
  const modelData = models.sort((a, b) => a.id - b.id); // ソート
  const okayamaModels = modelData.filter(model => model.eria === 'okayama');
  const kansaiModels = modelData.filter(model => model.eria === 'kansai');

  return (
    <div>
      <div className="">

        <div className="max-w-3xl mx-auto">
          <div className="mx-4 sm:mx-0  py-4">
            <div className="text-xl font-semibold">所属モデル紹介</div>
            <div className="text-gray-500 font-light">model introduction</div>
          </div>
          <Tabs defaultValue="okayama" className="">
            <div className="flex justify-end">
              <TabsList className="mx-4">
                <TabsTrigger value="okayama">岡山エリア</TabsTrigger>
                <TabsTrigger value="kansai">関西エリア</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="okayama">
              {okayamaModels.map((model, index) => (
                <div key={index} className="my-4">
                  <ModelCarousel data={model} />
                </div>
              ))}
            </TabsContent>
            <TabsContent value="kansai">
              {kansaiModels.map((model, index) => (
                <div key={index} className="my-4">
                  <ModelCarousel data={model} />
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
      {/* <div className="flex justify-center my-5">
        <InputWithButton />
      </div> */}
    </div>
  )
}

export default ModelPage