import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import useProducts from '../../../hooks/useProducts';
import Product from '../../components/product/Product';
import InfiniteScrolling from '../../components/infinite-scrolling/InfiniteScrolling';
import Loading from '../../components/loading/Loading';
import ViewMoreButton from '../../components/view-more-button/ViewMoreButton';
import { type Product as ProductType } from '../../../types';
import { FURNITURE } from '../../../fake-data';
import useBreakpoint from '../../../hooks/useBreakpoint';

const DEFAULT_LIMIT = 48;

const ProductList: FC = () => {
  const [page, setPage] = useState(0);
  const reachedLimit = useRef(false);
  const [products, setProducts] = useState<ProductType[]>([]);

  const breakpoint = useBreakpoint();

  const { data, loading, error } = useProducts({
    limit: DEFAULT_LIMIT,
    offset: page,
  });

  const shouldRemoveOnScroll = loading || reachedLimit.current || page > 0;

  const { containerHeight, columnCount, itemHeight } = useMemo(() => {
    const isSmallBreakPoint = breakpoint === 'sm' || breakpoint === 'xs';

    return {
      containerHeight:
        (window.innerHeight * (isSmallBreakPoint ? 80 : 70)) / 100,
      itemHeight: isSmallBreakPoint ? 334 : 528,
      columnCount: isSmallBreakPoint ? 2 : 3,
    };
  }, [breakpoint]);

  // console.log({ containerHeight, columnCount, itemHeight });

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

  const handleScroll = useCallback(
    (e: React.UIEvent<HTMLElement, UIEvent>) => {
      // Refer to: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#problems_and_solutions

      if (
        Math.abs(
          e.currentTarget.scrollHeight -
            e.currentTarget.scrollTop -
            containerHeight
        ) <= 1
      ) {
        setPage((prev) => prev + 1);
      }
    },
    [containerHeight]
  );

  const handleViewMore = () => {
    if (loading || reachedLimit.current) return;
    setPage((prev) => prev + 1);
  };

  if (!breakpoint) {
    return null;
  }

  return (
    <InfiniteScrolling
      itemKey={'id'}
      data={products}
      height={containerHeight}
      itemHeight={itemHeight}
      onScroll={shouldRemoveOnScroll ? undefined : handleScroll}
      columnCount={columnCount}
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
