import React from 'react'
import { Container, Title } from '../static/tags'
import HomeCard from '../components/Cards/HomeCard'
import { Grid } from '@mui/material'

const Main = () => {
  return (
    <Container>
      <Title className='border-b border-black mt-4'>
        My courses
      </Title>

      <Grid className="!mt-2"  container spacing={2}>
        <HomeCard/>
        <HomeCard/>
        <HomeCard/>
        <HomeCard/>
      </Grid>
      
      
    </Container>
  )
}

export default Main