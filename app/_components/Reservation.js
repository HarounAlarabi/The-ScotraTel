import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import { getSettings, getBookedDatesByCabinId } from "@/app/_lib/data-service";

async function Reservation({ cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  return (
    <div className="grid grid-cols-2 border border-slate-600 min-h-[400px] mt-10">
      <DateSelector
        settings={settings}
        cabin={cabin}
        bookedDates={bookedDates}
      />
      <ReservationForm cabin={cabin} />
    </div>
  );
}

export default Reservation;
