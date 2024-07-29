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
  const [productHeight, setProductHeight] = useState(0);

  const breakpoint = useBreakpoint();
  const isSmallBreakPoint = breakpoint === 'sm' || breakpoint === 'xs';

  const { data, loading, error } = useProducts({
    limit: DEFAULT_LIMIT,
    offset: page,
  });

  const shouldRemoveOnScroll = loading || reachedLimit.current || page > 0;

  const { columnCount, gap } = useMemo(() => {
    return {
      columnCount: isSmallBreakPoint ? 2 : 3,
      gap: isSmallBreakPoint ? 16 : 30,
    };
  }, [isSmallBreakPoint]);

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

  const handleScroll = useCallback(() => {
    // Refer to: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#problems_and_solutions
    if (!shouldRemoveOnScroll) {
      setPage((prev) => prev + 1);
    }
  }, [shouldRemoveOnScroll]);

  const handleViewMore = () => {
    if (loading || reachedLimit.current) return;
    setPage((prev) => prev + 1);
  };

  const handleUpdateHeight = useCallback(
    (h: number) => {
      // TODO: Implement resize event to handle responsive layout
      setProductHeight(Math.round(isSmallBreakPoint ? h + 20 : h));
    },
    [isSmallBreakPoint, productHeight]
  );

  if (!breakpoint) {
    return null;
  }

  return (
    <div css={{ marginBlock: 30 }} className="products-grid">
      <InfiniteScrolling
        key={`${productHeight}`}
        itemKey={'id'}
        data={products}
        gap={gap}
        onLoadMore={handleScroll}
        columnCount={columnCount}
        itemHeight={productHeight}
        rowClass="products list items product-items"
        itemClass="item product product-item"
        renderItem={(item) => (
          <Product
            name={item.name}
            image={item.image}
            onLoadedContent={handleUpdateHeight}
          />
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
    </div>
  );
};

export default ProductList;
