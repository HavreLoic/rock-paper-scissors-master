import { useContext } from "react";
import { HandSide } from "./HandSide";
import { GameContext } from "../Context";


export const GameCard = () => {
    const { playerGradient, playerHand, computerGradient, computerHand, gameStatus, gameSectionUI, setGameSectionUI } = useContext(GameContext);

    const onClickPlay = () => {
        setGameSectionUI(!gameSectionUI)
    }

    return (
        <div className="flex text-white justify-evenly mb-10 media-phone-height">
            <div>
                <HandSide handCSS={playerGradient} side="YOU PICKED" imageSrc={playerHand} />
            </div>

            <div className="mt-auto sm:mb-auto xs:mb-0">
                {gameStatus && <p className="font-extrabold xs:text-[21px] sm:text-[34px] text-center">{gameStatus}</p>}
                <button onClick={onClickPlay} className="bg-white p-2 rounded-md w-full text-play-button-text">PLAY AGAIN</button>
            </div>

            <div>
                <HandSide handCSS={computerGradient} side="THE HOUSE PICKED" imageSrc={computerHand} />
            </div>

        </div>
    )
}
