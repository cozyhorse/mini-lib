type HexColor = string;

export interface Book {
  audience: string;
  author: string;
  title: string;
  pages: number;
  color: HexColor;
  id: number;
  plot: string;
  publisher: string;
  year: number;
}
