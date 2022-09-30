import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import Image from 'next/future/image'
import profilePic from '../public/assets/blog/about-me/me.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faReact,
  faMicrosoft,
  faJava,
  faJs,
  faHtml5,
  faCss3,
  faAws,
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import Head from 'next/head'

const AboutMe = () => {
  return (
    <Layout>
      <Head>
        <title>{'About Me | MAX DEV'}</title>
      </Head>
      <Container>
        <div className="gap-8 flex flex-col items-center justify-center space-x-4 font-handlee text-lg">
          <h1 className="text-blue-700 font-bold subpixel-antialiased text-xl dark:text-blue-300">
            Hello fellow developers <span>&#129304;</span>
          </h1>
          <Image
            src={profilePic}
            alt="My picture"
            className="w-52 h-52 rounded-full shadow-xl shadow-blue-500 hover:scale-110"
          />
          <div className="flex gap-5">
            <a href="https://github.com/maxr96">
              <FontAwesomeIcon icon={faGithub} size="4x" />
            </a>
            <a href="https://www.linkedin.com/in/maksymradcuk/">
              <FontAwesomeIcon icon={faLinkedin} size="4x" />
            </a>
          </div>
          <p>
            I&apos;m a full stack developer that enjoys building complex web
            applications from the ground up. I have three years of experience in
            a startup that pushed the usage of new technologies and taught me to
            adapt to ever-changing requirements.
          </p>
          <p>
            In my previous job, I was supporting a business-critical middleware
            that provides communication between all the systems in the bank. For
            more than a year, I am working on an authorisation service that we
            extracted from the monolith and now it serves millions of requests
            every day and helps HR Managers to manage their employees and give
            them access to the data they need.
          </p>
          <p className="font-bold">I am experienced 🤓 in:</p>
          <ul className="list-disc list-inside space-y-10">
            <li>
              <span className="text-blue-700 font-bold dark:text-blue-300">
                Back-end development{' '}
              </span>
              - Building back-end using both{' '}
              <span className="text-violet-700 font-semibold">
                <FontAwesomeIcon icon={faMicrosoft} /> ASP.NET Core{' '}
              </span>{' '}
              and{' '}
              <span className="text-green-700 font-semibold">
                <FontAwesomeIcon icon={faJava} /> Spring Boot
              </span>{' '}
              to create both RESTful and GraphQL APIs. I have production
              experience with OrientDB with Entity Framework Core and PostgreSQL
              with jOOQ to store, mutate and efficiently query the data. Set up
              and managed Matomo for web analytics.
            </li>
            <li>
              <span className="text-blue-700 font-bold dark:text-blue-300">
                Front-end development{' '}
              </span>
              - Building{' '}
              <span className="text-red-700 font-semibold">
                <FontAwesomeIcon icon={faAngular} /> Angular
              </span>{' '}
              and{' '}
              <span className="text-blue-700 font-semibold">
                <FontAwesomeIcon icon={faReact} /> React{' '}
              </span>
              applications using{' '}
              <span className="text-blue-700 font-semibold">
                {' '}
                <FontAwesomeIcon icon={faJs} /> TypeScript
              </span>{' '}
              ,
              <span className="text-orange-700 font-semibold">
                {' '}
                <FontAwesomeIcon icon={faHtml5} /> HTML5
              </span>{' '}
              and{' '}
              <span className="text-blue-700 font-semibold">
                {' '}
                <FontAwesomeIcon icon={faCss3} /> CSS3
              </span>{' '}
              . Most used libraries: RxJS, D3.js, Apollo Client, Material UI,
              Ngx-Charts/Graphs and Tailwind CSS.
            </li>
            <li>
              <span className="text-blue-700 font-bold dark:text-blue-300">
                Dev Ops{' '}
              </span>
              - Manage a microservice that is hosted on{' '}
              <span className="text-yellow-700 font-semibold">
                {' '}
                <FontAwesomeIcon icon={faAws} /> AWS
              </span>{' '}
              and operate inside of a set of pods in a Kubernetes cluster,
              including more in-depth experience with AWS RDS, Elasticache and
              S3. Extensively use Datadog and Sentry to proactively monitor and
              operate on the state of an application.
            </li>
          </ul>
          <p className="font-semibold">
            Here I share my learnings and the projects I work on in my free
            time. I am always open to learning new things and following the
            Learning-by-doing approach.
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export default AboutMe
