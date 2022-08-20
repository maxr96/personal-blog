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
      <Navbar />
      <div className="min-h-screen dark:bg-gray-800 dark:text-neutral-300">
        <main className="py-10">{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
