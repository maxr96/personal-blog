import Link from 'next/link'
import Image from 'next/future/image'
import logo from '../../public/assets/blog/logo/logo.svg'

const Footer = () => {
  return (
    <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-800">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link href="/">
          <a className="flex items-center mb-4 sm:mb-0">
            <Image
              src={logo}
              className="mr-3 h-9 w-9 bg-white"
              alt="Max Dev Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Full Stack Dev Blog
            </span>
          </a>
        </Link>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022 Max Dev™. All Rights Reserved.
      </span>
    </footer>
  )
}

export default Footer
