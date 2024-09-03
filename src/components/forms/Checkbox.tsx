/**
 * Checkbox with a label on the right side
 * @param {boolean} checked
 * @param {(v: boolean) => void} onChange
 * @param {string} label
 * @param {string} id
 */
function Checkbox({ checked, onChange, label, id }) {
  return (
    <div className="form-check my-2">
      <input
        id={id}
        type="checkbox"
        className="form-check-input"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor={id} className="form-check-label">
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
