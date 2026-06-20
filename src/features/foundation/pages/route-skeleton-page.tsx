import type { AriyoRoute } from "@/app/routes";
import { PageContainer } from "@/components/ariyo/page-container";
import { PageHeader } from "@/components/ariyo/page-header";
import { AppStateShowcase } from "@/components/ariyo/app-state-showcase";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { apiClient } from "@/lib/api/client";

type RouteSkeletonPageProps = {
  route: AriyoRoute;
};

export function RouteSkeletonPage({ route }: RouteSkeletonPageProps) {
  void apiClient;

  return (
    <PageContainer>
      <PageHeader
        eyebrow={`Sprint 0 / ${route.surface}`}
        title={route.title}
        description={route.description}
        actions={<Badge variant={route.mvpStatus === "locked" ? "success" : "warning"}>{route.mvpStatus}</Badge>}
      />
      <Card className="skeleton-route-card">
        <div>
          <strong>Route foundation</strong>
          <p>
            This route is intentionally skeletal. Surface-specific implementation
            waits for its approved sprint and mockup spec.
          </p>
        </div>
        <dl>
          <div>
            <dt>Path</dt>
            <dd>{route.path}</dd>
          </div>
          <div>
            <dt>Mode</dt>
            <dd>{route.mode}</dd>
          </div>
        </dl>
      </Card>
      <AppStateShowcase />
    </PageContainer>
  );
}
