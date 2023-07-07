import { Square } from "./Square"
import { TURNS } from "../constants"

export function Turns(turn) {
    return (
      <section className="flex justify-center my-4 mx-auto w-fit relative rounded-lg">
      <Square isSelected={turn === TURNS.X}>
        {TURNS.X}
      </Square>
      <Square isSelected={turn === TURNS.O}>
        {TURNS.O}
      </Square>
    </section>
    )
}