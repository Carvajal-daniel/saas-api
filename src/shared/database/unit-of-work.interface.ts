export interface UnitOfWork<TTransaction = unknown> {
  runInTransaction<T>(
    work: (tx: TTransaction) => Promise<T>
  ): Promise<T>
}