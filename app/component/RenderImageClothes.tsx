import { imageTypeDesigner } from "./Types"
import Image from "next/image"

const RenderImage = ({ item }: { item: imageTypeDesigner }) => {
    return (
        <div className="flex flex-col items-center relative">
            <Image
                src={`${item.srcBackground}`}
                width={1000}
                height={1000}
                alt="fashion"
                className="w-full"
            />
            <Image
                src={`${item.srcPerson}`}
                width={1000}
                height={1000}
                alt="fashion"
                className="absolute w-full"
            />
            <div className="flex flex-col items-center gap-1 md:text-lg mt-3">
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-center">{item.desc}</p>
            </div>
        </div>
    )
}

export default RenderImage
