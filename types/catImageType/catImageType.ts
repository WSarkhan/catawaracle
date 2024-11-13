export interface CatImageUri {
  id: string;
  uri: string;
  width?: number;
  height?: number;
}

export interface CatImageUrl {
  id: string;
  url: string;
  width?: number;
  height?: number;
}

export type CatImage = CatImageUri | CatImageUrl;
