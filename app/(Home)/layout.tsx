
import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";



const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='root overflow-hidden' >
      <div className="w-full">
        <Navbar />
        <div className="mt-8">{children}</div>
        <Footer />
      </div>
    </main>
  )
}

export default Layout