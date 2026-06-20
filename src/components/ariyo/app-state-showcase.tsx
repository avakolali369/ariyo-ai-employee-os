import { Button } from "@/components/ui/button";
import { BlockedState } from "@/components/ariyo/blocked-state";
import { EmptyState } from "@/components/ariyo/empty-state";
import { ErrorState } from "@/components/ariyo/error-state";
import { LoadingState } from "@/components/ariyo/loading-state";

export function AppStateShowcase() {
  return (
    <section className="state-grid" aria-label="Sprint 0 state patterns">
      <LoadingState label="Checking policy compatibility..." />
      <EmptyState
        title="No workflows active"
        description="Connect an AI Employee to a workflow and run a simulation before launching."
        action={<Button variant="secondary">Build workflow</Button>}
      />
      <ErrorState
        title="Could not load audit evidence"
        description="The current view is safe. Retry the request or open the support path if this continues."
        action={<Button variant="secondary">Retry</Button>}
      />
      <BlockedState
        title="Launch blocked by policy"
        description="This action needs security admin approval before activation."
        owner="Jonas Mueller"
        action={<Button variant="secondary">Request approval</Button>}
      />
    </section>
  );
}
