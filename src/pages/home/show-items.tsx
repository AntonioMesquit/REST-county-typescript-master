import { useQuery } from '@tanstack/react-query'

import { flags } from '@/api/search-all-flags'
import { Skeleton } from '@/components/ui/skeleton'
import { Country } from '@/utils/country'
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
    filteredOrders = Array.from({ length: 50 });
  } else if (orders instanceof Array) {
    filteredOrders = orders.filter((order: Country) => {
      const nameMatch = searchText
        ? order.name.common.toLowerCase().includes(searchText.toLowerCase())
        : true;
      const regionMatch = searchTextInput
        ? order.region.includes(searchTextInput)
        : true;
      return nameMatch && regionMatch;
    });
  }
  

  if (!searchText && !searchTextInput) {
    filteredOrders = (orders || []) as Country[];
  }


  return (
    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5  ">
      {filteredOrders.map((order, i) => (
        <FlagCard key={i} data={order} />
      ))}
      {loading &&
        Array.from({ length: 50 }).map((_, i) => (
          <div className="flex flex-col space-y-3" key={i}>
            <Skeleton className="h-[170px] w-[300px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="mb-3 h-6 w-[300px]" />
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ))}
    </div>
  )
}
