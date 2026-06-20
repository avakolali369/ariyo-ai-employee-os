import type { ReactNode } from "react";

type BlockedStateProps = {
  action?: ReactNode;
  description: string;
  owner?: string;
  title: string;
};

export function BlockedState({ action, description, owner, title }: BlockedStateProps) {
  return (
    <section className="state state--blocked" aria-label={title}>
      <h2>{title}</h2>
      <p>{description}</p>
      {owner ? <p className="state__meta">Owner: {owner}</p> : null}
      {action ? <div className="state__action">{action}</div> : null}
    </section>
  );
}
