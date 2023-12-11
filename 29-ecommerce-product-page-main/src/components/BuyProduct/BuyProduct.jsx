/* import { useState, useEffect} from 'react' */
import iconPlus from '../../images/icon-plus.svg';
import iconMinus from '../../images/icon-minus.svg';
import { BsCart3 } from "react-icons/bs";
import { useGlobal } from '../GlobalProvider/GlobalProvider';


export default function BuyProduct() {

    const { numberOfProduct, setNumberOfProduct, setIsAdded } = useGlobal();

    return (
        <div className='w-full  h-full px-6 lg:px-0 flex flex-col lg:flex-row justify-center items-center  gap-4 font-Kumbh'>
            <div className="w-full md:w-[60%] h-[60px] flex justify-between items-center px-3 lg:px-2 bg-Light-grayish-blue rounded-lg">
                <div className='p-2 cursor-pointer'  onClick={() => setNumberOfProduct(numberOfProduct === 0 ? 0 : (numberOfProduct - 1))}>
                    <img src={iconMinus} alt="icon minus"/>
                </div>

                <p className='font-bold select-none'>{numberOfProduct}</p>

                <div className='p-2 cursor-pointer'  onClick={() => setNumberOfProduct(numberOfProduct + 1)}>
                    <img src={iconPlus} alt="icon plus" />
                </div>   
            </div>
            <button 
                onClick={() => setIsAdded(true)}
                className="w-full md:w-[60%] xl:w-full h-[60px] flex items-center justify-center gap-4 bg-Orange rounded-lg shadow-xl text-white font-bold shadow-Pale-orange active:scale-[0.98] hover:shadow-xl  ease-linear duration-200 hover:shadow-orange-200">
                <BsCart3 className='text-white text-xl'/> Add to cart
            </button>
        </div>
  )
}
