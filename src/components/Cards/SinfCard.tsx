import { Link } from "react-router-dom";

const SinfCard:React.FC<{item: string; sinf_raqam: number}> = ({item, sinf_raqam}) => {
  return (
    <Link to={'/'}>
    <main className="max-w-6xl gap-2 w-80 max-h-48 h-40 flex items-center justify-center bg-white rounded-xl text-5xl shadow-lg hover:text-6xl hover:shadow-blue-300 ">
            <p className="">{sinf_raqam}</p>
            <span className="capitalize text-blue-400">{item}</span>
    </main>
    </Link>
  )
}

export default SinfCard