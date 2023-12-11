
export default function InfoProduct() {
  return (
    <div className="w-full lg:w-fit md:px-20 lg:px-0 h-full font-Kumbh p-6 lg:-mt-16">
        <p className="text-Orange uppercase font-bold text-sm tracking-wider mb-4">sneaker company</p>
        <h1 className="capitalize font-bold text-3xl lg:text-[2.5rem] lg:leading-10 mt-2 text-Very-dark-blue">fall limited edition sneakers</h1>
        <p className="mt-3 lg:mt-8 text-Very-dark-blue">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they´ll whithstand everything the weather can offer.</p>
        <div className="mt-7 flex items-center lg:flex-col lg:items-start">
            <div className="flex items-center">
                <p className="text-3xl font-bold">$125.00</p>
                <p className="ml-4 py-1 px-3 font-bold text-Orange bg-Pale-orange rounded-lg">50%</p>
            </div>
            <p className="w-full text-end ml-20 lg:text-start lg:ml-0 lg:mt-2 font-bold text-Grayish-blue"><s>$250.00</s></p>
        </div>
    </div>
  )
}
