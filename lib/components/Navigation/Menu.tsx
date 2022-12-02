import { FunctionComponent } from "react";
import { motion } from 'framer-motion'

import styles from './styles.module.css'

type ItemProps = {
    i: number,
}

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const variants = {
    open: {
        transition: {
            staggerChildren: 0.07,
            delayChildren: 0.2
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
};

const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
}

const MenuItem: FunctionComponent<ItemProps> = ({ i }) => {
    const style = {
        border: `2px solid ${colors[i]}`
    };

    return (
        <motion.li
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="list-style-none mb-5 flex items-center cursor-pointer"
        >
            <div className={styles.icon_placeholder} style={style} />
            <div className={styles.text_placeholder} style={style} />
        </motion.li>
    )
}

const Menu: FunctionComponent = () => {
    return (
        <motion.ul
          variants={variants}
          className="p-5 absolute top-[100px] w-[230px]"
        >
        {
            [0,1,2,3,4].map((i) => (
                <MenuItem
                   i={i}
                   key={i}
                />
            ))
        }
        </motion.ul>
    )
}

export default Menu;