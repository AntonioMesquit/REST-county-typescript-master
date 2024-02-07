import { api } from '@/lib/axios'
interface fetchCountriesWithBordersProps {
  cca3: string
} 

export async function fetchCountriesWithBorders ({ cca3 } : fetchCountriesWithBordersProps) {
  try {
    const response = await api.get<CountryData[]>(`alpha/${cca3}`)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error('Erro ao buscar países:', error)
    return []
  }
}

