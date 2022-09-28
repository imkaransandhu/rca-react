const SearchFilter = ({ props }) => {
  const { activeRegion, updateRegion, regions } = props;
  return (
    <div className="region-filter">
      <select
        value={activeRegion}
        name="region"
        id="regions"
        onChange={updateRegion}
      >
        <option className="region-tem">Select your region</option>
        {regions.map((region, index) => {
          return (
            <option key={index} className="region-tem">
              {region}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SearchFilter;
