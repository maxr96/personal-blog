import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faJava, faJs } from '@fortawesome/free-brands-svg-icons'
import ProjectItem from '../components/project-item'

const MyProjects = () => {
  return (
    <Layout>
      <Head>
        <title>{'My Projects | MAX DEV'}</title>
      </Head>
      <Container>
        <div className="mx-auto flex flex-row flex-wrap gap-5 justify-center">
          <ProjectItem
            title="Recipe App Backend"
            link="https://github.com/maxr96/Recipy-App-Server"
          >
            <>
              {' '}
              Provides a REST API, which provides basic CRUD operations on
              recipes, that contain extensive data like cooking steps,
              ingredients, description, image, etc. Additionally, it has basic
              sign up/log in flow. Build with{' '}
              <span className="text-green-700 font-semibold">
                <FontAwesomeIcon icon={faJava} /> Spring Boot
              </span>{' '}
              using Kotlin and Gradle.
            </>
          </ProjectItem>
          <ProjectItem
            title="Recipe App Frontend"
            link="https://github.com/maxr96/Recipe-App"
          >
            <>
              Provides a Front End to the Recipe Server that has a login system
              and the ability to view all the recipes and is built using{' '}
              <span className="text-red-700 font-semibold">
                <FontAwesomeIcon icon={faAngular} /> Angular
              </span>{' '}
              .
            </>
          </ProjectItem>
          <ProjectItem
            title="Full Stack Dev Blog"
            link="https://github.com/maxr96/personal-blog"
          >
            <>
              This blog is powered by some awesome technologies like Next.js a
              framework that allows me to build a fast and SEO-friendly website,
              TailwindCSS that makes styling more consistent and{' '}
              <span className="text-blue-700 font-semibold">
                {' '}
                <FontAwesomeIcon icon={faJs} /> TypeScript
              </span>{' '}
              to add a bit of type safety to the mix.
            </>
          </ProjectItem>
        </div>
      </Container>
    </Layout>
  )
}

export default MyProjects
