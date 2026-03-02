import { Card, CardContent } from './ui/card';
import type { Article } from '../types';

export default function StoryCard({ article }: { article: Article }) {
  return (
    <a href={article.url} target="_blank" rel="noreferrer" className="block group">
      <Card className="bg-[#2B2A33] border-none overflow-hidden hover:bg-[#383841] transition-all duration-300 h-full cursor-pointer hover:shadow-xl hover:shadow-black/75">
        <div className="h-40 overflow-hidden bg-gray-800">
          {article.urlToImage && (
            <img 
              src={article.urlToImage} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <CardContent className="p-4 flex flex-col justify-between h-[120px]">
          <h3 className="text-gray-100 font-medium line-clamp-2 text-sm">{article.title}</h3>
          <div className="flex items-center text-xs text-gray-400 mt-2">
            <span>{article.source.name}</span>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}