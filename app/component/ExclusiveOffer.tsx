import Image from "next/image"
import Link from "next/link"



const ExclusiveOffer = () => {
    return (
        <div className="h-96 lg:h-h100 lg:mx-20 bg-[url('/Exclusive_offer/bg.svg')] xl:bg-[url('/Exclusive_offer/bg_lg.svg')]">
            <div className="flex items-center justify-center">
                <div className="flex flex-col items-start gap-6 w-10/12 xl:w-7/12 mt-10 lg:mt-20 xl:ml-auto xl:pr-32 xl:px-5">
                    <h1 className="text-xl text-greenColorText md:text-3xl lg:text-5xl font-bold ">Exclusive offer</h1>
                    <p className="text-greenColorText text-justify ">
                        Unlock the ultimate style upgrade with our exclusive offer Enjoy savings of up to 40% off on our latest New Arrivals
                    </p>
                    <div className="grid grid-cols-3 gap-3 text-greenColorText">
                        <div className="flex flex-col items-center bg-white px-3 py-1 lg:text-xl">
                            <p className="font-bold">06</p>
                            <p>Days</p>
                        </div>
                        <div className="flex flex-col items-center bg-white px-3 py-1 lg:text-xl">
                            <p className="font-bold">18</p>
                            <p>Hours</p>
                        </div>
                        <div className="flex flex-col items-center bg-white px-3 py-1 lg:text-xl">
                            <p className="font-bold">48</p>
                            <p>Min</p>
                        </div>
                    </div>
                    <Link className="bg-greenColorText hover:bg-green-800 transition duration-300 px-5 py-2 rounded-md text-white lg:px-8 lg:py-4 lg:text-lg " href="#">
                        Buy Now
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ExclusiveOffer
