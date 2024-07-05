import { useContext, useEffect } from "react";
import { GameContext } from "../Context";

type HandSideType = {
    imageSrc: string;
    handCSS: string;
    side?: "YOU PICKED" | "THE HOUSE PICKED"; // who is picking
    eventIs?: true | false;
}

export const HandSide = ({ side, imageSrc, handCSS, eventIs = false }: HandSideType) => {
    const { setPlayerHand, setPlayerGradient, determineOuterCircleColorBasedOnImage, generateComputerHand } = useContext(GameContext);

    const onSelectHand = (src: string) => {
        setPlayerHand(src);
        setPlayerGradient(handCSS);
        generateComputerHand();
    }

    useEffect(() => {
        determineOuterCircleColorBasedOnImage(imageSrc)
        console.log("effect run ");
    }, []);

    return (
        <>
            {side && <p className="font-medium text-[21px] mb-10 text-center">{side}</p>}
            <div className={`${handCSS} rounded-full w-[130px] h-[130px] flex justify-center items-center`}>
                <div className="w-[100px] h-[100px] bg-white rounded-full flex justify-center items-center">
                    <img src={imageSrc} className="w-[50%] m-auto" alt={imageSrc} onClick={() => eventIs === true && onSelectHand(imageSrc)} />
                </div>
            </div>
        </>
    )
}
