import { FC, useEffect, useRef, useState } from 'react';
import useProducts from '../../../hooks/useProducts';
import Product from '../../components/product/Product';
import InfiniteScrolling from '../../components/infinite-scrolling/InfiniteScrolling';
import Loading from '../../components/loading/Loading';
import ViewMoreButton from '../../components/view-more-button/ViewMoreButton';
import { type Product as ProductType } from '../../../types';
import { FURNITURE } from '../../../fake-data';

const DEFAULT_LIMIT = 51;
const CONTAINER_HEIGHT = (window.innerHeight * 70) / 100;

const ProductList: FC = () => {
  const [page, setPage] = useState(0);
  const reachedLimit = useRef(false);
  const [products, setProducts] = useState<ProductType[]>([]);

  const { data, loading, error } = useProducts({
    limit: DEFAULT_LIMIT,
    offset: page,
  });

  useEffect(() => {
    error &&
      alert(
        `${error} \nI will enhance Axios to implement retry logic for failed API requests.`
      );
  }, [error]);

  useEffect(() => {
    if (loading === false && data.length < DEFAULT_LIMIT) {
      reachedLimit.current = true;
    }
    setProducts((prev) => prev.concat(data));
  }, [data]);

  const handleScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    // Refer to: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#problems_and_solutions
    if (loading || reachedLimit.current || page > 0) {
      return;
    }
    if (
      Math.abs(
        e.currentTarget.scrollHeight -
          e.currentTarget.scrollTop -
          CONTAINER_HEIGHT
      ) <= 1
    ) {
      setPage((prev) => prev + 1);
    }
  };

  const handleViewMore = () => {
    if (loading || reachedLimit.current) return;
    setPage((prev) => prev + 1);
  };

  return (
    <InfiniteScrolling
      itemKey={'id'}
      data={products}
      height={CONTAINER_HEIGHT}
      itemHeight={427}
      onScroll={handleScroll}
      renderItem={(item) => (
        <Product name={item.name} image={item.image} id={item.id} />
      )}
      loadingIndicator={
        <>
          {loading && <Loading />}
          {!reachedLimit.current && (
            <ViewMoreButton
              current={products.length}
              total={FURNITURE.length}
              disabled={loading}
              onClick={handleViewMore}
            />
          )}
        </>
      }
    />
  );
};

export default ProductList;
