import cn from 'classnames'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/future/image'

type Props = {
  title: string
  src: StaticImageData
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      // width="900"
      // height={'800'}
      className={cn('shadow-sm', {
        'hover:shadow-lg transition-shadow duration-200': slug
      })}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
