import React from 'react'
import { Container, Title } from '../static/tags'
import HomeCard from '../components/Cards/HomeCard'

const Main = () => {
  return (
    <Container>
      <Title className='border-b border-black mt-4'>
        My courses
      </Title>

      <HomeCard/>
      <HomeCard/>
      <HomeCard/>
      <HomeCard/>
      
      
    </Container>
  )
}

export default Main