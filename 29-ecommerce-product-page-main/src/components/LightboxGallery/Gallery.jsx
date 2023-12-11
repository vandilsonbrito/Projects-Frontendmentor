import { useEffect } from "react";
import "./styles.css";
import product1 from "../../images/image-product-1.jpg";
import product2 from "../../images/image-product-2.jpg";
import product3 from "../../images/image-product-3.jpg";
import product4 from "../../images/image-product-4.jpg";
import product1Thumbnail from "../../images/image-product-1-thumbnail.jpg";
import product2Thumbnail from "../../images/image-product-2-thumbnail.jpg";
import product3Thumbnail from "../../images/image-product-3-thumbnail.jpg";
import product4Thumbnail from "../../images/image-product-4-thumbnail.jpg";

export default function Gallery() {
    const openModal = () => {
        document.getElementById("myModal").style.display = "block";
        document.getElementById("overlay").style.display = "block";
    };

    const closeModal = () => {
        document.getElementById("myModal").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    };

    let slideIndex = 1;
    useEffect(() => {
        showSlides(slideIndex);
    }, []);

    const plusSlides = (n) => {
        showSlides(slideIndex += n); 
    };

    const currentSlide = (n) => {
        selectImageBasedOnThumbnail((slideIndex = n));
    };
    const currentSlidSpecialView = (n) => {
        showSlides((slideIndex = n));
    };


    function selectImageBasedOnThumbnail(n) {
        const principalImages = document.getElementsByClassName("principal-imgs");
        const thumbnails = document.getElementsByClassName("thumbnails");
        const WrapperThumbnails = document.getElementsByClassName("wrapper-thumbnails");
        for (let i = 0; i < thumbnails.length; i++) {
        WrapperThumbnails[i].style.border = "none";
        thumbnails[i].classList.remove("opacity-25");
        principalImages[i].classList.remove("flex");
        principalImages[i].classList.add("hidden");
        }
        WrapperThumbnails[n - 1].style.border = "2px solid orange";
        thumbnails[n - 1].classList.add("opacity-25");
        principalImages[n - 1].classList.remove("hidden");
        principalImages[n - 1].classList.add("flex");
        console.log(WrapperThumbnails)
    }

    function showSlides(n) {
        console.log(n)
        let i, slides = document.querySelectorAll(".mySlides");
        const specialViewWrapper = document.getElementsByClassName("special-view-wrapper");
        const specialViewImages = document.getElementsByClassName("special-view-imgs");
        const thumbnails = document.getElementsByClassName("special-vew-thumbnails");

        console.log("slides: " + slides.length)
        if (n > slides.length) {
            slideIndex = 1;
        }
        
        else if(n < 1) {
            slideIndex = slides.length;
        }
        console.log("index: " + slideIndex)
        console.log("n: " + n)
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
    
        slides[slideIndex - 1].style.display = "block";


        for (let i = 0; i < thumbnails.length; i++) {
            specialViewWrapper[i].style.border = "none";
            thumbnails[i].classList.remove("opacity-25");
            specialViewImages[i].classList.remove("flex");
            specialViewImages[i].classList.add("hidden");
        }
        console.log(specialViewWrapper[n - 1])
        specialViewWrapper[slideIndex - 1].style.border = "2px solid orange";
        thumbnails[slideIndex - 1].classList.add("opacity-25");
        specialViewImages[slideIndex - 1].classList.remove("hidden");
        specialViewImages[slideIndex - 1].classList.add("flex");

    }
  

  

  return (
        <>
            <div className="w-fit h-full flex justify-end">
                <div className="row w-[435px] h-full flex flex-col gap-7">
                    <div className="w-[435px] h-[435px]  overflow-hidden">
                        <div
                            className="w-[435px] h-full cursor-pointer  principal-imgs"
                            onClick={() => {
                            openModal();
                            currentSlide(1);
                            }}
                        >
                            <img
                            className="w-[435px] h-full rounded-2xl"
                            src={product1}
                            alt=""
                            />
                        </div>
                        <div
                            className="w-[435px] h-full cursor-pointer  principal-imgs"
                            onClick={() => {
                            openModal();
                            currentSlide(2);
                            }}
                        >
                            <img className="w-[435px] rounded-2xl" src={product2} alt="" />
                        </div>
                        <div
                            className="w-[435px] h-full cursor-pointer  principal-imgs"
                            onClick={() => {
                            openModal();
                            currentSlide(3);    
                            }}
                        >
                            <img className="w-[435px] rounded-2xl" src={product3} alt="" />
                        </div>
                        <div
                            className="w-[435px] h-full cursor-pointer  principal-imgs"
                            onClick={() => {
                            openModal();
                            currentSlide(4);
                            }}
                        >
                            <img className="w-[435px] rounded-2xl" src={product4} alt="" />
                        </div>
                    </div>
                    <div className="w-full flex gap-7">
                        <div
                            className="w-fit h-fit rounded-xl  column wrapper-thumbnails "
                            style={{ border: "2px solid orange" }}
                        >
                            <img
                            src={product1Thumbnail}
                            onClick={() => {
                                selectImageBasedOnThumbnail(1);
                            }}
                            className="w-full h-full rounded-xl hover-shadow cursor-pointer  thumbnails  opacity-25"
                            />
                        </div>
                        <div className="w-fit h-fit rounded-xl  column wrapper-thumbnails">
                            <img
                            src={product2Thumbnail}
                            onClick={() => {
                                selectImageBasedOnThumbnail(2);
                            }}
                            className="w-full h-full rounded-xl hover-shadow cursor-pointer  thumbnails"
                            />
                        </div>
                        <div className="w-fit h-fit rounded-xl  column wrapper-thumbnails">
                            <img
                            src={product3Thumbnail}
                            onClick={() => {
                                selectImageBasedOnThumbnail(3);
                            }}
                            className="w-full h-full rounded-xl hover-shadow cursor-pointer  thumbnails"
                            />
                        </div>
                        <div className="w-fit h-fit rounded-xl  column wrapper-thumbnails">
                            <img
                            src={product4Thumbnail}
                            onClick={() => {
                                selectImageBasedOnThumbnail(4);
                            }}
                            className="w-full h-full rounded-xl hover-shadow cursor-pointer  thumbnails"
                            />
                        </div>
                    </div>
                </div>
            </div>


            <div id="overlay"></div>
            <div id="myModal" className="modal">
                <span className="close cursor" onClick={() => closeModal()}>
                &times;
                </span>
                <div className="modal-content w-full h-full flex flex-col items-center justify-center gap-8">

                    <div className="w-full flex justify-center items-center">
                        <div className="w-[20%] flex justify-end items-center">
                            <a className="prevButton" onClick={() => plusSlides(-1)}>&#10094;</a>
                        </div>

                        <div className="w-[480px] h-[480px]  overflow-hidden">
                            <div className="mySlides">
                                <img className="w-full rounded-2xl  special-view-imgs" src={product1} />
                            </div>
                            <div className="mySlides">
                                <img className="w-full rounded-2xl  special-view-imgs" src={product2} />
                            </div>
                            <div className="mySlides">
                                <img className="w-full rounded-2xl  special-view-imgs" src={product3} />
                            </div>
                            <div className="mySlides">
                                <img className="w-full rounded-2xl  special-view-imgs" src={product4} />
                            </div>
                        </div>
                        
                        <div className="w-[20%] flex">
                            <a className="nextButton" onClick={() => plusSlides(1)}>&#10095;</a>
                        </div>
                    </div>

                    
                    

                    <div className="w-full flex justify-center gap-7">
                        <div
                            className="w-20  rounded-xl  column special-view-wrapper"
                            style={{ border: "2px solid orange" }}
                        >
                            <img
                            src={product1Thumbnail}
                            onClick={() => {
                                currentSlidSpecialView(1);
                            }}
                            className="w-full h-full rounded-xl hover-shadow cursor-pointer    opacity-25 special-vew-thumbnails"
                            />
                        </div>
                        <div className="w-20  rounded-xl  column special-view-wrapper">
                            <img
                            src={product2Thumbnail}
                            onClick={() => {
                                currentSlidSpecialView(2);
                            }}
                            className="w-full h-full rounded-xl hover-shadow cursor-pointer special-vew-thumbnails"
                            />
                        </div>
                        <div className="w-20  rounded-xl  column special-view-wrapper">
                            <img
                            src={product3Thumbnail}
                            onClick={() => {
                                currentSlidSpecialView(3);
                            }}
                            className="w-full h-full rounded-xl hover-shadow cursor-pointer special-vew-thumbnails "
                            />
                        </div>
                        <div className="w-20  rounded-xl  column special-view-wrapper">
                            <img
                            src={product4Thumbnail}
                            onClick={() => {
                                currentSlidSpecialView(4);
                            }}
                            className="w-full h-full rounded-xl hover-shadow cursor-pointer special-vew-thumbnails "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
        
  );
}
