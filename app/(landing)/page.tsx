import { Test } from "@/components/Test";
import { CardSection } from "@/components/layout/card-section";
import HeroCarousel from "@/components/layout/hero-carousel";
import Link from "next/link";


export default function IndexPage() {
  return (
    <div>
      <HeroCarousel />
      <CardSection />
      <Test />
      <a href="http://0.0.0.0/api/social-auth/github">
        github OAuth
      </a>
    </div>
  )
}
