import { useParams } from "react-router-dom"

const ClassComponent = () => {

    const { class_id } = useParams();
    console.log(class_id)
  return (
    <main>
        salom
    </main>
  )
}

export default ClassComponent