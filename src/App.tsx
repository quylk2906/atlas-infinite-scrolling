function App() {
  return (
    <div className="page-wrapper">
      <header className="page-header">
        <div className="wrap-header">
          <div className="header content">
            <div className="header-main">
              <div className="header-left">
                <a
                  className="logo"
                  href="https://www.arielbath.com/"
                  title="Ariel"
                  aria-label="store logo"
                >
                  <img
                    src="/ariel-logo_3x_1_1.png"
                    title="Ariel"
                    alt="Ariel"
                    width={129}
                    height={30}
                  />
                </a>
              </div>
              <div className="header-middle">
                <section
                  className="amsearch-wrapper-block"
                  data-amsearch-wrapper="block"
                  data-bind=""
                >
                  <div className="amsearch-form-block" data-bind="">
                    <section className="amsearch-input-wrapper" data-bind=" ">
                      <input
                        type="text"
                        name="q"
                        placeholder="Search products"
                        className="amsearch-input"
                        maxLength={128}
                        role="combobox"
                        aria-haspopup="false"
                        aria-autocomplete="both"
                        autoComplete="off"
                        aria-expanded="false"
                        data-amsearch-block="input"
                        data-bind=""
                      />
                    </section>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className="sections nav-sections">
          <div
            className="section-items nav-sections-items mage-tabs-disabled"
            role="tablist"
          >
            <div
              className="section-item-title nav-sections-item-title active"
              data-role="collapsible"
              role="tab"
              data-collapsible="true"
              aria-controls="store.menu"
              aria-selected="false"
              aria-expanded="true"
              tabIndex={0}
            >
              <a
                className="nav-sections-item-switch"
                data-toggle="switch"
                href="https://www.arielbath.com/vanities#store.menu"
              >
                Menu{' '}
              </a>
            </div>
            <div
              className="section-item-content nav-sections-item-content"
              id="store.menu"
              data-role="content"
              role="tabpanel"
              aria-hidden="false"
            >
              <div className="page-main">
                <nav
                  className="rootmenu main"
                  data-action="navigation"
                  style={{ opacity: 1 }}
                >
                  {/*Header Mobile*/}
                  <div className="box-account-mobile">
                    <div className="logo-nav">
                      <img
                        src="./Bathroom Vanities & Vanity Tops - Collection_files/ariel-logo_3x_1_1(1).png"
                        alt="Logo ArielBath"
                      />
                    </div>
                    <div className="account-info">
                      <p>Hi!</p>
                      <ul className="not-login">
                        <li>
                          <a href="https://www.arielbath.com/customer/account/login/">
                            Login
                          </a>
                        </li>{' '}
                        /{' '}
                        <li>
                          <a href="https://www.arielbath.com/customer/account/create/">
                            Register
                          </a>
                        </li>
                      </ul>
                    </div>
                    <span className="close-menu-mobile" />
                  </div>
                  {/*End Header Mobile */}
                  <ul id="rw-menutop" className="mobile-sub rootmenu-list">
                    <li className="nav-1 category-item main nav-has-fullwidth">
                      <span className="rootmenu-click">
                        <i className="rootmenu-arrow" />
                      </span>
                      <a
                        className="navigation-link active"
                        href="https://www.arielbath.com/vanities"
                      >
                        Vanities{' '}
                      </a>
                      <div className="megamenu fullmenu clearfix categoriesmenu">
                        <div className=""></div>
                      </div>
                    </li>
                    <li className="nav-2 category-item main">
                      <a
                        className="navigation-link "
                        href="https://www.arielbath.com/bathroom-countertops"
                      >
                        Countertops{' '}
                      </a>
                    </li>
                    <li className="nav-3 category-item main">
                      <span className="rootmenu-click">
                        <i className="rootmenu-arrow" />
                      </span>
                      <a
                        className="navigation-link "
                        href="https://www.arielbath.com/sinks"
                      >
                        Sinks{' '}
                      </a>
                      <ul className="rootmenu-submenu ">
                        <li className="nav-3-1 category-item">
                          <a
                            className="navigation-link"
                            href="https://www.arielbath.com/sinks/undermount-sinks"
                          >
                            Undermount Sinks
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-4 category-item main">
                      <span className="rootmenu-click">
                        <i className="rootmenu-arrow" />
                      </span>
                      <a
                        className="navigation-link "
                        href="https://www.arielbath.com/bathtubs"
                      >
                        Bathtubs{' '}
                      </a>
                      <ul className="rootmenu-submenu ">
                        <li className="nav-4-1 category-item">
                          <a
                            className="navigation-link"
                            href="https://www.arielbath.com/bathtubs/whirlpool-bathtubs"
                          >
                            Whirlpool Bathtubs
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-5 category-item main">
                      <a
                        className="navigation-link "
                        href="https://www.arielbath.com/mirrors"
                      >
                        Mirrors{' '}
                      </a>
                    </li>
                    <li className="nav-6 category-item main">
                      <span className="rootmenu-click">
                        <i className="rootmenu-arrow" />
                      </span>
                      <a
                        className="navigation-link "
                        href="https://www.arielbath.com/shop-by-collection"
                      >
                        Shop By Collection{' '}
                      </a>
                    </li>
                    <li className="nav-7 category-item main">
                      <span className="rootmenu-click">
                        <i className="rootmenu-arrow" />
                      </span>
                      <a
                        className="navigation-link "
                        href="https://www.arielbath.com/accessories"
                      >
                        Accessories{' '}
                      </a>
                      <ul className="rootmenu-submenu ">
                        <li className="nav-7-1 category-item">
                          <a
                            className="navigation-link"
                            href="https://www.arielbath.com/accessories/sidesplash"
                          >
                            Sidesplash
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-8 category-item main">
                      <a
                        className="navigation-link "
                        href="https://www.arielbath.com/new-in"
                      >
                        New In{' '}
                      </a>
                    </li>
                    <li className="nav-9 category-item main nav-has-fullwidth">
                      <span className="rootmenu-click">
                        <i className="rootmenu-arrow" />
                      </span>
                      <a
                        className="navigation-link "
                        href="https://www.arielbath.com/sales"
                      >
                        Sale{' '}
                      </a>
                    </li>
                    <li className="nav-10 category-item main">
                      <a
                        className="navigation-link "
                        href="https://www.arielbath.com/best-sellers"
                      >
                        BEST SELLERS{' '}
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="wrap_undermenu">
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n                #html-body [data-pb-style=V7O502F] {\n                    justify-content: flex-start;\n                    display: flex;\n                    flex-direction: column;\n                    background-color: #4e4f3e;\n                    background-position: left top;\n                    background-size: cover;\n                    background-repeat: no-repeat;\n                    background-attachment: scroll;\n                    margin-bottom: 24px\n                }\n            ',
          }}
        />
        <div
          className="navigation_promo"
          data-content-type="row"
          data-appearance="full-width"
          data-enable-parallax={0}
          data-parallax-speed="0.5"
          data-background-images="{}"
          data-background-type="image"
          data-video-loop="true"
          data-video-play-only-visible="true"
          data-video-lazy-load="true"
          data-video-fallback-src=""
          data-element="main"
          data-pb-style="V7O502F"
        >
          <div className="row-full-width-inner" data-element="inner">
            <div
              data-content-type="text"
              data-appearance="default"
              data-element="main"
              className=""
              style={{}}
              aria-hidden="true"
              tabIndex={0}
            >
              <p style={{ textAlign: 'center' }}>
                <span style={{ color: '#ffffff' }}>
                  Extra 20% Off Select Vanity
                </span>
                <br />
                <span id="IBIG8YK" style={{ color: '#ffffff' }}>
                  Use Code: SPECIAL20
                </span>
              </p>
            </div>
            <div
              data-content-type="text"
              data-appearance="default"
              data-element="main"
              className="slick-current slick-active"
              style={{}}
              aria-hidden="false"
              tabIndex={-1}
            >
              <p id="JE08AG0" style={{ textAlign: 'center' }}>
                <span style={{ color: '#ffffff' }}>
                  Celebrate 19 years of Ariel Bath&nbsp;
                  <br />
                  <span style={{ color: '#ffffff' }}>Up to 50% Off </span>
                  <span style={{ textDecoration: 'underline' }}>
                    <span
                      style={{ color: '#ffffff', textDecoration: 'underline' }}
                    >
                      <a
                        style={{
                          color: '#ffffff',
                          textDecoration: 'underline',
                        }}
                        tabIndex={-1}
                        href="https://www.arielbath.com/sales/ariel-birthday-special-offers"
                      >
                        <strong>Shop Now</strong>
                      </a>
                    </span>
                  </span>
                </span>
              </p>
            </div>
            <div
              data-content-type="text"
              data-appearance="default"
              data-element="main"
              className=""
              style={{}}
              aria-hidden="true"
              tabIndex={-1}
            >
              <p style={{ textAlign: 'center' }}>
                <span style={{ color: '#ffffff' }}>FREE SHIPPING ALWAYS</span>
                <br />
                <span style={{ color: '#ffffff' }}>
                  Customer Service: (800) 827-5950
                </span>
              </p>
            </div>
          </div>
        </div>
        <div
          data-content-type="html"
          data-appearance="default"
          data-element="main"
          data-decoded="true"
        >
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n                    .navigation_promo {\n                        font-family: \'Gotham Narrow\', \'Montserrat\', \'Helvetica Neue\', Helvetica, Arial, sans-serif;\n                        font-weight: 325;\n                        justify-content: center !important;\n                        min-height: 60px;\n                    }\n\n                    .navigation_promo strong,\n                    .navigation_promo b {\n                        font-weight: 350;\n                    }\n\n                    .navigation_promo a {\n                        color: #333333;\n                    }\n\n                    .navigation_promo [data-content-type="text"] {\n                        box-sizing: border-box;\n                        text-align: center;\n                        font-size: 14px;\n                        line-height: 20px;\n                        margin: 0;\n                        padding: 0 20px;\n                        width: 100%;\n                    }\n\n                    .navigation_promo p {\n                        margin-bottom: 0;\n                        font-size: 14px;\n                    }\n\n                    @media only screen and (max-width: 989px) {\n                        .wrap_undermenu {\n                            order: -1;\n                        }\n\n                        .navigation_promo {\n                            margin-bottom: 0 !important;\n                        }\n\n                        .navigation_promo .row-full-width-inner:not(.slick-initialized) [data-content-type="text"]~[data-content-type="text"] {\n                            display: none !important;\n                        }\n                    }\n\n                    @media only screen and (min-width: 990px) {\n                        .navigation_promo {\n                            min-height: 68px;\n                        }\n\n                        .navigation_promo .row-full-width-inner {\n                            display: flex;\n                        }\n\n                        .navigation_promo .row-full-width-inner [data-content-type="text"]:not(:last-child) {\n                            position: relative;\n\n                            &:after {\n                                background-color: #dddddd;\n                                content: \'\';\n                                display: block;\n                                height: 32px;\n                                position: absolute;\n                                right: 0;\n                                top: 50%;\n                                transform: translateY(-50%);\n                                width: 1px;\n                            }\n                        }\n                    }\n                ',
            }}
          />
        </div>
      </div>
      <div className="breadcrumbs">
        <ul className="items">
          <li className="item home">
            <a href="https://www.arielbath.com/" title="Go to Home Page">
              Home{' '}
            </a>
          </li>
          <li className="item category19">
            <strong>Vanities</strong>
          </li>
        </ul>
      </div>
      <div className="breadcrumbs mobile">
        <ul className="items">
          <li className="item home ">
            <a href="https://www.arielbath.com/" title="Go to Home Page">
              Home{' '}
            </a>
          </li>
          <li className="item category19 ">
            <strong>Vanities</strong>
          </li>
        </ul>
      </div>
      <main id="maincontent" className="page-main">
        <div className="page-title-wrapper">
          <h1
            className="page-title"
            id="page-title-heading"
            aria-labelledby="page-title-heading toolbar-amount"
          >
            <span className="base" data-ui-id="page-title-wrapper">
              Vanities
            </span>
          </h1>
          <span className="toolbar-amount_sidebar_title">332 Items</span>
        </div>
        <div className="page messages">
          <div data-placeholder="messages" />
          <div data-bind="scope: 'messages'" id="message-panel">
            {/* ko if: cookieMessages && cookieMessages.length > 0 */}
            {/* /ko */}
            {/* ko if: messages().messages && messages().messages.length > 0 */}
            {/* /ko */}
          </div>
        </div>
        <div className="category-view"></div>
        <div className="columns">
          <div className="column main">
            <div
              className="block filter active-filter"
              id="layered-filter-block"
            >
              <div
                className="block-title filter-title"
                style={{ display: 'none' }}
                data-count={0}
              >
                <span className="title">Filter by:</span>
                <span className="close-filter icon-ab-close" />
              </div>
            </div>
            <div id="amasty-shopby-product-list">
              <div className="toolbar toolbar-products">
                <div className="current-showing no-display">
                  Showing 54 of 332
                </div>
                <div className="filter-toolbar">
                  <span className="toggle-filter">Show Filter</span>
                  <span className="toggle-filter show-mobile">Filter</span>
                </div>
                <div
                  className="filter-result"
                  style={{ display: 'none' }}
                ></div>
                <div className="toolbar-amount" id="toolbar-amount">
                  <div className="load-products">
                    <span className="btn">Load More</span>
                  </div>
                  <span className="toolbar-number current-number">18</span>
                  <span className="divide">/</span>
                  <span className="toolbar-number">332 Items</span>
                </div>
                <div className="modes">
                  <strong className="modes-label" id="modes-label">
                    View as
                  </strong>
                  <strong
                    title="Grid"
                    className="modes-mode active mode-grid"
                    data-value="grid"
                  >
                    <span>Grid</span>
                  </strong>
                  <a
                    className="modes-mode mode-list"
                    title="List"
                    href="https://www.arielbath.com/vanities#"
                    data-role="mode-switcher"
                    data-value="list"
                    id="mode-list"
                    aria-labelledby="modes-label mode-list"
                  >
                    <span>List</span>
                  </a>
                </div>
                <div className="toolbar-sorter sorter dropdown_add_sort">
                  <label className="sorter-label" htmlFor="sorter">
                    Sort
                  </label>
                  <select
                    id="sorter"
                    data-role="sorter"
                    className="sorter-options"
                    style={{ width: '132.825px' }}
                  >
                    <option value="name">Product Name </option>
                    <option value="bestsellers" selected>
                      Bestsellers{' '}
                    </option>
                    <option value="new">Newest </option>
                    <option value="most_viewed">Popularity </option>
                    <option value="price_desc">Price: High To Low </option>
                    <option value="price_asc">Price: Low To High </option>
                  </select>
                </div>
              </div>
              <div className="products wrapper grid products-grid">
                <div className="products list items product-items">
                  <li className="item product product-item">
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
                              <a
                                href="javascript:void(0)"
                                className="action towishlist"
                                title="Add to Wish List"
                                aria-label="Save"
                                role="button"
                                data-post='{"action":"https:\/\/www.arielbath.com\/wishlist\/index\/add\/","data":{"product":4209,"uenc":"aHR0cHM6Ly93d3cuYXJpZWxiYXRoLmNvbS92YW5pdGllcw,,"}}'
                                data-action="add-to-wishlist"
                              >
                                <span>Add to Wish List</span>
                              </a>
                              <a
                                className="product photo product-item-photo"
                                onclick='window.dataLayer.push({ecommerce: null});
  window.dataLayer.push({"event":"select_item","ecommerce":{"action":{"items":[{"item_name":"Ariel hepburn 49 in. single rectangle sink vanity with countertop","item_id":"T049S-RVO","price":"1434.00","index":2,"item_category":"Shop By Collection","item_category_2":"Vanity Collections","item_category_3":"Hepburn","currency":"USD","item_list_name":"Vanities","item_list_id":"19","item_stock_status":"Out of stock","item_sale_product":"No","item_reviews_count":"0","item_reviews_score":"0"}]}}});'
                                href="https://www.arielbath.com/ariel-hepburn-49-in-single-rectangle-sink-vanity-with-carrara-white-marble-white-quartz-countertop-t049s-rvo/T049SCW2RVOWHT"
                              >
                                <img
                                  src="/images/ariel (1).jpg"
                                  data-thumbnail=""
                                  loading="lazy"
                                  style={{}}
                                />
                                <img
                                  src="./Bathroom Vanities & Vanity Tops - Collection_files/t049scw2rvowht-blk_lifestyle.jpg"
                                  data-lifestyle=""
                                  loading="lazy"
                                  style={{
                                    display: 'none',
                                    opacity: '0.00700198',
                                  }}
                                />
                              </a>
                            </div>
                          </div>
                          <div
                            className="product-option-item"
                            data-color={5658}
                            data-product-id={4203}
                          >
                            <div className="data-variant-image">
                              <a
                                href="javascript:void(0)"
                                className="action towishlist"
                                title="Add to Wish List"
                                aria-label="Save"
                                role="button"
                                data-post='{"action":"https:\/\/www.arielbath.com\/wishlist\/index\/add\/","data":{"product":4203,"uenc":"aHR0cHM6Ly93d3cuYXJpZWxiYXRoLmNvbS92YW5pdGllcw,,"}}'
                                data-action="add-to-wishlist"
                              >
                                <span>Add to Wish List</span>
                              </a>
                              <a
                                className="product photo product-item-photo"
                                onclick='window.dataLayer.push({ecommerce: null});
  window.dataLayer.push({"event":"select_item","ecommerce":{"action":{"items":[{"item_name":"Ariel hepburn 49 in. single rectangle sink vanity with countertop","item_id":"T049S-RVO","price":"1434.00","index":3,"item_category":"Shop By Collection","item_category_2":"Vanity Collections","item_category_3":"Hepburn","currency":"USD","item_list_name":"Vanities","item_list_id":"19","item_stock_status":"Out of stock","item_sale_product":"No","item_reviews_count":"0","item_reviews_score":"0"}]}}});'
                                href="https://www.arielbath.com/ariel-hepburn-49-in-single-rectangle-sink-vanity-with-carrara-white-marble-white-quartz-countertop-t049s-rvo/T049SCW2RVOGRY"
                              >
                                <img
                                  src="./Bathroom Vanities & Vanity Tops - Collection_files/T049SCW2RVOGRY_productimage.jpg"
                                  data-thumbnail=""
                                  loading="lazy"
                                />
                                <img
                                  src="./Bathroom Vanities & Vanity Tops - Collection_files/t049scw2rvogry-blk_lifestyle.jpg"
                                  data-lifestyle=""
                                  loading="lazy"
                                />
                              </a>
                            </div>
                          </div>
                          <div
                            className="product-option-item"
                            data-color={5682}
                            data-product-id={4206}
                          >
                            <div className="data-variant-image">
                              <a
                                href="javascript:void(0)"
                                className="action towishlist"
                                title="Add to Wish List"
                                aria-label="Save"
                                role="button"
                                data-post='{"action":"https:\/\/www.arielbath.com\/wishlist\/index\/add\/","data":{"product":4206,"uenc":"aHR0cHM6Ly93d3cuYXJpZWxiYXRoLmNvbS92YW5pdGllcw,,"}}'
                                data-action="add-to-wishlist"
                              >
                                <span>Add to Wish List</span>
                              </a>
                              <a
                                className="product photo product-item-photo"
                                onclick='window.dataLayer.push({ecommerce: null});
  window.dataLayer.push({"event":"select_item","ecommerce":{"action":{"items":[{"item_name":"Ariel hepburn 49 in. single rectangle sink vanity with countertop","item_id":"T049S-RVO","price":"1434.00","index":4,"item_category":"Shop By Collection","item_category_2":"Vanity Collections","item_category_3":"Hepburn","currency":"USD","item_list_name":"Vanities","item_list_id":"19","item_stock_status":"Out of stock","item_sale_product":"No","item_reviews_count":"0","item_reviews_score":"0"}]}}});'
                                href="https://www.arielbath.com/ariel-hepburn-49-in-single-rectangle-sink-vanity-with-carrara-white-marble-white-quartz-countertop-t049s-rvo/T049SCW2RVOMNB"
                              >
                                <img
                                  src="./Bathroom Vanities & Vanity Tops - Collection_files/T049SCW2RVOMNB_productimage.jpg"
                                  data-thumbnail=""
                                  loading="lazy"
                                />
                                <img
                                  src="./Bathroom Vanities & Vanity Tops - Collection_files/t049scw2rvomnb-blk_lifestyle.jpg"
                                  data-lifestyle=""
                                  loading="lazy"
                                />
                              </a>
                            </div>
                          </div>
                          <div
                            className="product-option-item"
                            data-color={6024}
                            data-product-id={7649}
                          >
                            <div className="data-variant-image">
                              <a
                                href="javascript:void(0)"
                                className="action towishlist"
                                title="Add to Wish List"
                                aria-label="Save"
                                role="button"
                                data-post='{"action":"https:\/\/www.arielbath.com\/wishlist\/index\/add\/","data":{"product":7649,"uenc":"aHR0cHM6Ly93d3cuYXJpZWxiYXRoLmNvbS92YW5pdGllcw,,"}}'
                                data-action="add-to-wishlist"
                              >
                                <span>Add to Wish List</span>
                              </a>
                              <a
                                className="product photo product-item-photo"
                                onclick='window.dataLayer.push({ecommerce: null});
  window.dataLayer.push({"event":"select_item","ecommerce":{"action":{"items":[{"item_name":"Ariel hepburn 49 in. single rectangle sink vanity with countertop","item_id":"T049S-RVO","price":"1434.00","index":5,"item_category":"Shop By Collection","item_category_2":"Vanity Collections","item_category_3":"Hepburn","currency":"USD","item_list_name":"Vanities","item_list_id":"19","item_stock_status":"Out of stock","item_sale_product":"No","item_reviews_count":"0","item_reviews_score":"0"}]}}});'
                                href="https://www.arielbath.com/ariel-hepburn-49-in-single-rectangle-sink-vanity-with-carrara-white-marble-white-quartz-countertop-t049s-rvo/T049SCWRVOWOA"
                              >
                                <img
                                  src="./Bathroom Vanities & Vanity Tops - Collection_files/t049scwrvowoa_productimage.jpg"
                                  data-thumbnail=""
                                  loading="lazy"
                                />
                                <img
                                  src="./Bathroom Vanities & Vanity Tops - Collection_files/t049scwrvowoa_productimage.jpg"
                                  data-lifestyle=""
                                  loading="lazy"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-option-item active"
                          data-product-id={4209}
                        >
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
                            </div>{' '}
                            <strong className="product name product-item-name">
                              <a
                                className="product-item-link"
                                onclick='window.dataLayer.push({ecommerce: null});
  window.dataLayer.push({"event":"select_item","ecommerce":{"action":{"items":[{"item_name":"Ariel hepburn 49 in. single rectangle sink vanity with countertop","item_id":"T049S-RVO","price":"1434.00","index":0,"item_category":"Shop By Collection","item_category_2":"Vanity Collections","item_category_3":"Hepburn","currency":"USD","item_list_name":"Vanities","item_list_id":"19","item_stock_status":"Out of stock","item_sale_product":"No","item_reviews_count":"0","item_reviews_score":"0"}]}}});'
                                href="https://www.arielbath.com/ariel-hepburn-49-in-single-rectangle-sink-vanity-with-carrara-white-marble-white-quartz-countertop-t049s-rvo/T049SCW2RVOWHT"
                              >
                                <span>
                                  Ariel hepburn 49 in. rectangle sink vanity
                                  with carrara white countertop in white
                                </span>
                              </a>
                            </strong>
                          </div>
                        </div>
                        <div
                          className="product-option-item"
                          data-product-id={4203}
                        >
                          <div className="product details product-item-details">
                            <div
                              className="price-box price-final_price"
                              data-role="priceBox"
                              data-product-id={4203}
                              data-price-box="product-id-4203"
                            >
                              <span className="special-price">
                                <span
                                  id="product-price-4203"
                                  data-price-amount={1522}
                                  data-price-type="finalPrice"
                                  className="price-wrapper "
                                >
                                  $1,522.00
                                </span>
                              </span>
                              <span className="old-price">
                                <span
                                  id="old-price-4203"
                                  data-price-amount={2029}
                                  data-price-type="oldPrice"
                                  className="price-wrapper "
                                >
                                  $2,029.00
                                </span>
                              </span>
                            </div>{' '}
                            <strong className="product name product-item-name">
                              <a
                                className="product-item-link"
                                onclick='window.dataLayer.push({ecommerce: null});
  window.dataLayer.push({"event":"select_item","ecommerce":{"action":{"items":[{"item_name":"Ariel hepburn 49 in. single rectangle sink vanity with countertop","item_id":"T049S-RVO","price":"1434.00","index":1,"item_category":"Shop By Collection","item_category_2":"Vanity Collections","item_category_3":"Hepburn","currency":"USD","item_list_name":"Vanities","item_list_id":"19","item_stock_status":"Out of stock","item_sale_product":"No","item_reviews_count":"0","item_reviews_score":"0"}]}}});'
                                href="https://www.arielbath.com/ariel-hepburn-49-in-single-rectangle-sink-vanity-with-carrara-white-marble-white-quartz-countertop-t049s-rvo/T049SCW2RVOGRY"
                              >
                                <span>
                                  Ariel hepburn 49 in. rectangle sink vanity
                                  with carrara white countertop in grey
                                </span>
                              </a>
                            </strong>
                          </div>
                        </div>
                        <div
                          className="product-option-item"
                          data-product-id={4206}
                        >
                          <div className="product details product-item-details">
                            <div
                              className="price-box price-final_price"
                              data-role="priceBox"
                              data-product-id={4206}
                              data-price-box="product-id-4206"
                            >
                              <span className="special-price">
                                <span
                                  id="product-price-4206"
                                  data-price-amount={1522}
                                  data-price-type="finalPrice"
                                  className="price-wrapper "
                                >
                                  $1,522.00
                                </span>
                              </span>
                              <span className="old-price">
                                <span
                                  id="old-price-4206"
                                  data-price-amount={2029}
                                  data-price-type="oldPrice"
                                  className="price-wrapper "
                                >
                                  $2,029.00
                                </span>
                              </span>
                            </div>{' '}
                            <strong className="product name product-item-name">
                              <a
                                className="product-item-link"
                                onclick='window.dataLayer.push({ecommerce: null});
  window.dataLayer.push({"event":"select_item","ecommerce":{"action":{"items":[{"item_name":"Ariel hepburn 49 in. single rectangle sink vanity with countertop","item_id":"T049S-RVO","price":"1434.00","index":2,"item_category":"Shop By Collection","item_category_2":"Vanity Collections","item_category_3":"Hepburn","currency":"USD","item_list_name":"Vanities","item_list_id":"19","item_stock_status":"Out of stock","item_sale_product":"No","item_reviews_count":"0","item_reviews_score":"0"}]}}});'
                                href="https://www.arielbath.com/ariel-hepburn-49-in-single-rectangle-sink-vanity-with-carrara-white-marble-white-quartz-countertop-t049s-rvo/T049SCW2RVOMNB"
                              >
                                <span>
                                  Ariel hepburn 49 in. rectangle sink vanity
                                  with 0.75 in. carrara white countertop in
                                  midnight blue
                                </span>
                              </a>
                            </strong>
                          </div>
                        </div>
                        <div
                          className="product-option-item"
                          data-product-id={7649}
                        >
                          <div className="product details product-item-details">
                            <div
                              className="price-box price-final_price"
                              data-role="priceBox"
                              data-product-id={7649}
                              data-price-box="product-id-7649"
                            >
                              <span
                                id="product-price-7649"
                                data-price-amount={2021}
                                data-price-type="finalPrice"
                                className="price-wrapper "
                              >
                                $2,021.00
                              </span>
                            </div>{' '}
                            <strong className="product name product-item-name">
                              <a
                                className="product-item-link"
                                onclick='window.dataLayer.push({ecommerce: null});
  window.dataLayer.push({"event":"select_item","ecommerce":{"action":{"items":[{"item_name":"Ariel hepburn 49 in. single rectangle sink vanity with countertop","item_id":"T049S-RVO","price":"1434.00","index":3,"item_category":"Shop By Collection","item_category_2":"Vanity Collections","item_category_3":"Hepburn","currency":"USD","item_list_name":"Vanities","item_list_id":"19","item_stock_status":"Out of stock","item_sale_product":"No","item_reviews_count":"0","item_reviews_score":"0"}]}}});'
                                href="https://www.arielbath.com/ariel-hepburn-49-in-single-rectangle-sink-vanity-with-carrara-white-marble-white-quartz-countertop-t049s-rvo/T049SCWRVOWOA"
                              >
                                <span>
                                  Ariel hepburn 49 inch single rectangle sink
                                  bathroom vanity with italian carrara marble
                                  countertop 1.5 inch edge in white oak
                                </span>
                              </a>
                            </strong>
                          </div>
                        </div>
                        <div className="product-options">
                          <div className="option-bullets color">
                            <span
                              className="option-bullet
                                                                           active"
                              data-product-id={4209}
                              style={{ backgroundColor: '#f5f5f5' }}
                            />
                            <span
                              className="option-bullet
                                                                          "
                              data-product-id={4203}
                              style={{ backgroundColor: '#cccccc' }}
                            />
                            <span
                              className="option-bullet
                                                                          "
                              data-product-id={4206}
                              style={{ backgroundColor: '#11074f' }}
                            />
                            <span
                              className="option-bullet
                                                                          "
                              data-product-id={7649}
                              style={{
                                backgroundImage:
                                  'url("https://www.arielbath.com/media/attribute/swatch/w/h/whiteoak_2.png")',
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* 
                          <div class="ias-spinner"
                              style="text-align: center; font-size: 16px; color: rgb(51, 51, 51); display: block;"
                              id="ias_spinner_1722005823748"><img style="display:inline"
                                  src="https://www.arielbath.com/media//sparsh/ajax_infinite_scroll/default/Spinner-1s-50px.gif">
                              <p></p>
                              <p><em>Loading - please wait...</em></p>
                              <p></p>
                          </div> */}
                  <div
                    className="load-more-btn"
                    id="ias_loadMoreBtn_1721982346582"
                    style={{}}
                  >
                    <span className="current-showing">Showing 54 of 332</span>
                    <button className="view-more-button">
                      View more products
                    </button>
                  </div>
                </div>
                <div
                  id="amasty-shopby-overlay"
                  className="amshopby-overlay-block"
                >
                  <span className="amshopby-loader" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="category-seo-content">
          <div className="category-related-block">
            <h3>Categories Related</h3>
            <ul className="related-category-list">
              <li className="related-category">
                <a
                  className="related-category-link"
                  href="https://www.arielbath.com/vanities/double-vanities"
                  title="Double Bathroom Vanity"
                >
                  Double Bathroom Vanity
                </a>
              </li>
              <li className="related-category">
                <a
                  className="related-category-link"
                  href="https://www.arielbath.com/vanities/vanity-base-cabinet"
                  title="Vanity Base Cabinet"
                >
                  Vanity Base Cabinet
                </a>
              </li>
              <li className="related-category">
                <a
                  className="related-category-link"
                  href="https://www.arielbath.com/vanities/single-vanities"
                  title="Single Bathroom Vanity"
                >
                  Single Bathroom Vanity
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <footer className="page-footer">
        <div className="footer-content">
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n                    #html-body [data-pb-style=ET1TKHU],\n                    #html-body [data-pb-style=I6TNGU3] {\n                        background-position: left top;\n                        background-size: cover;\n                        background-repeat: no-repeat;\n                        background-attachment: scroll\n                    }\n\n                    #html-body [data-pb-style=I6TNGU3] {\n                        justify-content: flex-start;\n                        display: flex;\n                        flex-direction: column\n                    }\n\n                    #html-body [data-pb-style=ET1TKHU] {\n                        align-self: stretch\n                    }\n\n                    #html-body [data-pb-style=GLXQCCT] {\n                        display: flex;\n                        width: 100%\n                    }\n\n                    #html-body [data-pb-style=BVLM1PD],\n                    #html-body [data-pb-style=GWCHFF6],\n                    #html-body [data-pb-style=KCYY3AK],\n                    #html-body [data-pb-style=TDHM55R] {\n                        width: 25%;\n                        align-self: stretch\n                    }\n\n                    #html-body [data-pb-style=BVLM1PD],\n                    #html-body [data-pb-style=GWCHFF6],\n                    #html-body [data-pb-style=KCYY3AK],\n                    #html-body [data-pb-style=QOASQET],\n                    #html-body [data-pb-style=TDHM55R] {\n                        justify-content: flex-start;\n                        display: flex;\n                        flex-direction: column;\n                        background-position: left top;\n                        background-size: cover;\n                        background-repeat: no-repeat;\n                        background-attachment: scroll\n                    }\n                ',
            }}
          />
          <div
            className="footer-links"
            data-content-type="row"
            data-appearance="full-width"
            data-enable-parallax={0}
            data-parallax-speed="0.5"
            data-background-images="{}"
            data-background-type="image"
            data-video-loop="true"
            data-video-play-only-visible="true"
            data-video-lazy-load="true"
            data-video-fallback-src=""
            data-element="main"
            data-pb-style="I6TNGU3"
          >
            <div className="row-full-width-inner" data-element="inner">
              <div
                className="pagebuilder-column-group"
                data-background-images="{}"
                data-content-type="column-group"
                data-appearance="default"
                data-grid-size={12}
                data-element="main"
                data-pb-style="ET1TKHU"
              >
                <div
                  className="pagebuilder-column-line"
                  data-content-type="column-line"
                  data-element="main"
                  data-pb-style="GLXQCCT"
                >
                  <div
                    className="pagebuilder-column"
                    data-content-type="column"
                    data-appearance="full-height"
                    data-background-images="{}"
                    data-element="main"
                    data-pb-style="TDHM55R"
                  >
                    <h4
                      data-content-type="heading"
                      data-appearance="default"
                      data-element="main"
                    >
                      Company Info
                    </h4>
                    <div
                      data-content-type="html"
                      data-appearance="default"
                      data-element="main"
                      data-decoded="true"
                    >
                      <ul>
                        <li>
                          <a href="https://www.arielbath.com/who-s-ariel">
                            Our Story
                          </a>
                        </li>
                        <li>
                          <a href="https://www.arielbath.com/cookie-policy">
                            Privacy &amp; Cookie Policy
                          </a>
                        </li>
                        <li>
                          <a href="https://www.arielbath.com/terms-and-conditions">
                            Terms &amp; Conditions
                          </a>
                        </li>
                        <li>
                          <a href="https://www.arielbath.com/store-locator">
                            Locations
                          </a>
                        </li>
                        <li>
                          <a href="https://www.arielbath.com/blog">Blog</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="pagebuilder-column"
                    data-content-type="column"
                    data-appearance="full-height"
                    data-background-images="{}"
                    data-element="main"
                    data-pb-style="GWCHFF6"
                  >
                    <h4
                      data-content-type="heading"
                      data-appearance="default"
                      data-element="main"
                    >
                      Help &amp; Support
                    </h4>
                    <div
                      data-content-type="html"
                      data-appearance="default"
                      data-element="main"
                      data-decoded="true"
                    >
                      <ul>
                        <li>
                          <a href="https://www.arielbath.com/free-shipping">
                            Shipping Info
                          </a>
                        </li>
                        <li>
                          <a href="https://www.arielbath.com/returns-cancellations">
                            Returns &amp; Cancellations
                          </a>
                        </li>
                        <li>
                          <a href="https://www.arielbath.com/">How to buy</a>
                        </li>
                        <li>
                          <a href="https://www.arielbath.com/sales/guest/form">
                            Track Order
                          </a>
                        </li>
                        <li>
                          <a href="https://www.arielbath.com/faq">FAQ</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="pagebuilder-column"
                    data-content-type="column"
                    data-appearance="full-height"
                    data-background-images="{}"
                    data-element="main"
                    data-pb-style="BVLM1PD"
                  >
                    <h4
                      data-content-type="heading"
                      data-appearance="default"
                      data-element="main"
                    >
                      Customer Service
                    </h4>
                    <div
                      data-content-type="html"
                      data-appearance="default"
                      data-element="main"
                      data-decoded="true"
                    >
                      <p>
                        Hotline:{' '}
                        <a
                          style={{ color: '#000', textDecoration: 'none' }}
                          href="tel:(800) 827-5950"
                        >
                          (800) 827-5950
                        </a>
                      </p>
                      <p>Email: sales@arielbath.com</p>
                      <p>Payment Method</p>
                      <div>
                        <img
                          src="/images/credit-card-logo_2x.png"
                          alt="Credit card logo"
                          style={{ height: 30, width: 'auto' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="pagebuilder-column"
                    data-content-type="column"
                    data-appearance="full-height"
                    data-background-images="{}"
                    data-element="main"
                    data-pb-style="KCYY3AK"
                  >
                    <h4
                      data-content-type="heading"
                      data-appearance="default"
                      data-element="main"
                    >
                      Follow Us
                    </h4>
                    <div
                      data-content-type="html"
                      data-appearance="default"
                      data-element="main"
                      data-decoded="true"
                    >
                      <ul className="social-list">
                        <li>
                          <a href="https://www.facebook.com/arielbathusa">
                            <span className="fb-social">Facebook</span>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/user/Arielbath">
                            <span className="yt-social">Youtube</span>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/ariel_bath/">
                            <span className="ins-social" />
                            Instagram
                          </a>
                        </li>
                        <li>
                          <a href="https://in.pinterest.com/arielbath/">
                            <span className="pin-social">Pinterest</span>
                          </a>
                        </li>
                      </ul>
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n                                            .social-list li span {\n                                                background-repeat: no-repeat;\n                                                background-size: 100% 100%;\n                                                content: '';\n                                                display: inline-block;\n                                                height: 30px;\n                                                margin: 0 5px 5px 0;\n                                                width: 42px;\n                                            }\n\n                                            .social-list li span.fb-social {\n                                                background-image: url(https://www.arielbath.com/static/version1721975062/frontend/Atlas/ArielBath/en_US/images/fb-social.svg);\n                                                width: 35px;\n                                                height: 35px;\n                                            }\n\n                                            .social-list li span.yt-social {\n                                                background-image: url(https://www.arielbath.com/static/version1721975062/frontend/Atlas/ArielBath/en_US/images/yt-social.svg);\n                                                width: 35px;\n                                                height: 35px;\n                                            }\n\n                                            .social-list li span.tw-social {\n                                                background-image: url(https://www.arielbath.com/static/version1721975062/frontend/Atlas/ArielBath/en_US/images/tw-social.svg);\n                                                width: 35px;\n                                                height: 35px;\n                                            }\n\n                                            .social-list li span.ins-social {\n                                                background-image: url(https://www.arielbath.com/static/version1721975062/frontend/Atlas/ArielBath/en_US/images/ins-social.svg);\n                                                width: 35px;\n                                                height: 35px;\n                                            }\n\n                                            .social-list li span.pin-social {\n                                                background-image: url(https://www.arielbath.com/static/version1721975062/frontend/Atlas/ArielBath/en_US/images/pin-social.svg);\n                                                width: 35px;\n                                                height: 35px;\n                                            }\n\n                                            .social-list li span.gg-social {\n                                                background-image: url(https://www.arielbath.com/static/version1721975062/frontend/Atlas/ArielBath/en_US/images/gg-social.svg);\n                                                width: 35px;\n                                                height: 35px;\n                                            }\n                                        ",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="copyright-footer"
            data-content-type="row"
            data-appearance="full-width"
            data-enable-parallax={0}
            data-parallax-speed="0.5"
            data-background-images="{}"
            data-background-type="image"
            data-video-loop="true"
            data-video-play-only-visible="true"
            data-video-lazy-load="true"
            data-video-fallback-src=""
            data-element="main"
            data-pb-style="QOASQET"
          >
            <div className="row-full-width-inner" data-element="inner">
              <div
                data-content-type="html"
                data-appearance="default"
                data-element="main"
                data-decoded="true"
              >
                <p className="content-copyright">
                  <span>
                    ©{' '}
                    <span
                      className="text-copyright"
                      style={{ display: 'initial' }}
                    >
                      2024
                    </span>{' '}
                    ARIEL. All Rights Reserved.
                  </span>
                  <span>Huntington Beach, CA 92649</span>
                </p>
              </div>
              <div
                data-content-type="html"
                data-appearance="default"
                data-element="main"
                data-decoded="true"
              ></div>
            </div>
          </div>
        </div>
      </footer>
      <button id="tfilter" type="button">
        <span className="icon-equalizer" />
      </button>
      <div id="ajaxcart_loading_overlay" className="ajaxcart-loading-overlay" />
      <small className="copyright">
        <span>© 2023 ARIEL. All Rights Reserved.</span>
      </small>
    </div>
  );
}

export default App;
