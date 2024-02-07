import { Link } from 'react-router-dom'

import { Country } from '@/utils/Country'
import { formatNumber } from '@/utils/formatNumber'

interface FlagCardProps {
  data: Country
}

export function FlagCard({ data }: FlagCardProps) {
  if (!data) {
    return null
  }

  const { name, flags, population, region, capital } = data

  return (
    <Link to={`/details/${name.common}`}>
      <div className="flex w-[300px] flex-col rounded-b-xl rounded-t-xl bg-white shadow-lg dark:bg-gray-800">
        <img
          src={flags.png}
          alt={name.common}
          className="h-[170px] w-full rounded-t-xl object-cover"
        />
        <div className="h-[180px] p-5">
          <h2 className="mb-3 font-bold">{name.common}</h2>
          <p className="mb-1 font-light">
            Population:{' '}
            <span className="text-sm text-muted-foreground">
              {formatNumber(population)}
            </span>
          </p>
          <p className="mb-1 font-light">
            Region:{' '}
            <span className="text-sm text-muted-foreground">{region}</span>
          </p>
          <p className="mb-1 font-light">
            Capital:{' '}
            <span className="text-sm text-muted-foreground">{capital}</span>
          </p>
        </div>
      </div>
    </Link>
  )
}
