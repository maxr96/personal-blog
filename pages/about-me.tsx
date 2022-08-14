import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import Image from 'next/future/image'
import profilePic from '../public/assets/blog/about-me/me.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faMicrosoft,
  faJava,
  faJs,
  faHtml5,
  faCss3
} from '@fortawesome/free-brands-svg-icons'

const AboutMe = () => {
  return (
    <Layout>
      <Container>
        <div className="mt-10 gap-10 flex flex-col items-center justify-center space-x-4">
          <h1 className="text-blue-700 font-mono font-bold subpixel-antialiased">
            Hello fellow developers <span>&#129304;</span>
          </h1>
          <Image
            src={profilePic}
            alt="My picture"
            className="w-60 h-40 rounded-full"
          />
          <p>
            I&apos;m a fullstack developer that enjoys building complex web
            applications from the ground up. I have three years of experience in
            a startup that pushed the usage of new technologies and taught me to
            adapt to the ever-changing requirements. I have experience in:
            <br />
            <br />
            <ul className="list-disc list-inside">
              <li>
                <span className="text-blue-700 font-bold">
                  Desktop development{' '}
                </span>{' '}
                - Building desktop application using .NET Framework, C#
                programming language, WPF framework + Entity Framework and MySQL
                to store the data.
              </li>
              <br />
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
                to create both RESTful and GraphQL interfaces. Production
                experience with OrientDB with Entity Framework Core and
                PostgreSQL with jOOQ to store the data. Set up and managed
                Matomo for web analytics.
              </li>
              <br />
              <li>
                <span className="text-blue-700 font-bold">
                  Front-end development{' '}
                </span>
                - Building{' '}
                <span className="text-red-700 font-semibold">
                  <FontAwesomeIcon icon={faAngular} /> Angular
                </span>{' '}
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
                Ngx-Charts/Graphs.
              </li>
            </ul>
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export default AboutMe
