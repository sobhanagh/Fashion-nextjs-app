import { imageType } from "./Types"
import Image from "next/image"

const RenderImage = ({ item }: { item: imageType }) => {
    return (
        <div className="flex flex-col items-center relative">
            <Image
                src={`${item.srcBackground}`}
                width={1}
                height={1}
                alt="fashion"
                className="w-full"
            />
            <Image
                src={`${item.srcPerson}`}
                width={1}
                height={1}
                alt="fashion"
                className="absolute w-full"
            />
            <div className="flex flex-col items-center gap-1 md:text-lg mt-3">
                <h2>{item.title}</h2>
                <h4>{item.price}</h4>
            </div>
        </div>
    )
}

export default RenderImage
