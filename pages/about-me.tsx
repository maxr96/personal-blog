import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import Image from 'next/future/image'
import profilePic from '../public/assets/blog/about-me/me.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faReact,
  faMicrosoft,
  faJava,
  faJs,
  faHtml5,
  faCss3,
  faAws
} from '@fortawesome/free-brands-svg-icons'

const AboutMe = () => {
  return (
    <Layout>
      <Container>
        <div className="gap-10 flex flex-col items-center justify-center space-x-4 font-dyna">
          <h1 className="text-blue-700 font-bold subpixel-antialiased text-lg dark:text-blue-300">
            Hello fellow developers <span>&#129304;</span>
          </h1>
          <Image
            src={profilePic}
            alt="My picture"
            className="w-40 h-40 rounded-full shadow-xl shadow-blue-300 hover:scale-110"
          />
          <p>
            I&apos;m a fullstack developer that enjoys building complex web
            applications from the ground up. I have three years of experience in
            a startup that pushed the usage of new technologies and taught me to
            adapt to the ever-changing requirements. For more than a year, I am
            working on an authorisation service that serves millions of requests
            every day and helps HR Managers to manage their employees and give
            them access to the data they need.
          </p>
          <p className="font-bold">I am experienced 🤓 in:</p>
          <ul className="list-disc list-inside space-y-10">
            <li>
              <span className="text-blue-700 font-bold">
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
              <span className="text-blue-700 font-bold">
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
              <span className="text-blue-700 font-bold">
                {' '}
                <FontAwesomeIcon icon={faJs} /> TypeScript
              </span>{' '}
              and
              <span className="text-orange-700 font-bold">
                {' '}
                <FontAwesomeIcon icon={faHtml5} /> HTML5
              </span>{' '}
              ,{' '}
              <span className="text-blue-700 font-semibold">
                {' '}
                <FontAwesomeIcon icon={faCss3} /> CSS3
              </span>{' '}
              and SCSS. Most used libraries: RxJS, D3.js, Apollo Client,
              Material UI, Ngx-Charts/Graphs and Tailwind CSS.
            </li>
            <li>
              <span className="text-blue-700 font-bold">Dev Ops </span>- Manage
              a microservice that is hosted on{' '}
              <span className="text-yellow-700 font-semibold">
                {' '}
                <FontAwesomeIcon icon={faAws} /> AWS
              </span>{' '}
              and operate inside of a set of pods in Kubernetes cluster,
              including more in-depth experience with AWS RDS, Elasticache, S3.
              Extensively use Datadog and Sentry to proactively monitor and
              operate on the state of application.
            </li>
          </ul>
          <p className="font-bold">
            Here I share my personal learnings and the projects I work in my
            free time. I am always open to learn new things and follow the
            Learning-by-doing approach.
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export default AboutMe
