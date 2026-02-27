import { useNews } from '../hooks/useNews';
import StoryCard from './StoryCard';

export default function NewsFeed() {
  const { articles, loading } = useNews();

  return (
    <div className="w-full max-w-5xl mx-auto mt-12 pb-20 px-4">
      <h2 className="text-white text-lg font-medium mb-4">Thought-provoking stories</h2>
      {loading ? (
        <div className="text-gray-400">Loading stories...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {articles.map((article, i) => (
            <StoryCard key={i} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}