import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

import { DetailsCard } from './details-card'

export function Details() {
  return (
    <div className="p-10">
      <Link to="/">
        <Button
          variant="outline"
          className="mb-10 flex w-auto items-center gap-2"
          size="lg"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      </Link>
      <DetailsCard />
    </div>
  )
}
