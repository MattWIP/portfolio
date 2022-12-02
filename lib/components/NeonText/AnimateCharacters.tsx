import { FunctionComponent } from "react";
import { motion } from "framer-motion";

type CharactersProps = {
    text: string,
}

const AnimatedCharacters: FunctionComponent<CharactersProps> = ({ text }) => {
    const item = {
        hidden: {
          y: "200%",
          color: "#0055FF",
          transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
        },
        visible: {
          y: 0,
          color: "#FF0088",
          transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
        }
    };

    //  Split each word of props.text into an array
    const splitWords = text.split(" ");

    // Create storage array
    const words = [...splitWords].map((word) => word.split('')).map((word) => {
        word.push("\u00A0");
        return word;
    });

    console.log('Words:', words);
      
    return (
        <p>
           {
            [...words].map((word, index) => (
                <span key={index}>word</span>
            ))
           } 
        </p>
    )
}

export default AnimatedCharacters;