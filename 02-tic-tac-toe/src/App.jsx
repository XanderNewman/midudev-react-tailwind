/* eslint-disable react/prop-types */
import { useState } from "react"
import confetti from "canvas-confetti" 
import { Square } from "./components/Square"
import { TURNS} from "./constants"
import { Turns } from "./components/Turns"
import { checkWinnerFrom, checkEndGame } from "./logic/board.js"
import { WinnerModal } from "./components/WinnerModal.jsx"
import { saveGameToStorage, resetGameStorage } from "./logic/storage"



function App() {

  const [board, setBoard] = useState( () => {
    const boardFromLocalStorage = window.localStorage.getItem("board")
    return boardFromLocalStorage ? JSON.parse(boardFromLocalStorage) : Array(9).fill(null)
  }
    )

  const [turn, setTurn] = useState( () => {
    const turnFromLocalStorage = window.localStorage.getItem("turn")
    return turnFromLocalStorage ?? TURNS.X
  }
    )
  const [winner, setWinner] = useState(null)

  
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

   resetGameStorage()
  }

 

  const updateBoard = (index) => {

    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })
     
    
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner){
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  return (
    <main className=" w-fit  my-10 text-center">
      <h1 className="text-5xl text-white mb-4">Tic Tac Toe</h1>
      <button onClick={resetGame} className="py-2 px-3 m-6 bg-transparent border-2 border-white cursor-pointer w-24 rounded-md font-bold text-white transition-all duration-75 hover:bg-white hover:text-black">Reset game</button>
      <section className="grid grid-cols-3 gap-2">
        {
          board.map((square, index)=>{
            return (
              <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>
        <Turns/>
        <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
