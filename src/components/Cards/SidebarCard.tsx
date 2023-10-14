import { Link } from "react-router-dom";

const SidebarCard:React.FC<{title: string; icon: any}> = ({title, icon}) => {
  return (
    <Link to={''}>
    <main className="flex items-center justify-center gap-2">
        <p>{title}</p>
        <span>{icon}</span>
    </main>
    </Link>
  )
}

export default SidebarCard