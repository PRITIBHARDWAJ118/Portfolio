function SectionTitle({ title }) {
  return (
    <h2 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
      {title} <span className="text-accent">&gt;</span>
    </h2>
  );
}

export default SectionTitle;
