import { Key, ReactNode, useEffect, useMemo, useRef } from 'react';
import { useWindowVirtualizer } from '@tanstack/react-virtual';
import { chunkArray } from '../../../helpers';
import { isEmpty } from 'lodash';

type RenderItem<T> = (item: T, index: number) => ReactNode;

type Props<T> = {
  data: T[];
  renderItem?: RenderItem<T>;
  itemKey: ((item: T) => Key) | keyof T;
  itemHeight?: number;
  columnCount?: number;
  rowClass?: string;
  itemClass?: string;
  gap?: number;
  loadingIndicator?: ReactNode;
  onLoadMore?: () => void;
};

const COUNTDOWN_FLAG = 3;
const LOADING_HEIGHT = 140;

const InfiniteScrolling = <T,>(props: Props<T>) => {
  const {
    data,
    loadingIndicator,
    itemKey,
    rowClass,
    itemClass,
    itemHeight = 0,
    columnCount = 1,
    gap = 30,
    renderItem,
    onLoadMore,
  } = props;
  const listRef = useRef<HTMLDivElement | null>(null);
  const triggerScrollCountdown = useRef(COUNTDOWN_FLAG);

  const chunkedData = useMemo(
    () => chunkArray(data, columnCount),
    [data, columnCount]
  );

  const count = chunkedData.length;

  const virtualizer = useWindowVirtualizer({
    gap,
    count,
    // Item height
    estimateSize: () => itemHeight || 400,
    // overscan: 0,
    isScrollingResetDelay: 9,
    // scrollPaddingEnd: 1500,
    // paddingEnd: 100,
    // scrollMargin: 50,
    // lanes: 3,
    //  scrollMargin: listRef.current?.offsetTop ?? 0,
  });

  useEffect(() => {
    const [lastItem] = [...virtualizer.getVirtualItems().reverse()];

    if (!lastItem) return;

    if (lastItem.index >= chunkedData.length - 1) {
      if (triggerScrollCountdown.current != 0) {
        triggerScrollCountdown.current -= 1;
      } else {
        triggerScrollCountdown.current = COUNTDOWN_FLAG;
        onLoadMore?.();
      }
    }
  }, [virtualizer.getVirtualItems()]);

  const renderInnerItem = (item: T, index: number) => {
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
      <li key={key} className={itemClass}>
        {renderItem(item, index)}
      </li>
    );
  };

  return (
    <div ref={listRef}>
      {isEmpty(chunkedData) ? (
        loadingIndicator
      ) : (
        <div
          style={{
            height: virtualizer.getTotalSize() + LOADING_HEIGHT,
            width: '100%',
            position: 'relative',
          }}
        >
          {virtualizer.getVirtualItems().map((virtualItem) => {
            return (
              <ul
                className={rowClass}
                key={virtualItem.key}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: virtualItem.size,
                  transform: `translateY(${virtualItem.start}px)`,
                }}
              >
                {chunkedData[virtualItem.index]?.map((_, idx2) => {
                  const index = virtualItem.index * columnCount + idx2;
                  return renderInnerItem(data[index], index);
                })}
              </ul>
            );
          })}
          <div css={{ position: 'absolute', bottom: 0, width: '100%' }}>
            {loadingIndicator}
          </div>
        </div>
      )}
    </div>
  );
};

export default InfiniteScrolling;
