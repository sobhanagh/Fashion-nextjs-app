import BestSelling from "./component/BestSelling";
import DesignClothes from "./component/DesignClothes";
import ExclusiveOffer from "./component/ExclusiveOffer";
import HomePage from "./component/HomePage";
import OurProducts from "./component/OurProducts";


export default function Home() {
  return (
    <main className="mb-10">
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
      <div>
        <DesignClothes />
      </div>
    </main >
  );
}
