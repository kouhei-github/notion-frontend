import { Footer } from "@/app/(marketing)/_components/Footer"
import Heading from "@/app/(marketing)/_components/Heading"
import { Heroes } from "@/app/(marketing)/_components/Heros"

export default function MarketingPage() {
  return (
    <div className={"h-full flex flex-col"}>
      <div className='flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10'>
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </div>
  )
}
