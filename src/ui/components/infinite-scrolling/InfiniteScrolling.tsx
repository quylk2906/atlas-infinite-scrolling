import React, { ReactNode } from 'react';
import { useGrid, useVirtualizer } from '@virtual-grid/react';

type RenderItem<T> = (item: T, index: number) => React.ReactNode;

type Props<T> = {
  data: T[];
  renderItem?: RenderItem<T>;
  itemKey: ((item: T) => React.Key) | keyof T;
  height?: number;
  columnCount?: number;
  gap?: number;
  loadingIndicator?: ReactNode;
  onScroll?: (e: React.UIEvent<HTMLElement, UIEvent>) => void;
};

const InfiniteScrolling = <T,>(props: Props<T>) => {
  const {
    data,
    loadingIndicator,
    itemKey,
    height,
    columnCount,
    gap = 30,
    renderItem,
    onScroll,
  } = props;
  const ref = React.useRef<HTMLDivElement>(null);

  const grid = useGrid({
    scrollRef: ref,
    count: data.length,
    columns: columnCount,
    gap,
    // rows: data.length / 3,
    totalCount: 9,
    padding: 14,
    // size: { height: 500, width: 400 },
  });

  const rowVirtualizer = useVirtualizer(grid.rowVirtualizer);
  const columnVirtualizer = useVirtualizer(grid.columnVirtualizer);

  React.useEffect(() => {
    rowVirtualizer.measure();
  }, [rowVirtualizer, grid.virtualItemHeight]);

  React.useEffect(() => {
    columnVirtualizer.measure();
  }, [columnVirtualizer, grid.virtualItemWidth]);

  const renderInnerItem = (item: T, index: number, style: any) => {
    if (!renderItem || !item) return null;
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
      <li key={key} style={{ ...style }}>
        <div
          className="item product product-item"
          css={{ width: '100% !important' }}
        >
          {renderItem(item, index)}
        </div>
      </li>
    );
  };

  return (
    <div
      ref={ref}
      style={{ height, overflowY: 'auto', overflowX: 'hidden' }}
      className="products-grid"
      onScroll={onScroll}
    >
      <ul
        style={{
          position: 'relative',
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: `${columnVirtualizer.getTotalSize()}px`,
        }}
        className="products list items product-items"
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          return (
            <React.Fragment key={virtualRow.key}>
              {columnVirtualizer.getVirtualItems().map((virtualColumn) => {
                const index = virtualRow.index * 3 + virtualColumn.index;
                const item = grid.getVirtualItem({
                  row: virtualRow,
                  column: virtualColumn,
                });
                if (!item) return null;
                return renderInnerItem(data[index], index, item.style);
              })}
            </React.Fragment>
          );
        })}
      </ul>
      {loadingIndicator}
    </div>
  );
};

export default InfiniteScrolling;
