import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="grid  items-center justify-center">
      <Spinner />
      <p className="text-primary-200 text-lg mt-4">Loading Data...</p>
    </div>
  );
}
