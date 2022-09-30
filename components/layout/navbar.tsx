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
    { href: '/my-projects', title: 'My Projects' }
  ]
  return (
    <nav className="sticky top-0 px-2 sm:px-4 py-5 text-gray-700 bg-white border-gray-200 dark:bg-gray-800 dark:text-gray-400">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/">
          <a className="flex items-center">
            <Image
              src={logo}
              className="mr-1 h-5 w-5 md:h-9 md:w-9"
              alt="Max Dev Logo"
            />
            <span className="self-center text-xs sm:text-base md:text-xl font-semibold whitespace-nowrap dark:text-white">
              Full Stack Dev Blog
            </span>
          </a>
        </Link>
        <div className="w-auto block">
          <ul className="flex justify-between items-center mt-0 text-sm font-medium flex-row md:space-x-8 lg:text-lg">
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
