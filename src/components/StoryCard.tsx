import { Card, CardContent } from './ui/card';
import type { Article } from '../types';

export default function StoryCard({ article }: { article: Article }) {
  return (
    <a href={article.url} target="_blank" rel="noreferrer" className="block group h-full">
      {/* Added max-w-[400px], mx-auto, and flex-col to keep the card proportional */}
      <Card className="bg-[#2B2A33] border-none overflow-hidden hover:bg-[#383841] transition-all duration-300 h-full flex flex-col cursor-pointer hover:shadow-xl hover:shadow-black/75 max-w-[400px] mx-auto w-full">
        
        {/* Replaced h-40 with aspect-video so the image scales proportionally */}
        <div className="aspect-video overflow-hidden bg-gray-800">
          {article.urlToImage ? (
            <img 
              src={article.urlToImage} 
              alt={article.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-600 text-xs">
              No Image
            </div>
          )}
        </div>
        
        {/* Added flex-grow so the text content fills the space and pushes the source to the bottom */}
        <CardContent className="p-4 flex flex-col flex-grow justify-between">
          <h3 className="text-gray-100 font-medium line-clamp-2 text-sm leading-snug">
            {article.title}
          </h3>
          <div className="flex items-center text-[11px] uppercase tracking-wider text-gray-400 mt-4">
            <span className="truncate">{article.source.name}</span>
          </div>
        </CardContent>
      </Card>
    </a>
  ); 
}