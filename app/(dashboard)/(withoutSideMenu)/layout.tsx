import Navbar from "@/components/DashboardPages/Navbar"



const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div >
            <Navbar hideMenuIcon={true} />
            <div>{children}</div>
        </div>
    )
}

export default Layout