import { useNews } from '../hooks/useNews';
import StoryCard from './StoryCard';

export default function NewsFeed() {
  const { articles, loading } = useNews();

  return (
    <div className="w-full max-w-6xl mx-auto mt-12 pb-20 px-4 sm:px-6 md:px-8">
  <h2 className="text-white text-lg font-medium mb-4">
    Thought-provoking stories
  </h2>

  {loading ? (
    <div className="text-gray-400">Loading stories...</div>
  ) : (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
      {articles.map((article, i) => (
        <StoryCard key={i} article={article} />
      ))}
    </div>
  )}
</div>
  ); 
}