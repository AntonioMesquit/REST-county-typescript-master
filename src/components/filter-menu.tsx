import { MapIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function FilterMenu() {
  const navigate = useNavigate()

  const handleFilterClick = (region: string) => {
    navigate(`?filter=${region}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex select-none items-center gap-2"
        >
          Filter by Region
          <MapIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem asChild>
          <button
            onClick={() => handleFilterClick('Africa')}
            className="w-full cursor-pointer"
          >
            Africa
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <button
            onClick={() => handleFilterClick('America')}
            className="w-full cursor-pointer"
          >
            America
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <button
            onClick={() => handleFilterClick('Asia')}
            className="w-full cursor-pointer"
          >
            Asia
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <button
            onClick={() => handleFilterClick('Europe')}
            className="w-full cursor-pointer"
          >
            Europe
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <button
            onClick={() => handleFilterClick('Oceania')}
            className="w-full cursor-pointer"
          >
            Oceania
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
