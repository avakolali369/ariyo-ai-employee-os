import { createBrowserRouter, Navigate } from "react-router-dom";

import { AppShell } from "@/app/app-shell";
import { NotFoundPage } from "@/app/not-found-page";
import { RouteErrorBoundary } from "@/app/route-error-boundary";
import { ariyoRoutes } from "@/app/routes";
import { RouteSkeletonPage } from "@/features/foundation/pages/route-skeleton-page";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        index: true,
        element: <RouteSkeletonPage route={ariyoRoutes[0]} />,
      },
      {
        path: "pricing",
        element: <RouteSkeletonPage route={ariyoRoutes[1]} />,
      },
      {
        path: "trust",
        element: <RouteSkeletonPage route={ariyoRoutes[2]} />,
      },
      {
        path: "app",
        element: <AppShell />,
        children: [
          {
            index: true,
            element: <Navigate to="/app/dashboard" replace />,
          },
          {
            path: "dashboard",
            element: <RouteSkeletonPage route={ariyoRoutes[3]} />,
          },
          {
            path: "ai-employees/new",
            element: <RouteSkeletonPage route={ariyoRoutes[4]} />,
          },
          {
            path: "ai-employees/:id",
            element: <RouteSkeletonPage route={ariyoRoutes[5]} />,
          },
          {
            path: "workflows/:id/builder",
            element: <RouteSkeletonPage route={ariyoRoutes[6]} />,
          },
          {
            path: "marketplace",
            element: <RouteSkeletonPage route={ariyoRoutes[7]} />,
          },
          {
            path: "marketplace/templates/:id",
            element: <RouteSkeletonPage route={ariyoRoutes[8]} />,
          },
          {
            path: "admin",
            element: <RouteSkeletonPage route={ariyoRoutes[9]} />,
          },
        ],
      },
      {
        path: "internal/launch-readiness",
        element: <RouteSkeletonPage route={ariyoRoutes[10]} />,
      },
      {
        path: "creator",
        element: <RouteSkeletonPage route={ariyoRoutes[11]} />,
      },
      {
        path: "partner",
        element: <RouteSkeletonPage route={ariyoRoutes[12]} />,
      },
      {
        path: "internal/ops",
        element: <RouteSkeletonPage route={ariyoRoutes[13]} />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
