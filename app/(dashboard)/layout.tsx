
import Navbar from "@/components/DashboardPages/Navbar";


const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <main className='root overflow-hidden' >
      <div className="w-full">
        <Navbar />
        <div>{children}</div>

      </div>
    </main>
  )
}

export default Layout