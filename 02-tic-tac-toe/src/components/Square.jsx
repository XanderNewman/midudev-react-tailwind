// eslint-disable-next-line react/prop-types
export const Square = ({ children, isSelected, updateBoard, index }) => {
    const className = `text-5xl w-24 h-24 border-2 border-white rounded-md grid items-center cursor-pointer text-12 ${isSelected ? 'text-white bg-cyan-500' : ''}`
  
    const handleClick = () => {
      updateBoard(index)
    }
  
    return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }

