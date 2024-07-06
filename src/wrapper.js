"use client";

import { Suspense } from "react";
import ErrorBoundary from "./error-boundary";

export default function Wrapper({ children }) {
  return (
    <ErrorBoundary fallback={<div>Something crashed.</div>}>
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </ErrorBoundary>
  );
}
