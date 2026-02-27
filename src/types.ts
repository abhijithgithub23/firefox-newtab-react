export interface Article {
  title: string;
  url: string;
  urlToImage: string;
  source: { name: string };
  publishedAt: string;
}

export interface BackgroundSettings {
  type: 'color' | 'image';
  value: string;
}