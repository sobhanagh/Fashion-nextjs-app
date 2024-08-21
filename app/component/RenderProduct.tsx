import { productType } from "./Types"
import Image from "next/image"
import Link from "next/link"

const RenderProduct = ({ item }: { item: productType }) => {
    return (
        <div className="flex flex-col relative gap-3">
            <Image
                src={`${item.srcBackground}`}
                width={1000}
                height={1000}
                alt="fashion"
                className="w-full rounded-lg"
            />
            <Image
                src={`${item.srcPerson}`}
                width={1000}
                height={1000}
                alt="fashion"
                className="absolute w-full border-2 border-greenColorText rounded-lg"
            />
            <div className="flex flex-col items-start gap-3">
                <div className="flex flex-col gap-1 md:text-lg">
                    <div className="flex justify-between items-center font-semibold text-greenColorText">
                        <h2>{item.title}</h2>
                        <h4>${item.price}</h4>
                    </div>
                    <hr className="bg-greenColor h-1"></hr>
                    <p className="text-justify">{item.desc}</p>
                </div>
                <Link
                    href="#"
                    className="border-2 border-greenColorText px-4 py-1 lg:text-lg lg:px-6 hover:bg-greenColorText hover:text-white transition duration-200 rounded-lg
                "
                >
                    Buy
                </Link>
            </div>
        </div>
    )
}

export default RenderProduct
