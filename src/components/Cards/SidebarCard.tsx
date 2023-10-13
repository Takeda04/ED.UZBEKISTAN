const SidebarCard:React.FC<{title: string; icon: any}> = ({title, icon}) => {
  return (
    <main className="flex items-center justify-center gap-2">
        <p>{title}</p>
        <span>{icon}</span>
    </main>
  )
}

export default SidebarCard