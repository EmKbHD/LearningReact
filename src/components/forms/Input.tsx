/**
 *
 * @param {string} placeholder
 * @param {string} value
 * @param {(s: string) => void } onChange
 */
function Input({ placeholder, value, onChange }) {
  return (
    <div className="mb-2">
      <input
        type="text"
        className="form-control"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default Input;
