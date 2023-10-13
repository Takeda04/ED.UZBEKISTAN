import React from 'react'
import TeacherCard from '../components/Cards/TeacherCard'
import { v4 } from 'uuid'

const Teachers = () => {

  const teachers_list = [{id:1}, {id:2}, {id:3}, {id:4}, {id:5}, {id:6}, {id:7}, {id:8}, {id:9},{id:10}, {id:11}, {id:12}, {id:13}, {id:14}]
  return (
    <main className="w-full h-full flex flex-col py-2 gap-2 rounded-lg  overflow-y-scroll">
      {teachers_list?.map(({id}) => (
        <TeacherCard key={v4()} id={id}/>
      ))}
    </main>
  )
}

export default Teachers