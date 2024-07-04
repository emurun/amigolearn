import { StickyWrapper } from "@/components/sticky-wrapper";
import { FeedWrapper } from "@/components/feed-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";
import Link from "next/link";
import { getLessonPercentage, getUserProgress, getCourseProgress, getUnits } from "@/db/queries";
import { upsertUserProgress } from "@/actions/user-progress";
import { redirect } from "next/navigation";
import { } from "@/db/queries"
import { Unit } from "./unit";
import { Quests } from "@/components/ui/quests";

const LearnPage = async () => {
  const userProgressData = getUserProgress();
  const courseProgressData = getCourseProgress();
  const lessonPercentageData = getLessonPercentage();
  const unitsData = getUnits();



  const [userProgress, units, courseProgress, lessonPercentage] = await Promise.all([userProgressData, unitsData, courseProgressData, lessonPercentageData]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses")
  }

  if (!courseProgress) {
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
          <Quests points={userProgress.points} />
        </StickyWrapper>
      </Link>
      <FeedWrapper>

        <Header title={userProgress.activeCourse.title} />
        {units.map((unit) => (
          <div className="mb-10">
            <Unit id={unit.id} order={unit.order} description={unit.description} title={unit.title}
              lessons={unit.lessons} activeLesson={courseProgress.activeLesson} activeLessonPercentage={lessonPercentage} />
          </div>
        ))}
      </FeedWrapper>
    </div>
  )
}

export default LearnPage;