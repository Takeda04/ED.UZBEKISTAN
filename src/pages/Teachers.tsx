import React from 'react'
import TeacherCard from '../components/Cards/TeacherCard'
import { v4 } from 'uuid'
import { Container } from '../static/tags'

const Teachers = () => {

  const teachers_list = [{id:1}, {id:2}, {id:3}, {id:4}, {id:5}, {id:6}, {id:7}, {id:8}, {id:9},{id:10}, {id:11}, {id:12}, {id:13}, {id:14}]
  return (
    <Container className="flex flex-col py-2 gap-2 !mt-4">
      {teachers_list?.map(({id}) => (
        <TeacherCard key={v4()} id={id}/>
      ))}
    </Container>
  )
}

export default Teachers