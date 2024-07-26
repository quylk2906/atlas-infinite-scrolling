import { useState, useEffect } from 'react';
import { getProducts } from '../mock-api';
import { Product } from '../types';

type State = { data: Product[]; loading: boolean; error: string | null };

const useProducts = ({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}): State => {
  const [data, setData] = useState<State['data']>([]);
  const [loading, setLoading] = useState<State['loading']>(true);
  const [error, setError] = useState<State['error']>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await getProducts({ limit, offset });
        setData(result);
      } catch (err: any) {
        setError(err ?? 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [limit, offset]);

  return { data, loading, error };
};

export default useProducts;
