import MasonryItem from "./MasonaryItem";

const images = [
  "/lz1.png",
  "/lz2.png",
  "/lz3.png",
  "/lz4.png",
  "/lz5.png",
  "/lz6.png",
  "/lz7.png",
  "/lz8.png",
  "/lz9.png",
  "/lz10.png",
  "/lz11.png",
  "/lz12.png",
];

export default function MasonryGrid() {
  return (
    <div
      className="
        grid
        grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
        gap-2
        auto-rows-[0px]
      "
    >
      {images.map((src, index) => (
        <MasonryItem key={index} src={src} />
      ))}
    </div>
  );
}
