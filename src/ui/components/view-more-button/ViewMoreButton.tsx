import { FC } from 'react';

type Props = {
  current: number;
  total: number;
  disabled?: boolean;
  onClick?: () => void;
};

const ViewMoreButton: FC<Props> = (props) => {
  const { current, total, disabled, onClick } = props;

  return (
    <div className="load-more-btn" id="ias_loadMoreBtn_1721982346582">
      <span className="current-showing">
        Showing {current} of {total}
      </span>
      <button
        className="view-more-button"
        onClick={onClick}
        disabled={disabled}
      >
        View more products
      </button>
    </div>
  );
};

export default ViewMoreButton;
