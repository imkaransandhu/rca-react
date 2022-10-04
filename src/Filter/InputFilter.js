const InputFilter = ({ props }) => {
  const { updateCountry, countriesName } = props;
  return (
    <div className="search-filter">
      <form onSubmit={updateCountry}>
        <input
          id="search-country"
          list="country"
          placeholder="Enter your country..."
        />
      </form>

      <datalist id="country">
        {countriesName.map((countryName, index) => {
          return (
            <option className="country-item" key={index} value={countryName} />
          );
        })}
      </datalist>
    </div>
  );
};

export default InputFilter;
