import { useState } from "react";


type Hand = 'rock' | 'paper' | 'scissors';

const handChoices: Hand[] = ['rock', 'paper', 'scissors'];
export const GameCard = () => {
    const [playerHand, setPlayerHand] = useState<Hand | null>(null);
    const [computerHand, setComputerHand] = useState<Hand>(handChoices[0]); // Initialize with first choice
    const [gameResult, setGameResult] = useState<string>('');

    const determineWinner = (playerHand: Hand, computerHand: Hand): string => {
        // Tie scenario
        if (playerHand === computerHand) {
            return 'DRAW';
        }

        // Winning conditions for player
        if (
            (playerHand === 'rock' && computerHand === 'scissors') ||
            (playerHand === 'paper' && computerHand === 'rock') ||
            (playerHand === 'scissors' && computerHand === 'paper')
        ) {
            return 'YOU WON';
        }

        // Losing scenario
        return 'YOU LOSE';
    };

    const handlePlay = (hand: Hand) => {
        setPlayerHand(hand);
        const randomComputerHand = handChoices[Math.floor(Math.random() * handChoices.length)];
        setComputerHand(randomComputerHand);
        setGameResult(determineWinner(hand, randomComputerHand));
    };

    return (
        <div className="flex text-white justify-evenly mb-10">
            <div>
                <p className="font-medium text-[21px] mb-10 text-center">YOU PICKED</p>
                <div className="bg-black rounded-full w-[250px] h-[250px] flex justify-center items-center">
                    <div className="w-[200px] h-[200px] bg-white rounded-full flex justify-center items-center">
                        <img src="images/icon-rock.svg" className="w-[50%] m-auto" alt="" />
                    </div>
                </div>
            </div>

            <div className="mt-auto mb-auto">
                <p className="font-extrabold text-[34px]">YOU WON/LOSE</p>
                <button className="bg-white p-2 rounded-md w-full text-play-button-text">PLAY AGAIN</button>
            </div>

            <div>
                <p className="font-medium text-[21px] mb-10 text-center">THE HOUSE PICKED</p>
                <div className="bg-black rounded-full w-[250px] h-[250px] flex justify-center items-center">
                    <div className="w-[200px] h-[200px] bg-white rounded-full flex justify-center items-center">
                        <img src="images/icon-scissors.svg" className="w-[50%] m-auto" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}
