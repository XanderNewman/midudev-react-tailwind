/* eslint-disable react/prop-types */


import { Square } from "./Square"

export function WinnerModal ({winner, resetGame}) {
  if (winner === null) return null

  const winnerText = winner === false ? "Empate" : "Ganó"

  return (
        <section className="absolute w-screen h-screen top-0 left-0 grid place-items-center bg-black">
          <div className="bg-black h-80 w-72 border-2 rounded-lg border-white flex flex-col justify-center items-center gap-5 ">
            <h2 className="text-4xl">
              {winnerText}
            </h2>
            <header className="my-0 mx-auto w-fit border-2 border-white rounded-md flex gap-4">
              {winner && <Square className="w-16 h-16 pointer-events-none border-transparent">{winner}</Square> }
            </header>
  
            <footer>
              <button className="border-2 border-white p-2 rounded-md hover:bg-white hover:text-black font-bold" onClick={resetGame}>Empezar de nuevo</button>
            </footer>
          </div>
        </section>
      )
}