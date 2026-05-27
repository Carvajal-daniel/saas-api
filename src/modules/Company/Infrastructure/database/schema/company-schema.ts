import { boolean, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const CompanyTable = pgTable("companies", { 
  id: text("id").primaryKey().notNull(),
  name: text("name").notNull(),
  country: text("country").notNull(), 
  cnpj: text("cnpj").unique(),
  rif: text("rif").unique(),
  isInformal: boolean("is_informal").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull(),
});