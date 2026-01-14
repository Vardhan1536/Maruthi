import { useEffect, useRef, useState } from "react";

export default function MasonryItem({ height }) {
  const ref = useRef(null);
  const [rowSpan, setRowSpan] = useState(1);

  useEffect(() => {
    if (!ref.current) return;

    const gridRowHeight = 10; // must match auto-rows
    const gap = 16; // Tailwind gap-4 = 16px

    const contentHeight = height;
    const span = Math.ceil((contentHeight + gap) / gridRowHeight);

    setRowSpan(span);
  }, [height]);

  return (
    <div
      ref={ref}
      style={{
        gridRowEnd: `span ${rowSpan}`,
        height: `${height}px`,
      }}
      className="
        border 
        border-red-300
        bg-white
      "
    />
  );
}
