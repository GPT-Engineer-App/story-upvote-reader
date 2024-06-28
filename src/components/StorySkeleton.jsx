import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const StorySkeleton = () => {
  return (
    <div className="mb-4">
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-1/4 mb-2" />
      <Skeleton className="h-8 w-1/4" />
    </div>
  );
};

export default StorySkeleton;