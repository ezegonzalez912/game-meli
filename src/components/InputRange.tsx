interface Props {
  min: number;
  max: number;
  value?: number;
  onChange?: (e: any) => void;
  format: (number: number) => string;
}

const namespace = "input-range";

export const InputRange: React.FC<Props> = ({
  min,
  max,
  value,
  onChange,
  format,
}) => {
  return (
    <div className={`${namespace}`}>
      <input
        className={`${namespace}__input`}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
      <div className={`${namespace}__min-max`}>
        <p>{format(min)}</p>
        <p>{format(max)}</p>
      </div>
    </div>
  );
};
