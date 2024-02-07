import { ModeToggle } from './themes/theme-toggle'

export function Header() {
  return (
    <div className="border-b shadow-md dark:shadow-2xl">
      <div className="flex h-24 items-center gap-6 px-20">
        <p className="text-3xl font-bold">Where in the world?</p>
        <div className="ml-auto flex items-center">
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}
