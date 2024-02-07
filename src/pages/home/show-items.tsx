import { useQuery } from '@tanstack/react-query'

import { flags } from '@/api/search-all-flags'
import { Skeleton } from '@/components/ui/skeleton'
import { Country } from '@/utils/Country'

import { FlagCard } from './flag-card'
interface ShowItemsProps {
  searchText: string
  searchTextInput?: string
}

export function ShowItems({ searchText, searchTextInput }: ShowItemsProps) {
  const { data: orders, isLoading: loading } = useQuery({
    queryKey: ['orders'],
    queryFn: flags,
  })

  let filteredOrders: Country[] = []

  if (loading) {
    filteredOrders = Array.from({ length: 50 })
  } else if (orders) {
    filteredOrders = orders.filter((order: Country) => {
      const nameMatch = searchText
        ? order.name.common.toLowerCase().includes(searchText.toLowerCase())
        : true
      const regionMatch = searchTextInput
        ? order.region.includes(searchTextInput)
        : true
      return nameMatch && regionMatch
    })
  }

  // Se nenhum parâmetro de pesquisa estiver presente, exibimos todos os itens
  if (!searchText && !searchTextInput) {
    filteredOrders = orders || []
  }

  return (
    <div className="grid grid-cols-4 justify-items-center gap-y-8">
      {filteredOrders.map((order, i) => (
        <FlagCard key={i} data={order} />
      ))}
      {loading &&
        Array.from({ length: 50 }).map((_, i) => (
          <div className="flex flex-col space-y-3" key={i}>
            <Skeleton className="h-[170px] w-[300px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="mt3 mb-3 h-6 w-full" />
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ))}
    </div>
  )
}
