import React, { FunctionComponent } from 'react';
import { motion } from "framer-motion";

// Components
import Navigation from './Navigation';

// Types
import { ChildrenProps } from '../types'



const Layout: FunctionComponent<ChildrenProps> = ({ children }) => {
    return (
        <>
            {/* <Navigation /> */}
            <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                }}
            >
                {children}
            </motion.div>
        </>
    );
};
export default Layout;