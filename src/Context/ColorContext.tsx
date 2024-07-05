import { createContext, useEffect, useState } from "react";

type gameObject = {
  image: string;
  gradient: string;
}

type ColorContextType = {
  rockHand: gameObject;
  paperHand: gameObject;
  scissorsHand: gameObject;
  playerHand: string;
  gameStatus: string;
  playerGradient: string;
  computerHand: string,
  score: number;
  computerGradient: string,
  setComputerHand: (computer: string) => void;
  setComputerGradient: (gradient: string) => void;
  setPlayerHand: (hand: string) => void;
  setPlayerGradient: (gradient: string) => void;
  setGameStatus: (status: string) => void;
  generateComputerHand: () => void;
  determineOuterCircleColorBasedOnImage: (img: string) => void;
};

export const ColorContext = createContext<ColorContextType>({
  scissorsHand: {
    gradient: "",
    image: ""
  },

  paperHand: {
    gradient: "",
    image: ""
  },

  rockHand: {
    gradient: "",
    image: ""
  },

  playerHand: "",
  gameStatus: "",
  playerGradient: "",
  computerHand: "",
  computerGradient: "",
  score: 0,
  setComputerHand: () => { },
  setComputerGradient: () => { },
  generateComputerHand: () => { },
  setPlayerGradient: () => { },
  setPlayerHand: () => { },
  setGameStatus: () => { },
  determineOuterCircleColorBasedOnImage: () => { },
});

export const ColorContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [rockHand, setRockHand] = useState({
    gradient: "",
    image: ""
  });
  const [paperHand, setPaperHand] = useState({
    gradient: "",
    image: ""
  });
  const [scissorsHand, setScissorsHand] = useState({
    gradient: "",
    image: ""
  });
  const [playerHand, setPlayerHand] = useState("");
  const [playerGradient, setPlayerGradient] = useState("");
  const [computerHand, setComputerHand] = useState("");
  const [computerGradient, setComputerGradient] = useState("");
  const [gameStatus, setGameStatus] = useState("");
  const [score, setScore] = useState(0);

  const determineWinner = () => {
    if (playerHand !== "" && computerHand !== "") {
      if (playerHand === computerHand) {
        setGameStatus('DRAW');
      } else {
        // Nested if-else for player's winning conditions
        if (playerHand === 'images/icon-rock.svg') {
          if (computerHand === 'images/icon-scissors.svg') {
            setGameStatus('YOU WIN');
            setScore((prev) => prev + 1)
          } else {
            setGameStatus('YOU LOSE');
            setScore((prev) => Math.max(prev - 1, 0))
          }
        } else if (playerHand === 'images/icon-paper.svg') {
          if (computerHand === 'images/icon-rock.svg') {
            setGameStatus('YOU WIN');
            setScore((prev) => prev + 1)
          } else {
            setGameStatus('YOU LOSE');
            setScore((prev) => Math.max(prev - 1, 0))
          }
        } else if (playerHand === 'images/icon-scissors.svg') {
          if (computerHand === 'images/icon-paper.svg') {
            setGameStatus('YOU WIN');
            setScore((prev) => prev + 1)
          } else {
            setGameStatus('YOU LOSE');
            setScore((prev) => Math.max(prev - 1, 0))
          }
        } else {
          console.error('Invalid hand value'); // Handle unexpected hand values
        }
      }
    }
  };

  const generateComputerHand = () => {
    const choices = ['images/icon-rock.svg', 'images/icon-paper.svg', 'images/icon-scissors.svg'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    setComputerHand(choices[randomIndex]);
    function determineComputerOuterCircleColorBasedOnImage() {

      if (choices[randomIndex] === rockHand.image) {
        setComputerGradient(rockHand.gradient);
      } else if (choices[randomIndex] === paperHand.image) {
        setComputerGradient(paperHand.gradient);
      } else {
        setComputerGradient(scissorsHand.gradient);
      }
    }

    determineComputerOuterCircleColorBasedOnImage();
  };

  const determineOuterCircleColorBasedOnImage = (img: string) => {
    if (img === "images/icon-rock.svg") {
      setRockHand({
        gradient: "rock-gradient",
        image: "images/icon-rock.svg"
      });
    } else if (img === "images/icon-paper.svg") {
      setPaperHand({
        gradient: "paper-gradient",
        image: "images/icon-paper.svg"
      });
    } else {
      setScissorsHand({
        gradient: "scissors-gradient",
        image: "images/icon-scissors.svg"
      });
    }
  };

  useEffect(() => {
    if (computerHand !== "") {
      determineWinner();
    }
  }, [computerHand]);

  return (
    <ColorContext.Provider
      value={{
        rockHand,
        gameStatus,
        paperHand,
        score,
        scissorsHand,
        playerHand,
        computerHand,
        playerGradient,
        computerGradient,
        setPlayerGradient,
        setPlayerHand,
        setComputerHand,
        setGameStatus,
        generateComputerHand,
        setComputerGradient,
        determineOuterCircleColorBasedOnImage,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};
