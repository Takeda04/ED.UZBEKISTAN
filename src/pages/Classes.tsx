import { v4 } from "uuid"
import ClassCard from "../components/Cards/ClassCard"

const Classes = () => {

  const classes = [{ class_num: 1 }, { class_num: 2 }, { class_num: 3 }, { class_num: 4 }, { class_num: 5 }, { class_num: 6 }, { class_num: 7 }, { class_num: 8 }, { class_num: 9 },{ class_num: 10 },{ class_num: 11 } ]
  
  return (
    <main className='flex flex-wrap items-center justify-center mt-2'>
      <div className="grid grid-cols-3 gap-4 my-1">
        {classes?.map(({ class_num}) =>(
          <ClassCard class={class_num} key={v4()} />
        ))}
      </div>
    </main>
  )
}

export default Classes
