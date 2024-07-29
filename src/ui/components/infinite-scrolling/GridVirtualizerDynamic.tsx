import * as React from 'react';

import { useWindowVirtualizer } from '@tanstack/react-virtual';

function GridVirtualizerDynamic({}: {}) {
  const listRef = React.useRef<HTMLDivElement | null>(null);

  const virtualizer = useWindowVirtualizer({
    count: 20,
    estimateSize: () => 400,
    overscan: 5,
  });

  React.useEffect(() => {
    const [lastItem] = [...virtualizer.getVirtualItems()].reverse();

    if (!lastItem) {
      return;
    }
  }, [virtualizer.getVirtualItems()]);

  return (
    <div ref={listRef} className="List">
      <div
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {virtualizer.getVirtualItems().map((item) => (
          <div
            key={item.key}
            className={item.index % 2 ? 'ListItemOdd' : 'ListItemEven'}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${item.size}px`,
              transform: `translateY(${
                item.start - virtualizer.options.scrollMargin
              }px)`,
            }}
          >
            Row {item.index}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GridVirtualizerDynamic;
