const SUPABASE_URL = "https://kkegsgshjfgaxkifdqly.supabase.co";

const imageUrl = `${SUPABASE_URL}/storage/v1/object/public/cabin-images/`;
// ("https://kkegsgshjfgaxkifdqly.supabase.co/storage/v1/object/public/cabin-images/cabin-009.png");
// https://kkegsgshjfgaxkifdqly.supabase.co/storage/v1/object/public/cabin-images/cabin-1.png

 export const cabins = [
  {
    name: "001",
    maxCapacity: 2,
    regularPrice: 350,
    discount: 20,
    image: imageUrl + "cabin-001.png",
    description:
      "Cabin 001 is a family-friendly escape nestled among towering pines. With two queen-size beds, a spacious living area, and a private deck, it’s perfect for a serene forest getaway. Enjoy evenings by the fire pit and mornings in the cosy breakfast nook.",
  },
  {
    name: "002",
    maxCapacity: 4,
    regularPrice: 350,
    discount: 10,
    image: imageUrl + "cabin-002.png",
    description:
      "Cabin 002 is a family-friendly escape nestled among towering pines. With two queen-size beds, a spacious living area, and a private deck, it’s perfect for a serene forest getaway. Enjoy evenings by the fire pit and mornings in the cosy breakfast nook.",
  },
  {
    name: "003",
    maxCapacity: 6,
    regularPrice: 450,
    discount: 5,
    image: imageUrl + "cabin-003.png",
    description:
      "Designed for larger groups, Cabin 003 boasts a rustic charm with modern amenities. This spacious retreat includes three bedrooms, a full kitchen, and a large living area, perfect for bonding. Relax by the fireplace or take a dip in the private hot tub on the deck.",
  },
  {
    name: "004",
    maxCapacity: 2,
    regularPrice: 200,
    discount: 15,
    image: imageUrl + "cabin-004.png",
    description:
      "Cabin 004 offers a romantic haven with a king-sized bed, intimate fireplace, and panoramic forest views. The cosy interior and private deck make it an ideal spot for couples seeking a quiet escape.",
  },
  {
    name: "005",
    maxCapacity: 8,
    regularPrice: 500,
    discount: 10,
    image: imageUrl + "cabin-005.png",
    description:
      "Perfect for group retreats, Cabin 005 features four bedrooms, a large communal area, and a fully equipped kitchen. Step outside to enjoy a barbecue on the spacious deck or unwind in the hot tub surrounded by nature.",
  },
  {
    name: "006",
    maxCapacity: 3,
    regularPrice: 275,
    discount: 0,
    image: imageUrl + "cabin-006.png",
    description:
      "Cabin 006 combines rustic charm with modern comfort. Ideal for a small family or friends, it includes a queen bed, a single bed, and a cosy sitting area with forest views. A compact kitchen and outdoor fire pit complete the experience.",
  },
  {
    name: "007",
    maxCapacity: 5,
    regularPrice: 400,
    discount: 5,
    image: imageUrl + "cabin-007.png",
    description:
      "Enjoy a blend of luxury and nature in Cabin 007. This retreat features two bedrooms, a fireplace, and a private deck with a breathtaking lake view. It's perfect for families and friends who love the outdoors.",
  },
  {
    name: "008",
    maxCapacity: 4,
    regularPrice: 375,
    discount: 8,
    image: imageUrl + "cabin-008.png",
    description:
      "A charming cabin designed for families, Cabin 008 includes two queen beds, a spacious living area, and a wrap-around deck. With easy access to hiking trails and a cosy fire pit, it’s an adventurer’s dream.",
  },
  {
    name: "009",
    maxCapacity: 2,
    regularPrice: 225,
    discount: 20,
    image: imageUrl + "cabin-009.png",
    description:
      "Cabin 009 is a secluded hideaway perfect for couples. Featuring a plush king bed, a fireplace, and a private deck with a hot tub, this cabin offers an intimate setting for a romantic getaway.",
  },
];
