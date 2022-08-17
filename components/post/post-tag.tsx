type Props = {
  tag: string
}

const PostTag = ({ tag }: Props) => {
  return <span className="bg-teal-600 mx-2 px-2 text-white">{tag}</span>
}

export default PostTag
