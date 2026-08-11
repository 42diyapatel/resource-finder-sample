import './Select.css';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  id: string;
  label: string;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
}

export default function Select({ id, label, value, options, onChange }: SelectProps) {
  return (
    <div className="select">
      <label className="select__label" htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        className="select__input"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
