import { pgTable, text, timestamp } from "drizzle-orm/pg-core"

import { usersTable } from "../../../../User/Infrastructure/database/schema/user-schema.js"
import { CompanyTable } from "../../../../Company/Infrastructure/database/schema/company-schema.js"

export const membershipTable = pgTable("memberships", {

  id: text("id")
    .primaryKey()
    .notNull(),

  userId: text("user_id")
    .notNull()
    .references(() => usersTable.id),

  companyId: text("company_id")
    .notNull()
    .references(() => CompanyTable.id),

  role: text("role")
    .notNull(),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),

  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()

})