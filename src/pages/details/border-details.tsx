interface BorderDetailsProps {
  name: string
  onClick : () => void
}
export function BorderDetails({ name, onClick } : BorderDetailsProps) {
  return (
    <button onClick={onClick}>
      {name}
    </button>
  )
}


