import Container from '@/components/Container'
import React from 'react'

const DetailLayout = ({ children }: {children: React.ReactNode}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default DetailLayout;