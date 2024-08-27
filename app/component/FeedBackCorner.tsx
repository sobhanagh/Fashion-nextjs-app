"use client";

import { useEffect, useState } from "react"
import Image from "next/image";


const FeedBackCorner = () => {

    const data = [
        {
            name: "Sarah Thompson",
            comment: "I absolutely love the quality and style of the clothing I purchased from this website. customer service was outstanding, and I received my order quickly. Highly recommended!"
        },
        {
            name: "Emily Wilson",
            comment: "The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!"
        },
        {
            name: "Olivia Martinez",
            comment: "I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!"
        }
    ]

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const lastIndex = data.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        else if (index > lastIndex) {
            setIndex(0);
        }
    }, [index])

    return (
        <div className="flex flex-col items-center gap-10">
            <h1 className="text-xl text-greenColorText md:text-3xl lg:text-5xl font-semibold ">Feedback Corner</h1>
            <div className="flex flex-col items-center w-10/12">
                <div className="relative w-10/12 lg:w-9/12 bg-greenColor rounded-lg min-h-96 lg:min-h-72 overflow-hidden">
                    {
                        data.map((feedback, feedbackIndex) => {

                            const { name, comment } = feedback;

                            let style = "translate-x-full";

                            if (index == feedbackIndex) {
                                style = "translate-x-0";
                            }
                            else if (index - 1 == feedbackIndex || (index == 0 && feedbackIndex == data.length - 1)) {
                                style = "-translate-x-full";
                            }

                            return (
                                <article key={feedbackIndex}
                                    className={`${style} transition duration-300 w-full absolute inset-0 flex flex-col gap-5 sm:gap-10
                                    ${index == feedbackIndex ? 'opacity-100' : 'opacity-0'} p-5 max-h-20`}
                                >
                                    <Image
                                        src="/feedback.svg"
                                        width={30}
                                        height={30}
                                        alt="feedback"
                                    />
                                    <h1 className="font-semibold">{name}</h1>
                                    <p >{comment}</p>
                                </article>
                            )
                        })

                    }
                </div>
                <div className="flex items-center text-greenColorText gap-5 mt-10">
                    <button onClick={() => setIndex(index - 1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"
                            />
                        </svg>
                    </button>
                    <button onClick={() => setIndex(index + 1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </button>

                </div>
            </div>
        </div >
    )
}

export default FeedBackCorner
