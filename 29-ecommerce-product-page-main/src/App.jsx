import BuyProduct from "./components/BuyProduct/BuyProduct";
import Cart from "./components/Cart/Cart";
import HeaderMobile from "./components/Mobile/Header/Header";
import InfoProduct from "./components/InfoProduct/InfoProduct";
import Banner from "./components/Mobile/Gallery/Gallery";
import Header from "./components/Header/Header";
import Gallery from "./components/LightboxGallery/Gallery";

function App() {

  return (
      <div className="w-full h-full min-h-screen bg-white mb-16 lg:mb-0">
        {
          <>
              <div className="lg:hidden">
                <HeaderMobile/>
                <Banner/>
                <Cart/>
                <InfoProduct/>
                <BuyProduct/>
              </div>

              <div className="hidden lg:flex lg:flex-col">
                  <Header/>
                  <Cart/>
                  <div className="w-full h-full py-24 flex justify-center items-center">
                      <div className="w-full h-full flex justify-center items-center lg:gap-5 xl:gap-20">
                        <Gallery/>
                        <div className="w-[42%] xl:w-[480px] flex flex-col justify-start items-center gap-10">
                          <InfoProduct/>
                          <BuyProduct/>
                        </div>
                      </div>
                  </div>
              </div>
          </>
        }
          
      </div>
  )
}

export default App
