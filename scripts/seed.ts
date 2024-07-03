import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"
import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");
    await db.delete(schema.courses)
    await db.delete(schema.userProgress)
    await db.delete(schema.units)
    await db.delete(schema.lessons)
    await db.delete(schema.challenges)
    await db.delete(schema.challengeOptions)
    await db.delete(schema.challengeProgress)

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Spanish",
        imageSrc: "/es.svg"
      },
      {
        id: 2,
        title: "French",
        imageSrc: "/fr.svg"
      },
      {
        id: 3,
        title: "Croatian",
        imageSrc: "/hr.svg"
      },
    ])

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1, //Spanish
        title: "Unit 1",
        description: "Learn the basics of Spanish",
        order: 1,

      }
    ])

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1,
        order: 1,
        title: "Nouns"

      },
      {
        id: 2,
        unitId: 1,
        order: 2,
        title: "Verbs",
      },
      {
        id: 3,
        unitId: 1,
        order: 3,
        title: "Verbs",
      },
      {
        id: 4,
        unitId: 1,
        order: 4,
        title: "Verbs",
      },
      {
        id: 5,
        unitId: 1,
        order: 5,
        title: "Verbs",
      }
    ])

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        order: 1,
        quesion: 'Which one of these is "the man"?'
      },
      {
        id: 2,
        lessonId: 1,
        type: "ASSIST",
        order: 2,
        quesion: "the man"
      },
      {
        id: 3,
        lessonId: 1,
        type: "SELECT",
        order: 3,
        quesion: 'Which one of these is "the robot"?'
      },

      // {
      //   id: 2,
      //   lessonId: 2,
      //   type: "ASSIST",
      //   order: 2,
      //   quesion: 'Which one of these is "the woman"?'
      // }
    ]);


    await db.insert(schema.challengeOptions).values([
      {

        challengeId: 1, //which one is the man 
        imageSrc: "/boy.svg",
        correct: true,
        text: "el hombre",
        audioSrc: "/es_man.mp3",
      },
      {

        challengeId: 1,
        imageSrc: "/girl.svg",
        correct: false,
        text: "la mujer",
        audioSrc: "/es_woman.mp3",
      },
      {

        challengeId: 1,
        imageSrc: "/zombie.svg",
        correct: false,
        text: "el robot",
        audioSrc: "/es_robot.mp3",
      },

    ]);

    await db.insert(schema.challengeOptions).values([
      {

        challengeId: 2, //which one is the man 
        correct: true,
        text: "el hombre",
        audioSrc: "/es_man.mp3",
      },
      {

        challengeId: 2,
        correct: false,
        text: "la mujer",
        audioSrc: "/es_woman.mp3",
      },
      {

        challengeId: 2,
        correct: false,
        text: "el robot",
        audioSrc: "/es_robot.mp3",
      },

    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 3,  //which one is the robot
        imageSrc: "/boy.svg",
        correct: false,
        text: "el hombre",
        audioSrc: "/es_man.mp3",
      },
      {

        challengeId: 3,
        imageSrc: "/girl.svg",
        correct: false,
        text: "la mujer",
        audioSrc: "/es_woman.mp3",
      },
      {

        challengeId: 3,
        imageSrc: "/zombie.svg",
        correct: true,
        text: "el robot",
        audioSrc: "/es_robot.mp3",
      },

    ]);


    await db.insert(schema.challenges).values([
      {
        id: 4,
        lessonId: 2, //verbs
        type: "SELECT",
        order: 1,
        quesion: 'Which one of these is "the man"?'
      },
      {
        id: 5,
        lessonId: 2,
        type: "ASSIST",
        order: 2,
        quesion: "the man"
      },
      {
        id: 6,
        lessonId: 2,
        type: "SELECT",
        order: 3,
        quesion: 'Which one of these is "the robot"?'
      },

      // {
      //   id: 2,
      //   lessonId: 2,
      //   type: "ASSIST",
      //   order: 2,
      //   quesion: 'Which one of these is "the woman"?'
      // }
    ]);
    console.log("Seeding finished");

  } catch (error) {
    console.error(error);
    throw new Error("failed to seed the database")
  }
}

main();