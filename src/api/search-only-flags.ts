import { api } from '@/lib/axios'
import  '@/utils/only-contry'

export async function FlagUnique(name: string) {
  const response = await api.get<CountryData[]>(`name/${name}`)
  return response.data[0]
}
