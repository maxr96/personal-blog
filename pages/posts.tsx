import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import MoreStories from '../components/post/more-stories'
import { getAllPosts } from '../lib/api'
import Post from '../types/post'

type Props = {
  allPosts: Post[]
}

const Posts = ({ allPosts }: Props) => {
  return (
    <Layout>
      <Container>
        <MoreStories posts={allPosts} />
      </Container>
    </Layout>
  )
}

export default Posts

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt'
  ])

  return {
    props: { allPosts }
  }
}
