import clsx from 'clsx';
import { FC } from 'react';

import styles from './Product.module.scss';

type Props = {
  name: string;
  image: string;
};

const Product: FC<Props> = (props) => {
  const { name, image } = props;
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
              </a>
            </strong>
          </div>
        </div>

        <div className="product-options">
          <div className="option-bullets color">
            <span
              className={clsx(
                'option-bullet active',
                styles['product_option--white']
              )}
              data-product-id={4209}
            />
            <span
              className={clsx('option-bullet', styles['product_option--black'])}
              data-product-id={4203}
            />
            <span
              className={clsx(
                'option-bullet',
                styles['product_option--silver']
              )}
              data-product-id={4206}
            />
            <span
              className={clsx('option-bullet', styles['product_option--wood'])}
              data-product-id={7649}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
