import { tools } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { ToolChip } from "./ToolChip";

export function ToolsSection() {
  return (
    <section
      className="content-section glass-panel overview-panel tools-layout"
      id="tools"
    >
      <SectionHeading eyebrow="" title="AI tools I use" />
      <ul className="tool-list">
        {tools.map((tool, index) => (
          <ToolChip key={tool} name={tool} index={index} />
        ))}
      </ul>
    </section>
  );
}
