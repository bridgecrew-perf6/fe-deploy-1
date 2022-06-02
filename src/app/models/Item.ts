import { IBase } from './base';

export interface Item extends IBase {
  thumbnail: string;
  description: string;
  name: string;
  price: number;
  quantity: number;
  categories: string[];
}
