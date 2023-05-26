import React from 'react'

const Cards = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-32 bg-transparent grid text-center lg:mb-0 xl:grid-cols-3 lg:grid-cols-2 gap-6">{children}</div>
  )
}

export default Cards