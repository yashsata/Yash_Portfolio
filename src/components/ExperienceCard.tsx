export function ExperienceCard({
  role,
  company,
  period,
  copy,
  marker,
}: {
  role: string;
  company: string;
  period: string;
  copy: string;
  marker: string;
}) {
  return (
    <article className="experience-card glass-panel">
      <div className="experience-marker">{marker}</div>
      <div>
        <p className="experience-period">{period}</p>
        <h3>{role}</h3>
        <h4>{company}</h4>
        <p>{copy}</p>
      </div>
    </article>
  );
}
