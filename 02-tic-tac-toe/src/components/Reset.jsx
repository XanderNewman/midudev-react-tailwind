
export function Reset(resetGame){
    return (
        <button onClick={resetGame} className="py-2 px-3 m-6 bg-transparent border-2 border-white cursor-pointer w-24 rounded-md font-bold text-white transition-all duration-75 hover:bg-white hover:text-black">Reset game</button>
    )
}