import { useContext } from "react";
import { HandSide } from "./HandSide";
import { ColorContext } from "../Context";


export const GameCard = () => {
    const { playerGradient, playerHand, computerGradient, computerHand, gameStatus } = useContext(ColorContext);

    return (
        <div className="flex text-white justify-evenly mb-10">
            <div>
                <HandSide handCSS={playerGradient} side="YOU PICKED" imageSrc={playerHand} />
            </div>

            <div className="mt-auto mb-auto">
                {gameStatus && <p className="font-extrabold text-[34px]">{gameStatus}</p>}
                <button className="bg-white p-2 rounded-md w-full text-play-button-text">PLAY AGAIN</button>
            </div>

            <div>
                <HandSide handCSS={computerGradient} side="THE HOUSE PICKED" imageSrc={computerHand} />
            </div>

        </div>
    )
}
