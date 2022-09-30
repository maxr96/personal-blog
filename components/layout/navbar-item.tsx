import Link from 'next/link'

type Props = {
  href: string
  currentPathName: string
  title: string
}
const NavbarItem = ({ href, currentPathName, title }: Props) => {
  return (
    <Link href={href}>
      <a
        className={` ${
          currentPathName === href ? ' text-blue-700' : ''
        } block py-2 pl-1 mr-1 text-xs border-gray-100 md:pr-4 md:pl-3 sm:text-base md:text-lg hover:bg-gray-50 hover:bg-transparent hover:text-blue-700 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent dark:border-gray-700`}
        aria-current="page"
      >
        {title}
      </a>
    </Link>
  )
}

export default NavbarItem
