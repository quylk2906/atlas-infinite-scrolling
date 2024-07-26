import { FURNITURE } from '../fake-data';
import { Product } from '../types';

let count = 0;

export const getProducts = ({
  limit,
  skip,
}: {
  limit: number;
  skip: number;
}): Promise<Product[]> => {
  return new Promise((resolve, reject) => {
    count += 1;
    setTimeout(() => {
      if (count === 4) {
        // Fake error case
        reject('Something went wrong');
      }
      resolve(FURNITURE.slice(skip, limit));
    }, 1000);
  });
};
