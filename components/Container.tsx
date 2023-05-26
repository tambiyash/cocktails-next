const Container = ({ children } : { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 mb-24">
      {children}
    </main>
  )
}

export default Container