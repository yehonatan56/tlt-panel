const Filters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="filters">
      <input
        type="number"
        name="min"
        value={filters.min}
        onChange={handleChange}
        placeholder="Min purchases"
      />
      <input
        type="number"
        name="max"
        value={filters.max}
        onChange={handleChange}
        placeholder="Max purchases"
      />
      <input
        type="date"
        name="dateFrom"
        value={filters.dateFrom}
        onChange={handleChange}
        placeholder="From"
      />
      <input
        type="date"
        name="dateTo"
        value={filters.dateTo}
        onChange={handleChange}
        placeholder="To"
      />
    </div>
  );
};

export default Filters;
``;
