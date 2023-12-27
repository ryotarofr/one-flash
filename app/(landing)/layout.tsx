
// import { SiteFooter } from "@/components/layout/site-footer"
import { Navbar } from "@/components/nabvar"
import { landingConfig } from "@/config/landing"

// import { getCurrentUser } from "@/lib/session"
import { Suspense } from "react"

interface LandingLayoutProps {
  children: React.ReactNode
}

export default async function LandingLayout({
  children,
}: LandingLayoutProps) {
  // const user = await getCurrentUser()

  return (
    <div className="flex min-h-screen flex-col">
      <Suspense fallback="...">
        <Navbar items={landingConfig.mainNav} scroll={true} />
      </Suspense>
      <main className="flex-1">{children}</main>
      {/* <SiteFooter /> */}
    </div>
  )
}
