import { FURNITURE } from './fake-data';
import Breadcrumbs from './ui/components/breadcrumbs/Breadcrumbs';
import CategoriesRelated from './ui/components/categories-related/CategoriesRelated';
import Footer from './ui/components/footer/Footer';
import Header from './ui/components/header/Header';
import NavigationPromo from './ui/components/navigation-promo/NavigationPromo';
import Sorter from './ui/components/sorter/Sorter';
import ProductList from './ui/containers/product-list/ProductList';

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <NavigationPromo />
      <Breadcrumbs />

      <main id="maincontent" className="page-main">
        <div className="page-title-wrapper">
          <h1
            className="page-title"
            aria-labelledby="page-title-heading toolbar-amount"
          >
            <span className="base" data-ui-id="page-title-wrapper">
              Vanities
            </span>
          </h1>
          <span className="toolbar-amount_sidebar_title">
            {FURNITURE.length} Items
          </span>
        </div>

        <div className="columns">
          <div className="column main">
            <div css={{ flexGrow: 1 }}>
              <div className="toolbar toolbar-products">
                <Sorter />
              </div>

              <ProductList />
            </div>
          </div>
        </div>
        <CategoriesRelated />
      </main>
      <Footer />
    </div>
  );
}

export default App;
