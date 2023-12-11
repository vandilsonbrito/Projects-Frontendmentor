import Overlay from './Overlay';
import { RiCloseFill } from "react-icons/ri";
import { useEffect } from 'react';
import { useGlobal } from '../../GlobalProvider/GlobalProvider';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function NavMobile({ className }) {
    const { isMenuOpen, setIsMenuOpen } = useGlobal();

    const fadeInOut = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };

    const toggleBurgerMenu = () => {
      document.querySelector('.burger-menu').classList.toggle('flex');
      document.querySelector('.burger-menu').classList.toggle('hidden');
      document.querySelector('.overlay').classList.toggle('flex');
      document.querySelector('.overlay').classList.toggle('hidden');

      setIsMenuOpen(!isMenuOpen);

    }

    useEffect(() => {
      if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [isMenuOpen]);

    const handleMenuItemClick = () => {
      toggleBurgerMenu(); 
    }

    return (
      <>
          <Overlay className="overlay w-full h-screen absolute top-0 left-0 bg-[#000000cb] z-40 hidden" />
          <div className={`${className}`}>
              <button className="w-full flex justify-start">
                  <RiCloseFill  className='close-menu text-Very-dark-blue text-3xl z-[80] -ml-1 -mt-3' onClick={() => handleMenuItemClick()}/>
              </button>
              <motion.div 
                initial="hidden"
                animate={isMenuOpen ? 'visible' : 'hidden'}
                variants={fadeInOut}
                transition={{ duration: 0.5 }}
                className='w-full h-[50%]'
                >
                <ul className="w-full h-[100%] flex flex-col justify-evenly items-start pl-1 text-lg  text-Very-dark-blue font-semibold capitalize mt-6 font-Kumbh">
                  <a to='/' onClick={handleMenuItemClick}>
                    <li>Collections</li>
                  </a>
                  <a to='/Sobre' onClick={handleMenuItemClick}>
                    <li>Men</li>
                  </a>
                  <a to='/Youtube' onClick={handleMenuItemClick}>
                    <li>Women</li>
                  </a>
                  <a to='/Contato' onClick={handleMenuItemClick}>
                    <li>About</li>
                  </a>
                  <a to='/Contato' onClick={handleMenuItemClick}>
                    <li>Contact</li>
                  </a>
                </ul>
              </motion.div>
          </div>
      </>
    )
}

NavMobile.propTypes = {
    className: PropTypes.string,
}
