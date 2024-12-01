import { Suspense } from "react";
import { CabinList } from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

//export const revalidate = 15;

export const metadata = {
  title: "Cabins",
};
export default async function Page({ searchParams }) {
  const { capacity } = await searchParams;
  const filter = capacity ?? "all";
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cosy yet luxurious cabins, located in the heart of Socotra Island,
        Yemen. Imagine waking up to breathtaking views of surreal landscapes,
        from the famous Dragon’s Blood trees to crystal-clear beaches. Spend
        your days exploring the island’s unique flora and fauna, or simply
        unwind in your private space under the starlit sky. Embrace the
        untouched beauty of nature in your own secluded retreat. The ideal spot
        for a peaceful, one-of-a-kind holiday. Welcome to paradise.
      </p>
      <div className="flex justify-end mb-8">
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
