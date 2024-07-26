import { FURNITURE } from './fake-data';
import Breadcrumbs from './ui/components/breadcrumbs/Breadcrumbs';
import CategoriesRelated from './ui/components/categories-related/CategoriesRelated';
import Footer from './ui/components/footer/Footer';
import Header from './ui/components/header/Header';
import Loading from './ui/components/loading/Loading';
import NavigationPromo from './ui/components/navigation-promo/NavigationPromo';
import ProductList from './ui/components/product-list/ProductList';
import Product from './ui/components/product/Product';
import Sorter from './ui/components/sorter/Sorter';
import ViewMoreButton from './ui/components/view-more-button/ViewMoreButton';

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
          <span className="toolbar-amount_sidebar_title">332 Items</span>
        </div>

        <div className="columns">
          <div className="column main">
            <div>
              <div className="toolbar toolbar-products">
                <Sorter />
              </div>

              <ProductList
                rowKey="id"
                data={FURNITURE.slice(0, 20)}
                renderItem={(item) => <Product {...item} />}
              >
                <Loading />

                <ViewMoreButton />
              </ProductList>
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
