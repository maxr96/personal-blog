import { ReactNode } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

type Props = {
  title: string
  link: string
  children: ReactNode
}

const ProjectItem = ({ title, link, children }: Props) => {
  return (
    <div className="shadow-xl border border-gray-100 rounded-lg max-w-sm dark:border-gray-800">
      <div className="p-5 flex flex-col min-h-full">
        <a href={link}>
          <h5 className="font-bold text-2xl tracking-tight mb-2">{title}</h5>
        </a>
        <p className="font-normal text-gray-700 mb-3 dark:text-gray-400 grow">
          {children}
        </p>
        <a
          href={link}
          className="self-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Check it out on &nbsp; <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
      </div>
    </div>
  )
}

export default ProjectItem
