import { Container } from '$/common/components/container';
import { Suspense } from 'react';
import { Loading } from './loading';
import { NewsArticle } from './news-article';
import { currentDate } from './utilities';

export const Newspaper = () => {
  return (
    <Container className="space-y-16 rounded-lg border-2 border-slate-800 bg-slate-100 py-8 dark:bg-slate-800">
      <header className="border-b-4 border-double border-slate-800 pb-6 text-center font-serif">
        <h1 className="mb-2 text-6xl font-bold tracking-tight">The Daily Closure</h1>
        <p className="text-xl text-slate-500 italic dark:text-slate-300">
          All the Lorem Ipsum that is fit to print.
        </p>
        <div className="mt-4 text-sm text-slate-500 dark:text-slate-300">
          Published on {currentDate}.
        </div>
      </header>
      <main className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Suspense fallback={<Loading />}>
          <NewsArticle id={1} />
          <NewsArticle id={2} />
          <NewsArticle id={3} />
          <NewsArticle id={4} />
          <NewsArticle id={5} />
        </Suspense>
      </main>
    </Container>
  );
};
