import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Define the courses table with one entry for the Spanish course
export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  imageSrc: text("image_src").notNull(),
});

// Define relationships for courses
export const coursesRelations = relations(courses, ({ many }) => ({
  userProgress: many(userProgress),
}));

// Define the user_progress table
export const userProgress = pgTable("user_progress", {
  userId: text("user_id").primaryKey(),
  userName: text("user_name").notNull().default("User"),
  userImageSrc: text("user_image_src").notNull().default("/mascot.svg"),
  activeCourseId: integer("active_course_id").references(() => courses.id, { onDelete: "cascade" }).notNull(),
  hearts: integer("hearts").notNull().default(5),
  points: integer("points").notNull().default(0),
});



// Define relationships for user_progress
export const userProgressRelations = relations(userProgress, ({ one }) => ({
  activeCourse: one(courses, {
    fields: [userProgress.activeCourseId],
    references: [courses.id],
  }),
}));
