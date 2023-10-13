import React from 'react'

const SidebarCard = ({title}) => {
  return (
    <main className='max-w-[280px] w-[100%] max-h-[80px] h-[100%] border-2 rounded-2xl flex items-center justify-center overflow-y-scroll'>
        {title}
    </main>
  )
}

export default SidebarCard