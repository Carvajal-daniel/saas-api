
import { db } from "./database.js"
import type { UnitOfWork } from "./unit-of-work.interface.js"

export class DrizzleUnitOfWork implements UnitOfWork {

  async runInTransaction<T>(
    work: (tx: any) => Promise<T>
  ): Promise<T> {

    return await db.transaction(async (tx) => {
      return await work(tx)
    })

  }

}