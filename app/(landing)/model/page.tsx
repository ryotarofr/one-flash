import ModelCarousel from "@/components/model-carousel"
import { models } from "@/config/model";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TweetPreview from "@/components/tweet";

const ModelPage = () => {
  const modelData = models.sort((a, b) => a.id - b.id); // ソート
  const okayamaModels = modelData.filter(model => model.eria === 'okayama');
  const kansaiModels = modelData.filter(model => model.eria === 'kansai');

  return (
    <div>
      <div className="flex justify-center">
        <div className="mx-auto px-5 max-w-6xl">
          <div className="mx-4 sm:mx-0  py-4">
            <div className="text-xl font-semibold">所属モデル紹介</div>
            <div className="text-gray-500 font-light">model introduction</div>
          </div>
          <div className="grid md:grid-cols-4 md:space-x-10">
            <Tabs defaultValue="okayama" className="md:col-span-3">
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

export default ModelPage



