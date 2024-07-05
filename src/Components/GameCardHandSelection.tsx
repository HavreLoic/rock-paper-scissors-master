import { useContext } from "react"
import { HandSide } from "./HandSide"
import { ColorContext } from "../Context"

export const GameCardHandSelection = () => {
    const { paperHand, rockHand, scissorsHand } = useContext(ColorContext);

    return (
        <div className="relative flex justify-center items-center">
            <img src="images/bg-triangle.svg" alt="triangle" className="" />

            <div className="absolute cursor-pointer top-[-50px] lg:left-[35%] sm:left-[15%] xs:left-[0%] md:left-[35%]">
                <HandSide handCSS={paperHand.gradient} imageSrc={"images/icon-paper.svg"} eventIs={true} />
            </div>

            <div className="absolute cursor-pointer top-[-50px] lg:right-[35%] sm:right-[15%] xs:right-[0%] md:right-[35%]">
                <HandSide handCSS={scissorsHand.gradient} imageSrc={"images/icon-scissors.svg"} eventIs={true} />
            </div>

            <div className="absolute cursor-pointer bottom-0">
                <HandSide handCSS={rockHand.gradient} imageSrc={"images/icon-rock.svg"} eventIs={true} />
            </div>

        </div>
    )
}
