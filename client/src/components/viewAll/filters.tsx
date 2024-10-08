import { params } from "../../types";

interface FiltersProps {
  filters: params;
  setFilters: (filters: params) => void;
}
const Filters = (props: FiltersProps) => {
  const { filters, setFilters } = props;
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFilters({ ...filters, [e.target.name]: e.target.value, page: 1 });
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
