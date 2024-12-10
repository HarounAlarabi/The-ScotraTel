import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";
import { Analytics } from "@vercel/analytics/next";

//import Uploader from "./_lib/Uploader";
import { Merienda } from "next/font/google";
import { ReservationProvider } from "./_components/ReservationContext";

const merienda = Merienda({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata = {
  title: {
    template: "%s | The SocatraTel",
    default: "The SocatraTel",
  },
  description:
    "The SocatraTel is the best place to stay is it based in the socatra island in Yemen.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${merienda.className} bg-primary-900  flex flex-col min-h-screen antialiased relative text-primary-50 `}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid ">
          <main className="max-w-7xl mx-auto w-full text-sm">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
