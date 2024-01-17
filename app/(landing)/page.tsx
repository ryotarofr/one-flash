import Auth from "@/components/Auth/auth";
import { Test } from "@/components/Test";
import { CardSection } from "@/components/layout/card-section";
import HeroCarousel from "@/components/layout/hero-carousel";
import Link from "next/link";


export default function IndexPage() {
  return (
    <div>
      <HeroCarousel />
      <CardSection />

      {/* <Test />
      <Auth />
      <Link href="/setting">go setting</Link> */}
    </div>
  )
}
