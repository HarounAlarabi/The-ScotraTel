import { Suspense } from "react";
import {
  getBookedDatesByCabinId,
  getCabin,
  getCabins,
  getSettings,
} from "@/app/_lib/data-service";

import Reservation from "@/app/_components/Reservation";
import Cabin from "@/app/_components/Cabin";
import Spinner from "@/app/_components/Spinner";

export async function generateMetadata({ params }) {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);
  return {
    title: `Cabin ${cabin.name}`,
  };
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));

  return ids;
}

export default async function Page({ params }) {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />
      <div>
        <h2 className="text-5xl font-semibold text-center mbb-10 ">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
