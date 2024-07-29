import React, { Fragment, ReactNode, useMemo } from 'react';
import VirtualList from 'rc-virtual-list';
import { chunkArray } from '../../../helpers';
import isEmpty from 'lodash/isEmpty';

type RenderItem<T> = (item: T, index: number) => React.ReactNode;

type Props<T> = {
  data: T[];
  renderItem?: RenderItem<T>;
  itemKey: ((item: T) => React.Key) | keyof T;
  height?: number;
  columnCount?: number;
  itemHeight?: number;
  loadingIndicator?: ReactNode;
  onScroll?: (e: React.UIEvent<HTMLElement, UIEvent>) => void;
};

const InfiniteScrolling = <T,>(props: Props<T>) => {
  const {
    data,
    loadingIndicator,
    itemKey,
    itemHeight,
    height,
    columnCount,
    renderItem,
    onScroll,
  } = props;

  const chunkData = useMemo(
    () =>
      chunkArray(data, columnCount).map((el, idx) => ({
        idx,
        data: el,
      })),
    [data, columnCount]
  );

  const renderInnerItem = (item: T, index: number) => {
    if (!renderItem) return null;
    let key: any;

    if (typeof itemKey === 'function') {
      key = itemKey(item);
    } else if (itemKey) {
      key = item[itemKey];
    } else {
      key = (item as any).key;
    }
    if (!key) {
      key = `list-item-${index}`;
    }

    return (
      <li className="item product product-item" key={key}>
        {renderItem(item, index)}
      </li>
    );
  };

  return (
    <div className="products wrapper grid products-grid">
      {isEmpty(chunkData) ? (
        loadingIndicator
      ) : (
        <VirtualList
          itemKey={'idx'}
          data={chunkData}
          height={height}
          itemHeight={itemHeight}
          onScroll={onScroll}
          styles={{
            verticalScrollBarThumb: { marginLeft: 8 },
          }}
        >
          {(el, idx) => {
            return (
              <Fragment key={el.idx}>
                <ul className="products list items product-items">
                  {el.data.map((childEl, childIdx) =>
                    renderInnerItem(childEl, childIdx)
                  )}
                </ul>
                {idx === chunkData.length - 1 && loadingIndicator}
              </Fragment>
            );
          }}
        </VirtualList>
      )}
    </div>
  );
};

export default InfiniteScrolling;
