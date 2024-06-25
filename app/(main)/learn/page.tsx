import { StickyWrapper } from "@/components/sticky-wrapper";
import { FeedWrapper } from "@/components/feed-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";
import Link from "next/link";
import { getUserProgress } from "@/db/queries";
import { upsertUserProgress } from "@/actions/user-progress";
import { redirect } from "next/navigation";

const LearnPage = async () => {
  const userProgressData = getUserProgress();
  const [userProgress] = await Promise.all([userProgressData]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses")
  }

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <Link href="/courses">
        <StickyWrapper>
          <UserProgress activeCourse={{ title: "Spanish", imageSrc: "/es.svg" }} hearts={5} points={100} hasActiveSubscription={false} />

        </StickyWrapper>
      </Link>
      <FeedWrapper>

        <Header title="Spanish" />
      </FeedWrapper>
    </div>
  )
}

export default LearnPage;