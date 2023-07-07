// eslint-disable-next-line react/prop-types
export const Square = ({ children, isSelected, isTurn, updateBoard, index }) => {
    const className = `text-5xl rounded-md grid items-center cursor-pointer text-12 ${isSelected ? 'bg-cyan-600' : ''} ${isTurn ? 'w-16 h-16' : 'border-2 w-24 h-24'}`
  
    const handleClick = () => {
      updateBoard(index)
    }
  
    return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }

