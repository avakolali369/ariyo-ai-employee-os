type LoadingStateProps = {
  label: string;
};

export function LoadingState({ label }: LoadingStateProps) {
  return (
    <section className="state state--loading" aria-live="polite" aria-busy="true">
      <span className="state__skeleton" />
      <span className="state__skeleton state__skeleton--short" />
      <p>{label}</p>
    </section>
  );
}
