
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='root'>
      <div className="w-full">
        <Navbar />
        <div className="mt-8">{children}</div>
        <Footer />
      </div>
    </main>
  )
}

export default layout