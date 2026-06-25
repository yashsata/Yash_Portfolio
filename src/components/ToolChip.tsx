export function ToolChip({ name, index }: { name: string; index: number }) {
  const initials = name
    .replace("Google ", "")
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  return (
    <li className="tool-chip">
      <span style={{ "--chip-index": index } as React.CSSProperties}>
        {initials}
      </span>
      {name}
    </li>
  );
}
