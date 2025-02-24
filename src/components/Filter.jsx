import PropTypes from "prop-types";

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="filter">
      <label>
        Find contacts by name:
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
