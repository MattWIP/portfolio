import {FunctionComponent, useState, useEffect, useRef, ReactHTMLElement } from 'react';
import { motion, AnimatePresence } from "framer-motion";

// Components
import AnimatedCharacters from './AnimateCharacters';

// Lib
import { useDimensions } from '../../hooks';

import styles from './styles.module.css'

const messages = [
  {
    value: ['THE', 'WEB'],
    delay: 1000,
    electric_index: []
  },
  {
    value: ['THE', 'EMAN', 'WEB'],
    delay: 1250,
    electric_index: [1]
  },
  {
    value: ['EMAN', 'WEB', 'BUILDS'],
    delay: 400,
    electric_index: [0]
  },
  {
    value: ['EMAN', 'NODE', 'BUILDS'],
    delay: 750,
    electric_index: [0, 2],
  },
  {
    value: ['EMAN', 'AWS', 'BUILDS'],
    delay: 750,
    electric_index: [0, 2],
  },
  {
    value: ['EMAN', 'SHOPIFY', 'BUILDS'],
    delay: 1000,
    electric_index: [0, 2],
  },
  {
    value: ['MATT', 'EMAN'],
    delay: 3000,
    electric_index: [0, 1]
  },
]

const containerVariants = {

}

const NeonText: FunctionComponent = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);
  const containerRef = useRef(null);
  const { height, width } = useDimensions(containerRef); 

  useEffect(() => {
    let message = messages[activeIndex];
    

    function createTimeout() {
      if(paused) return;

      let rotateInterval = setTimeout(() => {
        if(activeIndex == messages.length - 1) {
          setActiveIndex(activeIndex);
        } else {
          setActiveIndex(activeIndex + 1);
        }
      }, message.delay);
    }

    if(activeIndex === messages.length - 1) {
      createTimeout();
      setPaused(true);
    } else {
      createTimeout();
    }

    return () => {
      // clearInterval(rotateInterval);
      // setActiveIndex(0);
    }
  }, [activeIndex, paused]);

  return (
          <motion.h1
            ref={containerRef}
            initial={{ scale: 0.5 }}
            // key={`neon-${activeIndex}-container`}
            layoutId={'neon-container'}
            animate={{ 
              scale: 0.5,
              opacity: 0.75,
            }}
            transition={{
              duration: .2,
              staggerChildren: 0.025,
            }}
            className={`${styles.h1} ${styles.electrify_border}`}
          >
            <AnimatePresence initial={false} mode="popLayout">
              <div className="flex items-center justify-center flex-col">
              {
                [...messages[activeIndex].value].map((word, index) => (
                  <motion.span
                    layoutId={`${word}-neon`}
                    key={`${word}-neon`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                    }}
                    className={`whitespace-nowrap ${word === 'SHOPIFY' && 'tracking-normal'} ${(messages[activeIndex].electric_index.includes(index)) && styles.electrify}`}
                  >{word}</motion.span>
                ))
              }
              </div>
            </AnimatePresence>
          </motion.h1>
  )
}

export default NeonText;
