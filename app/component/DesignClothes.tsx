import { imageTypeDesigner } from "./Types"
import RenderImageClothes from "./RenderImageClothes"

const DesignClothes = () => {


    const images: imageTypeDesigner[] = [
        {
            srcBackground: "/Designer/Rectangle_1.svg",
            srcPerson: "/Designer/person_1.png",
            title: "Accessories",
            desc: "Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats."
        },
        {
            srcBackground: "/Designer/Rectangle_2.svg",
            srcPerson: "/Designer/person_2.png",
            title: "Dresses",
            desc: "Explore a stunning range of designer dresses, including evening gowns and chic day dresses."
        },
        {
            srcBackground: "/Designer/Rectangle_3.svg",
            srcPerson: "/Designer/person_3.png",
            title: "Outerwear",
            desc: "Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons."
        },
    ]

    return (
        <div className="flex flex-col items-center gap-10 px-5 xl:px-16">
            <div className="flex flex-col items-center gap-5">
                <h1 className="text-xl text-greenColorText md:text-3xl lg:text-5xl font-semibold">Designer Clothes For You</h1>
                <p className="text-greenColorText text-center md:text-xl">Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-10 w-3/4 lg:w-full">
                {
                    images.map((item, index) => {
                        return (
                            <RenderImageClothes key={index} item={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DesignClothes
