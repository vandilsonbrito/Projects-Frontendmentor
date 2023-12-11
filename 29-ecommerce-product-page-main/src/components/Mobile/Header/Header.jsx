import { useEffect } from 'react';
import iconMenu from '../../../images/icon-menu.svg';
import logo from '../../../images/logo.svg';
import { BsCart3 } from "react-icons/bs";
import imageAvatar from '../../../images/image-avatar.png';
import { useGlobal } from '../../GlobalProvider/GlobalProvider';
import NavMobile from '../Nav/Nav';
import Overlay from "../Nav/Overlay"; 

export default function Header() {

  const { numberOfProduct, isAdded, isCartOpen, setIsCartOpen, isMenuOpen, setIsMenuOpen } = useGlobal();

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

  return (
    <div className="w-full h-16 bg-white flex items-center justify-between px-5">
        <div className="w-fit flex items-center gap-5">
            <div className="">
                <div className="cursor-pointer" onClick={() => toggleBurgerMenu()}>
                    <img src={iconMenu} alt="icon menu" />
                </div>
                <NavMobile className="burger-menu  w-[70%] h-screen bg-white absolute top-0 left-0 z-[80] px-4 pt-7 flex-col transition ease-in-out duration-700 hidden"/>
                <Overlay className="overlay w-full h-screen absolute top-0 left-0 bg-[#00000070] z-40 hidden"/>
            </div>
            <img className='mb-1' src={logo} alt="logo" />
        </div>
        <div className="w-fit flex items-center gap-5">
            <div className='w-fit h-fit' onClick={() => setIsCartOpen(!isCartOpen)}>
                <BsCart3 alt="icon cart" className={`text-xl relative top-3 ${isAdded ? 'text-Very-dark-blue' : ''}`} />
                <span className='px-[8px] rounded-3xl bg-Orange text-white text-[.7rem] font-bold relative -top-5 left-2'>{isAdded ? numberOfProduct : 0}</span>
            </div>
            <img className='w-6' src={imageAvatar} alt="profile image" />
        </div>
    </div>  
  )
}
