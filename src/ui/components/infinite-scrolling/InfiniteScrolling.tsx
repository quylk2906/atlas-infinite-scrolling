import React, { PropsWithChildren } from 'react';

type RenderItem<T> = (item: T, index: number) => React.ReactNode;

type Props<T> = {
  data: T[];
  renderItem?: RenderItem<T>;
  rowKey?: ((item: T) => React.Key) | keyof T;
  height?: number;
  itemHeight?: number;
  onScroll?: (e: React.UIEvent<HTMLElement, UIEvent>) => void;
};

const InfiniteScrolling = <T,>(props: PropsWithChildren<Props<T>>) => {
  const { data, children, renderItem, rowKey, itemHeight, height, onScroll } =
    props;

  const renderInnerItem = (item: T, index: number) => {
    if (!renderItem) return null;

    let key: any;

    if (typeof rowKey === 'function') {
      key = rowKey(item);
    } else if (rowKey) {
      key = item[rowKey];
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
    <div
      className="products wrapper grid products-grid"
      onScroll={onScroll}
      css={{ height, overflowY: 'auto', overflowX: 'hidden' }}
    >
      <div className="products list items product-items">
        {data.map((el, idx) => renderInnerItem(el, idx))}
        {children}
      </div>
      <div className="amshopby-overlay-block">
        <span className="amshopby-loader" />
      </div>
    </div>
  );
};

export default InfiniteScrolling;
