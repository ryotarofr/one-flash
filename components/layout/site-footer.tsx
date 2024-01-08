import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="pb-10">
      <div className="border-t border-gray-400 mt-10 pt-10 px-6 sm:px-10 flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <Link className="text-sm hover:underline" href="#">
            プライバシーポリシー
          </Link>
        </div>
        <div className="text-sm">© LLC Tito Group. All rights reserved.</div>
        <div className="mt-4 md:mt-0">
          <Link href="#">
            <Button className="text-sm" variant="ghost">
              Back to Top
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  )
}