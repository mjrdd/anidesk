export type SearchResult = {
  currentPage: number;
  hasNextPage: boolean;
  results: {
    id: string;
    title: string;
    image: string;
    releaseDate: string;
    subOrDub: string;
  }[];
};

export type AnimeInfo = {
  id: string;
  title: string;
  url: string;
  image: string;
  releaseDate: string;
  description: string;
  genres: string[];
  subOrDub: string;
  type: string;
  status: string;
  otherName: string;
  totalEpisodes: string;
  episodes: {
    id: string;
    number: number;
    url: string;
  }[];
};
