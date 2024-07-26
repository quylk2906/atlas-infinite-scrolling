import React, { PropsWithChildren } from 'react';

type RenderItem<T> = (item: T, index: number) => React.ReactNode;

type Props<T> = {
  data: T[];
  renderItem?: RenderItem<T>;
  rowKey?: ((item: T) => React.Key) | keyof T;
};

const ProductList = <T,>(props: PropsWithChildren<Props<T>>) => {
  const { data, children, renderItem, rowKey } = props;

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
    <div className="products wrapper grid products-grid">
      <ul className="products list items product-items">
        {data.map((el, idx) => renderInnerItem(el, idx))}
        {children}
      </ul>
      <div id="amasty-shopby-overlay" className="amshopby-overlay-block">
        <span className="amshopby-loader" />
      </div>
    </div>
  );
};

export default ProductList;
