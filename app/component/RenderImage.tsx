import { imageType } from "./Types"
import Image from "next/image"

const RenderImage = ({ item }: { item: imageType }) => {
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
                <div className="flex items-center gap-2">
                    <h4>{item.price}
                    </h4>
                    <Image
                        src={"/star.svg"}
                        width={20}
                        height={20}
                        alt="score"
                    />
                </div>

            </div>
        </div>
    )
}

export default RenderImage
