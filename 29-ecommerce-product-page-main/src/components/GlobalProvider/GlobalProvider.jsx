import { useContext, createContext, useState } from "react";
import PropTypes from 'prop-types';

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [numberOfProduct, setNumberOfProduct] = useState(0);
    const [isAdded, setIsAdded ] = useState(false);
    const [isCartOpen, setIsCartOpen ] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <GlobalContext.Provider value={{ numberOfProduct, setNumberOfProduct, isAdded, setIsAdded, isCartOpen, setIsCartOpen, isMenuOpen, setIsMenuOpen}}>
            {children}
        </GlobalContext.Provider>
    );
}

export function useGlobal() {
    return useContext(GlobalContext);
}

GlobalProvider.propTypes = {
    children: PropTypes.node
};
