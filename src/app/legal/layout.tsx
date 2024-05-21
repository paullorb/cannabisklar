import NavLegal from './(components)/navLegal/NavLegal'
import Banner from './(components)/banner/page'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavLegal />
      <Banner />
      <div>{children}</div>
    </div>
  )
}