"use client";

import { productType } from "@/app/component/Types"
import RenderProduct from "@/app/component/RenderProduct"
import Link from "next/link"


const page = ({ params }: any) => {

    const products: productType[] = [
        {
            srcBackground: "/our_products/Rectangle_1.svg",
            srcPerson: "/our_products/person_1.png",
            title: "Spread Collar Shirt",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis neque sunt obcaecati sed aliquid porro eaque, possimus, odio error ducimus quibusdam debitis ",
            price: 10,
            category: "sale"
        },
        {
            srcBackground: "/our_products/Rectangle_5.svg",
            srcPerson: "/our_products/person_5.png",
            title: "White Solid Formal Shirt",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis neque sunt obcaecati sed aliquid porro eaque, possimus, odio error ducimus quibusdam debitis ",
            price: 20,
            category: "sale"
        },
        {
            srcBackground: "/our_products/Rectangle_5.svg",
            srcPerson: "/our_products/person_3.png",
            title: "Shine On Me Blouse",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis neque sunt obcaecati sed aliquid porro eaque, possimus, odio error ducimus quibusdam debitis ",
            price: 30,
            category: "hot"
        },
        {
            srcBackground: "/our_products/Rectangle_4.svg",
            srcPerson: "/our_products/person_4.png",
            title: "Gray Solid Padded Jacket",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis neque sunt obcaecati sed aliquid porro eaque, possimus, odio error ducimus quibusdam debitis ",
            price: 40,
            category: "hot"
        },
        {
            srcBackground: "/our_products/Rectangle_5.svg",
            srcPerson: "/our_products/person_5.png",
            title: "Printed Loose T-shirt",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis neque sunt obcaecati sed aliquid porro eaque, possimus, odio error ducimus quibusdam debitis ",
            price: 50,
            category: "hot"
        },
        {
            srcBackground: "/our_products/Rectangle_6.svg",
            srcPerson: "/our_products/person_6.png",
            title: "Summer Wind Crop Shirt",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis neque sunt obcaecati sed aliquid porro eaque, possimus, odio error ducimus quibusdam debitis ",
            price: 60,
            category: "newarrivals"
        },
        {
            srcBackground: "/our_products/Rectangle_7.svg",
            srcPerson: "/our_products/person_7.png",
            title: "Tailored Jacket",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis neque sunt obcaecati sed aliquid porro eaque, possimus, odio error ducimus quibusdam debitis ",
            price: 70,
            category: "newarrivals"
        },
        {
            srcBackground: "/our_products/Rectangle_8.svg",
            srcPerson: "/our_products/person_8.png",
            title: "Solid Round Neck T-shirt",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis neque sunt obcaecati sed aliquid porro eaque, possimus, odio error ducimus quibusdam debitis ",
            price: 80,
            category: "accessories"
        },
        {
            srcBackground: "/our_products/Rectangle_7.svg",
            srcPerson: "/our_products/person_7.png",
            title: "Summer Jacket",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis neque sunt obcaecati sed aliquid porro eaque, possimus, odio error ducimus quibusdam debitis ",
            price: 70,
            category: "accessories"
        },
    ]

    const buttons = [
        { title: "ALL", href: "/products/all" },
        { title: "SALE", href: "/products/sale" },
        { title: "HOT", href: "/products/hot" },
        { title: "NEW ARRIVALS", href: "/products/newarrivals" },
        { title: "ACCESSORIES", href: "/products/accessories" },
    ]

    const searchTerm = params.category;


    const entries = searchTerm === "all" ? [...products] : products.filter((product) => product.category === searchTerm);



    return (
        <div className="relative w-full my-10 mb-32">
            <div className="flex flex-col items-center gap-8">
                <h1 className="text-xl text-greenColorText md:text-3xl lg:text-4xl font-semibold">Products</h1>
                <div className="flex items-center gap-5">
                    {
                        buttons.map((btn) => {
                            return (
                                <Link href={btn.href} key={btn.href}
                                    className="border-2 border-greenColorText px-4 py-1 lg:text-lg lg:px-6 hover:bg-greenColorText hover:text-white transition duration-200 rounded-lg"
                                >
                                    {btn.title}
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 sm:w-10/12 lg:w-8/12 mx-auto gap-10 lg:gap-16 mt-20">
                {
                    entries.map((product) => {
                        return (
                            <article key={product.title}>
                                <RenderProduct item={product} />
                            </article>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default page
