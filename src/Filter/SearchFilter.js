const SearchFilter = ({ props }) => {
  const { activeRegion, updateRegion } = props;

  // Array containing all regions
  const REGIONS = [
    "Oceania",
    "Europe",
    "Americas",
    "Africa",
    "Asia",
    "Antarctic",
  ];
  return (
    <div className="region-filter">
      <select
        value={activeRegion}
        name="region"
        id="regions"
        onChange={updateRegion}
      >
        <option disabled className="region-tem">
          Select your region
        </option>
        {REGIONS.map((region, index) => {
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
