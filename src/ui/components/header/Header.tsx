const Header = () => {
  return (
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
                css={{ opacity: 1 }}
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
  );
};

export default Header;
