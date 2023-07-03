import { TwitterFollowCard } from "./TwitterFollowCard"

const users = [
    {
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: true
    },
    {
      userName: 'pheralb',
      name: 'Pablo H.',
      isFollowing: false
    },
    {
      userName: 'PacoHdezs',
      name: 'Paco Hdez',
      isFollowing: true
    },
    {
      userName: 'TMChein',
      name: 'Tomas',
      isFollowing: false
    }
  ]
  

export function App () {

    return (
        <div className="flex flex-col gap-4">
            {
                users.map( user => {
                const {userName, name, isFollowing} = user   
                return (
                    <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    initialIsFollowing={isFollowing}
                    >
                       {name} 
                    </TwitterFollowCard>
                )
                })
            }
        </div> 
    )
}

