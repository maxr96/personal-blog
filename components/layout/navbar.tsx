import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/future/image'
import DarkModeButton from '../buttons/dark-mode-button'
import NavbarItem from '../layout/navbar-item'
import logo from '../../public/assets/blog/logo/logo.png'

const Navbar = () => {
  const router = useRouter()
  const pages = [
    { href: '/', title: 'Posts' },
    { href: '/about-me', title: 'About Me' },
    { href: '/my-projects', title: 'My Projects' },
    { href: '/contact-me', title: 'Contact Me' }
  ]
  return (
    <nav className="sticky top-0 px-2 sm:px-4 py-5 text-gray-700 bg-white border-gray-200 dark:bg-gray-800 dark:text-gray-400">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/">
          <a className="flex items-center">
            <Image src={logo} className="mr-3 h-9 w-9" alt="Max Dev Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Full Stack Dev Blog
            </span>
          </a>
        </Link>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-base text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col justify-between items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium lg:text-lg">
            {pages.map(({ href, title }) => (
              <NavbarItem
                key={href}
                href={href}
                currentPathName={router.pathname}
                title={title}
              />
            ))}
            <DarkModeButton />
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
