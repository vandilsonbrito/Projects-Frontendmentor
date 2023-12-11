import { useState, useEffect } from 'react';
import product1 from '../../../images/image-product-1.jpg';
import product2 from '../../../images/image-product-2.jpg';
import product3 from '../../../images/image-product-3.jpg';
import product4 from '../../../images/image-product-4.jpg';
import './styles.css';

export default function Banner() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => (prevIndex + n + 4) % 4);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }

    slides[n].style.display = "flex";
    dots[slideIndex].classList.add("active");
  };

  return (
    <div className='w-full h-full overflow-hidden bg-white'>
        <div className="slideshow-container h-[300px]">

            <div className="slides fade">
                <img src={product1} alt='' className=''/>
            </div>
            <div className="slides fade">
                <img src={product2} alt='' />
            </div>
            <div className="slides fade">
                <img src={product3} alt='' />
            </div>
            <div className="slides fade">
                <img src={product4} alt='' />
            </div>

            <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
            <a className="next" onClick={() => plusSlides(1)}>❯</a>
        </div>
        <div className='relative text-center'>
            <span className="dot" onClick={() => currentSlide(0)}></span> 
            <span className="dot" onClick={() => currentSlide(1)}></span> 
            <span className="dot" onClick={() => currentSlide(2)}></span> 
            <span className="dot" onClick={() => currentSlide(3)}></span> 
        </div>
    </div>
  );
}
