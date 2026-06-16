export const studioProducts = [
  {
    slug: "cozy-bear-couple-reading-together",
    title: "Cozy Bear Couple Reading Together",
    artist: "Astra-Parallax",
    sourceUrl: "https://www.redbubble.com/shop/ap/181557332?asc=u",
    primaryProductUrl: "https://www.redbubble.com/i/hoodie/Cozy-Bear-Couple-Reading-Together-by-Astra-Parallax/181557332/ng59",
    category: "Cozy reading artwork",
    productCount: "66 products",
    priceNote: "From A$2.01 on Redbubble",
    summary:
      "Two teddy bears share a quiet reading moment beneath a blanket fort, surrounded by books, warm lights, cookies, and cozy details.",
    description:
      "A soft, heartwarming design for book lovers, couples, cozy aesthetic fans, and anyone who likes gentle illustrated products with a warm storybook mood.",
    tags: ["book lovers", "cozy aesthetic", "teddy bear couple", "reading together", "romantic gift", "cute animals"],
    mockups: [
      {
        title: "Oversized T-Shirt",
        url: "/images/products/cozy-bear-couple-reading-together/oversized-t-shirt.jpg",
        sourceUrl: "https://ih1.redbubble.net/image.6164011672.7332/ssrco%2Coversize_tee%2Cmens%2Cffffff%3Aaffd82b53f%2Cfront%2Csquare_close_portrait%2Cx1000.jpg",
        alt: "Cozy Bear Couple Reading Together artwork on a white oversized t-shirt mockup"
      },
      {
        title: "Throw Pillow",
        url: "/images/products/cozy-bear-couple-reading-together/throw-pillow.jpg",
        sourceUrl: "https://ih1.redbubble.net/image.6164011628.7332/ur%2Cthrow_pillow_couch_small%2Csquare%2C1000x1000.jpg",
        alt: "Cozy Bear Couple Reading Together artwork on a white throw pillow mockup"
      }
    ],
    availableOn: [
      "Premium Oversized Hoodie",
      "Oversized T-Shirt",
      "Throw Pillow",
      "Poster",
      "Classic Mug",
      "Cotton Tote Bag",
      "Sticker",
      "Phone Case",
      "Hardcover Journal",
      "Mouse Pad"
    ]
  }
] as const;

export type StudioProduct = (typeof studioProducts)[number];

export function getStudioProduct(slug: string) {
  return studioProducts.find((product) => product.slug === slug);
}
