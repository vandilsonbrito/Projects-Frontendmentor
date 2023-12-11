import { useEffect } from 'react';
import logo from '../../images/logo.svg';
import { BsCart3 } from "react-icons/bs";
import imageAvatar from '../../images/image-avatar.png';
import { useGlobal } from '../GlobalProvider/GlobalProvider';


export default function Header() {

    const { numberOfProduct, isAdded, isCartOpen, setIsCartOpen } = useGlobal();

    useEffect(() => {
        allBorderNav()
    }, [])

    function allBorderNav(){
        const items = document.getElementsByClassName('nav-items');
        const borders = document.getElementsByClassName('nav-borders');
        const itemsArray = Array.from(items);
        const bordersArray = Array.from(borders);

        itemsArray.forEach((element, index) => {
            element.addEventListener('mouseover', () => {
                console.log(index)
                bordersArray.forEach((element) => {
                    element.classList.remove('border-Orange');
                    element.classList.add('border-white');
                    borders[index].classList.remove('border-white');
                    borders[index].classList.add('border-Orange');
                })
                 
            });
            element.addEventListener('mouseout', () => {
                bordersArray.forEach((element) => {
                    element.classList.remove('border-Orange');
                    element.classList.add('border-white');

                })
            });
        });
    }


  return (
    <div className="w-full h-32 px-20 xl:px-32 py-10">
        <div className="flex px-2">
            <div className="w-full flex items-center gap-16">
                <img className='mb-1' src={logo} alt="logo" />
                <nav className='w-[40%] flex justify-between items-center font-semibold text-Dark-grayish-blue text-base'>
                    <div className='nav-items w-full flex flex-col items-center hover:text-Very-dark-blue cursor-pointer hover:ease-in-out hover:duration-300'>Collections
                        <div className={`w-14 border-white nav-borders border-[2px] relative top-14`}></div>
                    </div>
                    <div className='nav-items w-full flex flex-col items-center hover:text-Very-dark-blue cursor-pointer hover:ease-in-out hover:duration-300'>Men
                        <div className={`w-14 border-white nav-borders border-[2px] relative top-14`}></div>
                    </div>
                    <div className='nav-items w-full flex flex-col items-center hover:text-Very-dark-blue cursor-pointer hover:ease-in-out hover:duration-300'>Women
                        <div className={`w-14 border-white nav-borders border-[2px] relative top-14`}></div>
                    </div>
                    <div className='nav-items w-full flex flex-col items-center hover:text-Very-dark-blue cursor-pointer hover:ease-in-out hover:duration-300'>About
                        <div className={`w-14 border-white nav-borders border-[2px] relative top-14`}></div>
                    </div>
                    <div className='nav-items w-full flex flex-col items-center hover:text-Very-dark-blue cursor-pointer hover:ease-in-out hover:duration-300'>Contact
                        <div className={`w-14 border-white nav-borders border-[2px] relative top-14`}></div>
                    </div>
                </nav>
            </div>
            <div className="w-fit flex items-center gap-5">
                <button onClick={() => setIsCartOpen(!isCartOpen)}>
                    <BsCart3 alt="icon cart" className={`text-xl relative top-3 ${isAdded ? 'text-Very-dark-blue' : ''}`} />
                    <span className='px-[8px] rounded-3xl bg-Orange text-white text-[.7rem] font-bold relative -top-5 left-2'>{isAdded ? numberOfProduct : 0}</span>
                </button>
                <div className="w-12 h-12 border-[2px] hover:border-Orange hover:ease-in-out rounded-full cursor-pointer">
                    <img className='w-full h-full' src={imageAvatar} alt="profile image" />
                </div>
            </div>
        </div>
        <div className="mt-12 border-b-[2px] border-Light-grayish-blue"></div>
    </div>
  )
}
