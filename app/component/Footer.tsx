import Image from "next/image"

const Footer = () => {
    return (
        <div className="flex flex-col items-center bg-greenColorText gap-10 p-5 lg:py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-white">
                <div className="flex flex-col items-start gap-2 lg:gap-10">
                    <Image
                        src={"/Rivo_footer.svg"}
                        width={1}
                        height={1}
                        alt="Rivo"
                        className="w-16 lg:w-20"
                    />
                    <div className="flex flex-col items-start gap-2">
                        <h2 className="lg:text-lg">Social Media</h2>
                        <div className="flex items-center gap-3">
                            <Image
                                src={"/social/Facebook.svg"}
                                width={1}
                                height={1}
                                alt="Rivo"
                                className="w-8 lg:w-10"
                            />
                            <Image
                                src={"/social/Instagram.svg"}
                                width={1}
                                height={1}
                                alt="Rivo"
                                className="w-8 lg:w-10"
                            />
                            <Image
                                src={"/social/Twitter.svg"}
                                width={1}
                                height={1}
                                alt="Rivo"
                                className="w-8 lg:w-10"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-2">
                    <h2 className="font-semibold text-lg lg:text-xl">SHOP</h2>
                    <ul className="flex flex-col gap-1 lg:text-lg">
                        <li>Products</li>
                        <li>Overview</li>
                        <li>Pricing</li>
                        <li>Releases</li>
                    </ul>
                </div>
                <div className="flex flex-col items-start gap-2">
                    <h2 className="font-semibold text-lg lg lg:text-xl">COMPANY</h2>
                    <ul className="flex flex-col gap-1 lg:text-lg">
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>News</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className="flex flex-col items-start gap-2">
                    <h2 className="font-semibold text-lg lg:text-xl">STAY UP TO DATE</h2>
                    <div className="flex">
                        <input className="border-2 border-greenColorBtn outline-none px-3 py-1 text-white bg-transparent w-full placeholder:text-white" type="email" placeholder="Enter your email" />
                        <button className="bg-greenColorBtn text-black px-2">Submit</button>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between gap-7 w-full px-14">
                <hr className="flex-grow rounded-3xl  bg-greenColor hidden sm:inline" />
                <ul className="flex items-center justify-center text-white gap-5 mx-auto w-full sm:w-auto">
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Cookies</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
