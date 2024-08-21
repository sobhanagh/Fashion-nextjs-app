import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
    return (
        <div className="mt-32 md:mt-16">
            <div className="bg-greenColor w-full absolute inset-0 -z-10"></div>
            <div className="flex flex-col md:flex-row items-center justify-center sm:justify-between px-10 gap-5">
                <div className="flex flex-col items-start justify-center gap-5 lg:gap-8 text-greenColorText md:w-1/2">
                    <h1 className="text-2xl sm:text-3xl lg:text-6xl font-serif font-semibold">
                        Discover and Find Your Own Fashion!
                    </h1>
                    <p className="text-sm sm:text-lg lg:text-xl">
                        Explore our curated collection of stylish clothing and accessories tailored to your unique taste.
                    </p>
                    <div>
                        <Link className="bg-greenColorText hover:bg-green-800 transition duration-300 px-5 py-2 rounded-md text-white lg:px-8 lg:py-4 lg:text-lg " href="#">Explore Now</Link>
                    </div>
                </div>
                <Image
                    src={"/home_img.svg"}
                    width={1000}
                    height={1000}
                    alt="fashion"
                    className="hidden md:inline w-96 h-96 lg:w-w100 lg:h-h100"
                />
            </div>
        </div>
    )
}

export default HomePage
