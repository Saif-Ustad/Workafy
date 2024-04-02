

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <main className='root overflow-hidden' >
      <div className="w-full">
        <div>{children}</div>

      </div>
    </main>
  )
}

export default Layout