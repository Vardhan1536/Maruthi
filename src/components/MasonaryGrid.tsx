import MasonryItem from "./MasonaryItem";

const mockBoxes = [
  280, 160, 220, 180, 300, 140,
  200, 260, 150, 230, 190, 270
];

export default function MasonryGrid() {
  return (
    <div
      className="
        grid 
        grid-cols-6 
        gap-0
        auto-rows-masonry
      "
    >
      {mockBoxes.map((height, index) => (
        <MasonryItem key={index} height={height} />
      ))}
    </div>
  );
}
