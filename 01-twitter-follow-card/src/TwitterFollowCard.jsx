import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export function TwitterFollowCard ({ children, userName, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

 
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
    ? "w-36 group hover:bg-red-500/20 hover:text-red-500 ring-2 ring-white hover-ring-red-600  bg-black text-white cursor-pointer ml-4 rounded-full pt-2 pb-2 pl-4 pr-4 font-bold border-solid border-2 border-black transition-colors duration-75 ease-in-out" 
    : "w-36 bg-white hover:bg-blue-400 text-black cursor-pointer ml-4 rounded-full pt-2 pb-2 pl-4 pr-4 font-bold border-solid border-2 border-black transition-colors duration-75 ease-in-out"

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

    return (
       <article className="flex w-80 align-middle text-sm justify-between "> 
        <header className="flex align-middle gap-1"> 
            <img className="w-12 h-12 rounded-full "  
            src={`https://unavatar.io/${userName}`} 
            alt="Avatar de midudev" />
            <div className="flex flex-col">
            <strong>{children}</strong>
                <span className="opacity-60 ">@{userName}</span>
            </div>
        </header>
        
        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                <span className='group-hover:hidden'>{text}</span>
                <span className='hidden group-hover:inline peer'>Dejar de seguir</span>
            </button>
            
        </aside>
       </article>
    )
}


