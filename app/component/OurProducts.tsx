import { imageType } from "./Types"
import RenderImage from "./RenderImage"
import Link from "next/link"

const OurProducts = () => {

    const images: imageType[] = [
        {
            srcBackground: "/our_products/Rectangle_1.svg",
            srcPerson: "/our_products/person_1.png",
            title: "Spread Collar Shirt",
            price: "$48.99 | 5.0"
        },
        {
            srcBackground: "/our_products/Rectangle_5.svg",
            srcPerson: "/our_products/person_5.png",
            title: "White Solid Formal Shirt",
            price: "$38.00 | 4.9"
        },
        {
            srcBackground: "/our_products/Rectangle_5.svg",
            srcPerson: "/our_products/person_3.png",
            title: "Shine On Me Blouse",
            price: "$42.99 | 4.8"
        },
        {
            srcBackground: "/our_products/Rectangle_4.svg",
            srcPerson: "/our_products/person_4.png",
            title: "Gray Solid Padded Jacket",
            price: "$32.99 | 4.7"
        },
        {
            srcBackground: "/our_products/Rectangle_5.svg",
            srcPerson: "/our_products/person_5.png",
            title: "Printed Loose T-shirt",
            price: "$38.99 | 5.0"
        },
        {
            srcBackground: "/our_products/Rectangle_6.svg",
            srcPerson: "/our_products/person_6.png",
            title: "Summer Wind Crop Shirt",
            price: "$39.95 | 4.7"
        },
        {
            srcBackground: "/our_products/Rectangle_7.svg",
            srcPerson: "/our_products/person_7.png",
            title: "Tailored Jacket",
            price: "$46.00 | 4.9"
        },
        {
            srcBackground: "/our_products/Rectangle_8.svg",
            srcPerson: "/our_products/person_8.png",
            title: "Solid Round Neck T-shirt",
            price: "$36.00 | 5.0"
        },
    ]

    return (
        <div className="flex flex-col items-center justify-center px-10 gap-10">
            <div className="flex flex-col items-center">
                <h1 className="text-xl text-greenColorText md:text-3xl lg:text-5xl font-semibold">Our Products</h1>
            </div>
            {
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-10 w-3/4 lg:w-full">
                    {
                        images.map((item, index) => {
                            return (
                                <RenderImage key={index} item={item} />
                            )
                        })
                    }
                </div>

            }
            <Link href="/products/all" className="border-2 border-greenColorText px-4 py-1 flex items-center gap-2 lg:text-lg lg:px-8 lg:py-3 hover:bg-greenColorText hover:text-white transition duration-200">
                <p>See all</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </Link>

        </div>
    )
}

export default OurProducts
