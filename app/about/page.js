import Image from "next/image";
import image1 from "@/public/about-1.jpg";

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to The SocatraTel
        </h1>

        <div className="space-y-8">
          <p>
            Where the wonders of nature and comfortable living come together.
            Tucked away on the enchanting Socotra Island in Yemen, this is your
            sanctuary away from home. But it’s not just about the luxurious
            cabins; it’s about immersing yourself in the rare beauty of Socotra
            and creating lasting memories with family.
          </p>
          <p>
            Our 8 luxury cabins provide a cosy base, yet the true sense of
            freedom and tranquillity lies in the surrounding landscapes. Wander
            through unique Dragon’s Blood forests, breathe in the fresh ocean
            breeze, and gaze at the stars from the warmth of a campfire or your
            private deck.
          </p>
          <p>
            This is where unforgettable moments are crafted, embraced by the
            unspoilt beauty of nature. It’s a place to unwind, reconnect, and
            revel in the joy of being together in an extraordinary setting.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={image1}
          placeholder="blur"
          alt="Family sitting around a fire pit in front of cabin"
          quality={100}
        />
      </div>

      <div className="col-span-2 relative aspect-square">
        <Image
          src="/about-2.jpg"
          alt="Family that manages The SocatraTel"
          className="object-contain"
          fill
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Managed by our family since 1962
        </h1>

        <div className="space-y-8">
          <p>
            Since 1962, Socotra Retreat has been a cherished family-run haven.
            Founded by our grandparents, this sanctuary has been nurtured with
            love, passed down through generations, a reflection of our
            dedication to creating a warm and inviting environment.
          </p>
          <p>
            Through the years, we’ve preserved the essence of Socotra Retreat,
            blending the island’s timeless beauty with the personal touch only a
            family business can offer. Here, you’re not just a guest; you’re
            part of our extended family. Join us at Socotra Retreat, where
            tradition meets tranquillity, and each visit feels like coming home.
          </p>

          <div>
            <a
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our luxury cabins
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
