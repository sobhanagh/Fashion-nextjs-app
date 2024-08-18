import BestSelling from "./component/BestSelling";
import HomePage from "./component/HomePage";


export default function Home() {
  return (
    <main className="mb-10">
      <div className="mb-96 md:mb-52 lg:mb-32">
        <HomePage />
      </div>
      <div className="">
        <BestSelling />
      </div>
    </main >
  );
}
