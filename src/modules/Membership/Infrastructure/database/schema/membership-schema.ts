import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const membershipTable = pgTable("memberships", {
  id: text("id").primaryKey()
  .notNull()
  .unique(),

  userId: text("userId")
  .notNull(),

  companyId: text("companyId")
  .notNull(),

  role: text("role")
  .notNull(),

  createdAt: timestamp("created_at")
  .defaultNow()
  .notNull(),

  updatedAt: timestamp("updated_at")
  .defaultNow()
  .notNull()
})