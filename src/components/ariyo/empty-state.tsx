import type { ReactNode } from "react";

type EmptyStateProps = {
  action?: ReactNode;
  description: string;
  title: string;
};

export function EmptyState({ action, description, title }: EmptyStateProps) {
  return (
    <section className="state state--empty" aria-label={title}>
      <h2>{title}</h2>
      <p>{description}</p>
      {action ? <div className="state__action">{action}</div> : null}
    </section>
  );
}
