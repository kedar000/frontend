type EmployeeSearchProp = {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
};
function EmployeeSearch({ value, onChange, onClear }: EmployeeSearchProp) {
  return (
    <div className="input-group">
      <span className="input-group-text">🔍</span>

      <input
        className="form-control"
        placeholder="Search employee..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      {value && (
        <button className="btn btn-outline-secondary" onClick={onClear}>
          Clear
        </button>
      )}
    </div>
  );
}

export default EmployeeSearch;
