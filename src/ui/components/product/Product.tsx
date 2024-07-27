import clsx from 'clsx';
import { FC, memo, useState } from 'react';

import styles from './Product.module.scss';

type Props = {
  id?: string;
  name: string;
  image: string;
};

const BULLET_COLORS = [
  {
    id: 4209,
    value: 'white',
  },
  {
    id: 4203,
    value: 'black',
  },
  {
    id: 4206,
    value: 'silver',
  },
  {
    id: 7649,
    value: 'wood',
  },
] as const;

type BulletColor = (typeof BULLET_COLORS)[number]['value'];

const Product: FC<Props> = (props) => {
  const { name, image, id } = props;
  const [activeColor, setActiveColor] = useState<BulletColor>('white');

  return (
    <div
      data-product-id={4522}
      className="cdz-product-top amasty-label-for-4522  product-configurable"
    >
      <div className="product-item-info">
        <div className="product-wrapper">
          <div
            className="product-option-item active"
            data-color={5659}
            data-product-id={4209}
          >
            <div className="data-variant-image">
              <a className="product photo product-item-photo">
                <img src={image} data-thumbnail="" loading="lazy" />
              </a>
            </div>
          </div>
        </div>
        <div className="product-option-item active" data-product-id={4209}>
          <div className="product details product-item-details">
            <div
              className="price-box price-final_price"
              data-role="priceBox"
              data-product-id={4209}
              data-price-box="product-id-4209"
            >
              <span className="special-price">
                <span
                  id="product-price-4209"
                  data-price-amount={1522}
                  data-price-type="finalPrice"
                  className="price-wrapper "
                >
                  $1,522.00
                </span>
              </span>
              <span className="old-price">
                <span
                  id="old-price-4209"
                  data-price-amount={2029}
                  data-price-type="oldPrice"
                  className="price-wrapper "
                >
                  $2,029.00
                </span>
              </span>
            </div>
            <strong className="product name product-item-name">
              <a className="product-item-link">
                <span>Ariel {name}</span>
                {/* {image} */}
              </a>
            </strong>
          </div>
        </div>

        <div className="product-options">
          <div className="option-bullets color">
            {BULLET_COLORS.map((el) => (
              <span
                key={el.id}
                className={clsx(
                  'option-bullet',
                  styles[`product_option--${el.value}`],
                  activeColor === el.value && 'active'
                )}
                data-product-id={el.id}
                onClick={() => setActiveColor(el.value)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Product);
