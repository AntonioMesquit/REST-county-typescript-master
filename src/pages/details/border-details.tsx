import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

import { FlagUnique } from '@/api/search-only-flags'
import { Skeleton } from '@/components/ui/skeleton'
import { formatNumber } from '@/utils/formatNumber'

import { BorderDetails } from './border-details'

export function DetailsCard() {
  const navigate = useNavigate()
  const params = useParams()
  const location = useLocation()
  const [borderCountries, setBorderCountries] = useState<string[]>([])

  const {
    data: pais,
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ['flagUnique'],
    queryFn: () => FlagUnique(String(params.param)),
  })

  useEffect(() => {
    if (pais) {
      const fetchBorders = async () => {
        const borders = pais.borders
        const borderDetails = await Promise.all(
          borders.map(async (borderCode: string) => {
            const borderDetails = await FlagUnique(borderCode)
            return borderDetails.name.common
          }),
        )
        setBorderCountries(borderDetails)
      }
      fetchBorders()
    }
  }, [pais])

  useEffect(() => {
    refetch()
  }, [location.pathname, params.param, refetch])

  const languages = pais ? pais.languages : null
  const currencyCode = pais ? Object.keys(pais.currencies)[0] : null
  const currencyInfo = pais ? pais.currencies[currencyCode] : null

  const currencyName = pais ? Object.keys(pais.name.nativeName)[0] : null
  const currencyNameInfo = pais ? pais.name.nativeName[currencyName] : null

  return (
    <div>
      {loading || !pais ? (
        <div className="flex space-x-32 space-y-10">
          <Skeleton className="h-[525px] w-[850px]" />
          <div className="flex flex-col gap-14">
            <Skeleton className="h-5 w-[150px]" />
            <div className="flex gap-14">
              <div>
                <Skeleton className="mb-3 h-3 w-[150px]" />
                <Skeleton className="mb-3 h-3 w-[150px]" />
                <Skeleton className="mb-3 h-3 w-[100px]" />
                <Skeleton className="mb-3 h-3 w-[150px]" />
                <Skeleton className="mb-3 h-3 w-[150px]" />
              </div>
              <div>
                <Skeleton className="mb-3 h-3 w-[100px]" />
                <Skeleton className="mb-3 h-3 w-[150px]" />
                <Skeleton className="mb-3 h-3 w-[150px]" />
              </div>
            </div>
            <Skeleton className="mb-3 h-12 w-[450px]" />
          </div>
        </div>
      ) : (
        <div className="flex space-x-32 space-y-10">
          <img
            src={pais?.flags.png}
            className="h-[525px] w-[850px]"
            alt={pais.name.common}
          />
          <div className="flex flex-col gap-14">
            <h1 className="h-5 text-3xl font-bold text-muted-foreground">
              {pais.name.common}
            </h1>
            <div className="flex gap-14">
              <div>
                <p className="text-xl font-semibold text-muted-foreground">
                  Native name:{' '}
                  <span className="text-base font-normal">
                    {currencyNameInfo.common}
                  </span>
                </p>

                <p className="text-xl font-semibold text-muted-foreground">
                  Population:{' '}
                  <span className="text-base font-normal">
                    {' '}
                    {formatNumber(pais.population)}
                  </span>
                </p>
                <p className="text-xl font-semibold text-muted-foreground">
                  Region:{' '}
                  <span className="text-base font-normal"> {pais.region}</span>
                </p>
                <p className="text-xl font-semibold text-muted-foreground">
                  Capital:{' '}
                  <span className="text-base font-normal"> {pais.capital}</span>
                </p>
              </div>
              <div>
                <p className="text-xl font-semibold text-muted-foreground">
                  Top Level Domain:{' '}
                  <span className="text-base font-normal"> {pais.tld[0]}</span>
                </p>
                <p className="text-xl font-semibold text-muted-foreground">
                  Currencies:{' '}
                  <span className="text-base font-normal">
                    {' '}
                    {currencyInfo.name}
                  </span>
                </p>
                <p className="text-xl font-semibold text-muted-foreground">
                  Languages:{' '}
                  <span className="text-base font-normal">
                    {' '}
                    {Object.entries(languages).map(([code, name]) => (
                      <span
                        key={code}
                        className="text-xl font-semibold text-muted-foreground"
                      >
                        <span className="text-base font-normal">{name}</span>{' '}
                      </span>
                    ))}
                  </span>
                </p>
              </div>
            </div>
            <p className="text-xl font-semibold text-muted-foreground">
              Borders:{' '}
              <span className="text-base font-normal">
                {borderCountries.length > 0
                  ? borderCountries.map((name, index) => (
                      <span
                        key={index}
                        className="text-xl font-semibold text-muted-foreground"
                      >
                        <BorderDetails name={name} param={params.param} />{' '}
                      </span>
                    ))
                  : 'No borders available'}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
