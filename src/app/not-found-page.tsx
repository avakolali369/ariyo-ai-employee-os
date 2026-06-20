import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ariyo/empty-state";

export function NotFoundPage() {
  return (
    <main className="route-page">
      <EmptyState
        title="Route not found"
        description="This Ariyo surface has not been registered in the Sprint 0 route map."
        action={
          <Button asChild>
            <Link to="/app/dashboard">Open dashboard skeleton</Link>
          </Button>
        }
      />
    </main>
  );
}
