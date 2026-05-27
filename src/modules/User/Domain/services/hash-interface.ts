export interface HashPasswordInterface{
  hash(hash: string): Promise<string>
  compare(password: string, hash: string): Promise<boolean>
}