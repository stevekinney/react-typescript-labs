import { Card } from '$/common/components/card';
import { useEffect, useState } from 'react';
import { currentDate } from './utilities';

type NewsArticleProps = {
  id: number;
};

const fetchArticle = async (id: number) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return response.json();
};

export const NewsArticle = ({ id = 1 }: NewsArticleProps) => {
  // Important: The type for article is any because the API returns.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [article, setArticle] = useState<any>(null);

  useEffect(() => {
    fetchArticle(id).then((data) => setArticle(data));
  }, [id]);

  return (
    <Card as="article" className="space-y-4 font-mono md:first:col-span-2">
      <header className="flex items-start justify-between">
        <h2 className="text-lg font-semibold">{article?.title}</h2>
        <p className="text-sm whitespace-nowrap text-gray-500">{currentDate}</p>
      </header>
      <p>{article?.body}</p>
    </Card>
  );
};
