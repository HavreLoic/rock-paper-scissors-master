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
            {side && <p className="font-medium sm:text-[21px] xs:text-[14px] mb-10 text-center">{side}</p>}
            <div className={`${handCSS} rounded-full xs:w-[90px] sm:w-[130px] xs:h-[90px] sm:h-[130px] flex justify-center items-center`}>
                <div className="sm:w-[100px] xs:w-[70px] sm:h-[100px] xs:h-[70px] bg-white rounded-full flex justify-center items-center">
                    <img src={imageSrc} className="w-[50%] m-auto" alt={imageSrc} onClick={() => eventIs === true && onSelectHand(imageSrc)} />
                </div>
            </div>
        </>
    )
}
