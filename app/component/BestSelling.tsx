import RenderImage from "./RenderImage"
import { imageType } from "./Types"


const BestSelling = () => {

    const images: imageType[] = [
        {
            srcBackground: "/best_selling/Rectangle_first.svg",
            srcPerson: "/best_selling/first.png",
            title: "Regular Fit Long Sleeve Top",
            price: "$38.99 | 5.0"
        },
        {
            srcBackground: "/best_selling/Rectangle_second.svg",
            srcPerson: "/best_selling/second.png",
            title: "Black Crop Tailored Jacket",
            price: "$62.99 | 4.9"
        },
        {
            srcBackground: "/best_selling/Rectangle_third.svg",
            srcPerson: "/best_selling/third.png",
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
        </div>
    )
}

export default BestSelling
