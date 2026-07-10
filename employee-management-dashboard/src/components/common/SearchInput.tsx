type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  placeholder?: string;
  disabled?: boolean;
};

function SearchInput({
  value,
  onChange,
  onClear,
  placeholder = "Search...",
  disabled = false,
}: SearchInputProps) {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
      />

      {value && (
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={onClear}
        >
          Clear
        </button>
      )}
    </div>
  );
}

export default SearchInput;