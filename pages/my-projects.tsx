import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import Head from 'next/head'

const MyProjects = () => {
  return (
    <Layout>
      <Head>
        <title>{'My Projects | MAX DEV'}</title>
      </Head>
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="shadow-md border border-gray-200 rounded-lg max-w-sm dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="font-bold text-2xl tracking-tight mb-2">
                  Best Recipes App Backend
                </h5>
              </a>
              <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="-mr-1 ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default MyProjects
