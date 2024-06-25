import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type Props = {
  title: string
}

export const Header = ({ title }: Props) => {
  return (
    <div className="sticky top-0 bg-white pb-3 lg:pt-[28px] lg:mt-[-28px] flex items-center justify-between border-b-2 mb-5 text-neutral-400 lg: z-50">
      {/* don't need to go to courses page when a user clicks spanish flag or arrow as we only have 1 language href="/courses" */}
      <Link href="/courses">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="h-5 w-5 strke-2 text-neutral-400" />
        </Button>

      </Link>
      <h1 className="font-bold text-lg">
        {title}
      </h1>
      <div>
      </div>
    </div>
  )
}