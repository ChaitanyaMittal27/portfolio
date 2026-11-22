interface SectionHeadingProps {
  index: string; // "01"
  label: string; // "Work"
  title: string; // "Selected work"
  id: string; // for aria-labelledby
}

export default function SectionHeading({ index, label, title, id }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-2.5">
      <span className="font-mono text-[13px] text-faint">
        {index} — {label}
      </span>
      <h2 id={id} className="text-4xl font-semibold tracking-[-0.03em] sm:text-[44px]">
        {title}
      </h2>
    </div>
  );
}
