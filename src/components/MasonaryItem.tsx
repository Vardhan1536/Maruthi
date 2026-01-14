import { useEffect, useRef, useState } from "react";

export default function MasonryItem({ src }) {
  const ref = useRef(null);
  const [span, setSpan] = useState(1);

  const calculateSpan = () => {
    if (!ref.current) return;

    const rowHeight = 8; // must match auto-rows
    const gap = 8;       // gap-2 = 8px

    const height = ref.current.getBoundingClientRect().height;
    const rowSpan = Math.ceil((height + gap) / rowHeight);

    setSpan(rowSpan);
  };

  useEffect(() => {
    calculateSpan();
    window.addEventListener("resize", calculateSpan);
    return () => window.removeEventListener("resize", calculateSpan);
  }, []);

  return (
    <div
      style={{ gridRowEnd: `span ${span}` }}
      className="overflow-hidden rounded-md bg-white"
    >
      <img
        ref={ref}
        src={src}
        alt=""
        className="w-full h-auto block object-cover"
        onLoad={calculateSpan}
      />
    </div>
  );
}
