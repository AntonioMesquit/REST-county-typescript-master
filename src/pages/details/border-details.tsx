// BorderDetails.tsx
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { FlagUnique } from '@/api/search-only-flags'
import { Button } from '@/components/ui/button'

interface BorderDetailsProps {
  name: string | null
}

export function BorderDetails({ name }: BorderDetailsProps): JSX.Element {
  const navigate = useNavigate()
  const params = useParams()

  const { data: unico, refetch } = useQuery({
    queryKey: ['flaa'],
    queryFn: () => FlagUnique(String(name)),
  })

  useEffect(() => {
    return () => {
      refetch()
    }
  }, [params.param, refetch])
  console.log(unico?.name.common)
  return (
    <span className="p-2 shadow-xl">
      <Link to={`/details/${name}`}>
        <Button variant="outline" onClick={() => navigate(`/details/${name}`)}>
          {unico?.name.common}
        </Button>
      </Link>
    </span>
  )
}
