import { cache } from "react";
import { eq } from "drizzle-orm"
import db from "@/db/drizzle"
import { auth } from "@clerk/nextjs/server"
import { courses, userProgress } from "@/db/schema";

export const getCourses = cache(async () => {
  const data = await db.query.courses.findMany();

  return data;

})


export const getUserProgress = cache(async () => {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const data2 = await db.query.userProgress.findFirst({
    where: eq(userProgress.userId, userId),
    with: {
      activeCourse: true,
    }
  })

  return data2;
})

export const getCourseById = cache(async (courseId: number) => {
  const data = await db.query.courses.findFirst({
    where: eq(courses.id, courseId),
  })
  return data;
})