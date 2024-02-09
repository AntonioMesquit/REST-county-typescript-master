import { ModeToggle } from './themes/theme-toggle'

export function Header() {
  return (
    <div className="border-b shadow-md dark:shadow-2xl">
      <div className="flex h-24 items-center gap-16 px-20">
        <p className="text-1xl font-bold w-full lg:text-3xl">Where in the world?</p>
        <div className="ml-auto flex items-center">
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}
