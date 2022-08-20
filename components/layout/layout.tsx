import Footer from './footer'
import Meta from './meta'
import Navbar from './navbar'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="flex flex-col min-h-screen dark:bg-gray-800 dark:text-neutral-200">
        <Navbar />
        <main className="py-10 mb-auto">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
