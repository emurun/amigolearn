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
          <UserProgress activeCourse={userProgress.activeCourse}
            hearts={userProgress.hearts}
            points={userProgress.points}
            hasActiveSubscription={false} />

        </StickyWrapper>
      </Link>
      <FeedWrapper>

        <Header title={userProgress.activeCourse.title} />
      </FeedWrapper>
    </div>
  )
}

export default LearnPage;