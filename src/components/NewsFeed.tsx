import { useNews } from '../hooks/useNews';
import StoryCard from './StoryCard';

interface NewsFeedProps {
  searchQuery: string;
}

export default function NewsFeed({ searchQuery }: NewsFeedProps) {
  const { articles, loading } = useNews();

  // Filter articles based on the search query
  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full max-w-6xl mx-auto mt-12 pb-20 px-4 sm:px-6 md:px-8">
      <h2 className="text-white text-lg font-medium mb-4">
        {searchQuery ? "Search Results" : "Thought-provoking stories"}
      </h2>

      {loading ? (
        <div className="text-gray-400">Loading stories...</div>
      ) : filteredArticles.length > 0 ? (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
          {filteredArticles.map((article, i) => (
            <StoryCard key={i} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-gray-400 mt-8 text-center bg-[#2B2A33] py-12 rounded-xl">
          <p className="text-lg mb-2">No articles found matching "{searchQuery}"</p>
          <p className="text-sm">Try adjusting your search terms.</p>
        </div>
      )}
    </div>
  ); 
}