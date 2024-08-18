import Image from "next/image"
import Link from "next/link"


const BestSelling = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-10 px-10">
            <div className="flex flex-col items-center justify-center gap-5 w-full">
                <h1 className="text-xl text-greenColorText md:text-3xl lg:text-5xl">Best Selling</h1>
                <p className="text-greenColorText text-center md:text-xl">Get in on the trend with our curated selection of best-selling styles.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-3/4 lg:w-full">
                <div className="flex flex-col items-center relative">
                    <Image
                        src="/best_selling/Rectangle_first.svg"
                        width={1}
                        height={1}
                        alt="fashion"
                        className="w-full"
                    />
                    <Image
                        src="/best_selling/first.svg"
                        width={1}
                        height={1}
                        alt="fashion"
                        className="absolute w-full"
                    />
                    <div className="flex flex-col items-center gap-1 md:text-lg mt-3">
                        <h2 className="">Regular Fit Long Sleeve Top</h2>
                        <h4>$38.99 | 5.0</h4>
                    </div>
                </div>
                <div className="flex flex-col items-center relative">
                    <Image
                        src="/best_selling/Rectangle_second.svg"
                        width={1}
                        height={1}
                        alt="fashion"
                        className="w-full"
                    />
                    <Image
                        src="/best_selling/second.svg"
                        width={1}
                        height={1}
                        alt="fashion"
                        className="absolute w-full"
                    />
                    <div className="flex flex-col items-center gap-1 md:text-lg mt-3">
                        <h2>Regular Fit Long Sleeve Top</h2>
                        <h4>$38.99 | 5.0</h4>
                    </div>
                </div>
                <div className="flex flex-col items-center relative">
                    <Image
                        src="/best_selling/Rectangle_third.svg"
                        width={1}
                        height={1}
                        alt="fashion"
                        className="w-full"
                    />
                    <Image
                        src="/best_selling/third.svg"
                        width={1}
                        height={1}
                        alt="fashion"
                        className="absolute w-full"
                    />
                    <div className="flex flex-col items-center gap-1 md:text-lg mt-3">
                        <h2>Regular Fit Long Sleeve Top</h2>
                        <h4>$38.99 | 5.0</h4>
                    </div>
                </div>
            </div>
            <Link href="#" className="border-2 border-greenColorText px-4 py-1 flex items-center gap-2 lg:text-lg lg:px-6 lg:py-3 hover:bg-greenColorText hover:text-white transition duration-200">
                <p>See all</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </Link>
        </div>
    )
}

export default BestSelling
