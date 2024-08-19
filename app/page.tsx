import BestSelling from "./component/BestSelling";
import DesignClothes from "./component/DesignClothes";
import ExclusiveOffer from "./component/ExclusiveOffer";
import FeedBackCorner from "./component/FeedBackCorner";
import HomePage from "./component/HomePage";
import OurProducts from "./component/OurProducts";


export default function Home() {
  return (
    <main className="mb-10 overflow-hidden">
      <div className="mb-96 md:mb-52 lg:mb-32">
        <HomePage />
      </div>
      <div className="mb-14">
        <BestSelling />
      </div>
      <div className="mb-20">
        <OurProducts />
      </div>
      <div className="mb-20">
        <ExclusiveOffer />
      </div>
      <div className="mb-20">
        <DesignClothes />
      </div>
      <div className="">
        <FeedBackCorner />
      </div>
    </main >
  );
}
