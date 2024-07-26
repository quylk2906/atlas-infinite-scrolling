import { useState, useEffect } from 'react';
import { getProducts } from '../mock-api';
import { Product } from '../types';

const useProducts = ({ limit, skip }: { limit: number; skip: number }) => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await getProducts({
          limit,
          skip,
        });
        setData(result);
      } catch (err: any) {
        setError(err ?? 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [limit, skip]);

  return { data, loading, error };
};

export default useProducts;
