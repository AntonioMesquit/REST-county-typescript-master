import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { FilterMenu } from '@/components/filter-menu'
import { Input } from '@/components/ui/input'

import { ShowItems } from './show-items'

export function Home() {
  const [searchText, setSearchText] = useState('')
  const [filter, setFilter] = useState<string | undefined>(undefined)
  const location = useLocation()

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const filterParam = searchParams.get('filter') ?? undefined
    setFilter(filterParam)
  }, [location.search])

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }

  return (
    <div className="flex w-full flex-col gap-10 p-10">
      <div className="flex w-full justify-between pl-16 pr-20">
        <Input
          placeholder="Search for a country"
          className="w-[300px]"
          value={searchText}
          onChange={handleSearchChange}
        />
        <FilterMenu />
      </div>
      <ShowItems searchText={searchText} searchTextInput={filter} />
    </div>
  )
}
