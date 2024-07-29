import { FURNITURE } from '../fake-data';
import { Product } from '../types';

let count = 0;

export const getProducts = ({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}): Promise<Product[]> => {
  // console.log(offset * limit, limit * (offset + 1));
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      count += 1;
      if (count === 4) {
        // Fake error case
        reject('Something went wrong');
      }
      resolve(FURNITURE.slice(offset * limit, limit * (offset + 1)));
    }, 1000);
  });
};
