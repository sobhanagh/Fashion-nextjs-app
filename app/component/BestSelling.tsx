import Link from "next/link"
import RenderImage from "./RenderImage"
import { imageType } from "./Types"


const BestSelling = () => {

    const images: imageType[] = [
        {
            srcBackground: "/best_selling/Rectangle_first.svg",
            srcPerson: "/best_selling/first.svg",
            title: "Regular Fit Long Sleeve Top",
            price: "$38.99 | 5.0"
        },
        {
            srcBackground: "/best_selling/Rectangle_second.svg",
            srcPerson: "/best_selling/second.svg",
            title: "Black Crop Tailored Jacket",
            price: "$62.99 | 4.9"
        },
        {
            srcBackground: "/best_selling/Rectangle_third.svg",
            srcPerson: "/best_selling/third.svg",
            title: "Textured Sunset Shirt",
            price: "$49.99 | 5.0"
        },
    ]

    return (
        <div className="flex flex-col items-center justify-center gap-10 px-10 xl:px-16">
            <div className="flex flex-col items-center justify-center gap-5 w-full">
                <h1 className="text-xl text-greenColorText md:text-3xl lg:text-5xl font-semibold">Best Selling</h1>
                <p className="text-greenColorText text-center md:text-xl">Get in on the trend with our curated selection of best-selling styles.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-3/4 lg:w-full">
                {
                    images.map((item, index) => {
                        return (
                            <RenderImage key={index} item={item} />
                        )
                    })
                }
            </div>
            <Link href="#" className="border-2 border-greenColorText px-4 py-1 flex items-center gap-2 lg:text-lg lg:px-8 lg:py-3 hover:bg-greenColorText hover:text-white transition duration-200">
                <p>See all</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </Link>
        </div>
    )
}

export default BestSelling
