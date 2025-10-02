import { Card } from '$/common/components/card';
import { Skeleton } from '$/common/components/skeleton';

const PendingArticle = () => {
  return (
    <>
      <Card as="article" className="space-y-4 font-mono md:first:col-span-2">
        <header className="flex items-center justify-between">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/4" />
        </header>
        <p>
          <Skeleton className="h-4" />
          <Skeleton className="h-4" />
          <Skeleton className="h-4 w-3/4" />
        </p>
      </Card>
    </>
  );
};

export const Loading = () => {
  return (
    <>
      <PendingArticle />
      <PendingArticle />
      <PendingArticle />
      <PendingArticle />
    </>
  );
};
