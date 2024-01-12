import { Test } from "@/components/Test";
import { CardSection } from "@/components/layout/card-section";
import HeroCarousel from "@/components/layout/hero-carousel";


export default function IndexPage() {
  return (
    <div>
      <HeroCarousel />
      <CardSection />
      
      <Test />
    </div>
  )
}
