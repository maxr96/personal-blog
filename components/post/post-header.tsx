import { StaticImageData } from 'next/future/image'
import DateFormatter from '../date-formatter'
import CoverImage from './cover-image'
import PostTag from './post-tag'
import PostTitle from './post-title'

type Props = {
  title: string
  coverImage: StaticImageData
  date: string
  tags: string
}

const PostHeader = ({ title, coverImage, date, tags }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-9xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
        <div>
          {tags.split(',').map((tag) => (
            <PostTag key={tag} tag={tag}></PostTag>
          ))}
        </div>
      </div>
    </>
  )
}

export default PostHeader
