import { imageType } from "./Types"
import RenderImage from "./RenderImage"

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

        </div>
    )
}

export default OurProducts
