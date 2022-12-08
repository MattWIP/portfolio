import { FunctionComponent, useRef, useContext } from "react"
import { motion, useCycle } from 'framer-motion'

// Components
import Menu from "./Menu";
import MenuToggle from "./MenuToggle";

// Lib
import {
  SiteContext
} from '../../Context';
import { useDimensions } from "../../hooks";

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
        background: {
            duration: 1
        },
    }
  }),
  closed: {
    clipPath: 'circle(25px at 40px 40px)',
    transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
    }
  },   
}

const Navigation: FunctionComponent = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef); 
    const { toggleNavigationOpen } = useContext(SiteContext);

    return (
        <motion.nav
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          custom={height}
          ref={containerRef}
          className="z-10 absolute top-0 left-0 bottom-0 w-[300px]"
        >
            <motion.div
              variants={sidebarVariants}
              className=" absolute top-0 left-0 h-[300px] lg:h-auto lg:bottom-0 w-screen bg-[#F8E5EE]"
            />
            <Menu />
            <MenuToggle
              toggle={() => {
                toggleOpen();
                toggleNavigationOpen();
              }}
            />
        </motion.nav>
    )
}

export default Navigation