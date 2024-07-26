const NavigationPromo = () => {
  return (
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
            css={{}}
            aria-hidden="true"
            tabIndex={0}
          >
            <p css={{ textAlign: 'center' }}>
              <span css={{ color: '#ffffff' }}>
                Extra 20% Off Select Vanity
              </span>
              <br />
              <span id="IBIG8YK" css={{ color: '#ffffff' }}>
                Use Code: SPECIAL20
              </span>
            </p>
          </div>
          <div
            data-content-type="text"
            data-appearance="default"
            data-element="main"
            className="slick-current slick-active"
            css={{}}
            aria-hidden="false"
            tabIndex={-1}
          >
            <p id="JE08AG0" css={{ textAlign: 'center' }}>
              <span css={{ color: '#ffffff' }}>
                Celebrate 19 years of Ariel Bath&nbsp;
                <br />
                <span css={{ color: '#ffffff' }}>Up to 50% Off </span>
                <span css={{ textDecoration: 'underline' }}>
                  <span css={{ color: '#ffffff', textDecoration: 'underline' }}>
                    <a
                      css={{
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
            css={{}}
            aria-hidden="true"
            tabIndex={-1}
          >
            <p css={{ textAlign: 'center' }}>
              <span css={{ color: '#ffffff' }}>FREE SHIPPING ALWAYS</span>
              <br />
              <span css={{ color: '#ffffff' }}>
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
  );
};

export default NavigationPromo;
