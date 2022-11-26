type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  return (
    <time dateTime={dateString}>
      {new Date(dateString).toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })}
    </time>
  )
}

export default DateFormatter
