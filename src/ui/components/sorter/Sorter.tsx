const Sorter = () => {
  return (
    <div className="toolbar-sorter sorter dropdown_add_sort">
      <label className="sorter-label" htmlFor="sorter">
        Sort
      </label>
      <select
        data-role="sorter"
        className="sorter-options"
        css={{ width: '132.825px' }}
        defaultValue={'new'}
      >
        <option value="name">Product Name </option>
        <option value="bestsellers">Bestsellers</option>
        <option value="new">Newest </option>
        <option value="most_viewed">Popularity </option>
        <option value="price_desc">Price: High To Low </option>
        <option value="price_asc">Price: Low To High </option>
      </select>
    </div>
  );
};

export default Sorter;
