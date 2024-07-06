import { useContext } from "react"
import { GameContext } from "../Context"

export const Header = () => {
    const { score } = useContext(GameContext);
    return (
        <div className="flex justify-center sm:mb-32 xs:mb-16">
            <header className='flex p-5 justify-between xs:w-[100%] sm:w-[90%] md:w-[60%] border-2 border-header-outline rounded-[12px]'>
                <div className='font-extrabold text-[34px] text-white leading-[0.8]'>
                    <p>ROCK</p>
                    <p>PAPER</p>
                    <p>SCISSORS</p>
                </div>

                <div className='font-extrabold p-2 bg-white xs:w-[90px] md:w-[120px] rounded-lg text-center'>
                    <p className='text-score-text'>SCORE</p>
                    <p className='text-[32px] text-dark-text'>{score}</p>
                </div>
            </header>
        </div>
    )
}
