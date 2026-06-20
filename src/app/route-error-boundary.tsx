import { Link, useRouteError } from "react-router-dom";

import { ErrorState } from "@/components/ariyo/error-state";
import { Button } from "@/components/ui/button";

export function RouteErrorBoundary() {
  const error = useRouteError();
  const message =
    error instanceof Error
      ? error.message
      : "The route could not be rendered safely.";

  return (
    <main className="route-page">
      <ErrorState
        title="This surface could not load"
        description={message}
        action={
          <Button asChild variant="secondary">
            <Link to="/app/dashboard">Return to app shell</Link>
          </Button>
        }
      />
    </main>
  );
}
