interface Props {
  min: number;
  max: number;
  value: number;
  price: number;
  format: (number: number) => string;
}

const namespace = "input-range-check";

export const InputRangeCheck: React.FC<Props> = ({
  min,
  max,
  value,
  price,
  format
}) => {
  const calc = (v: number) => {
    const res = min - max;
    const porcentage = ((v - min) * 96) / res;
    return Math.abs(porcentage);
  };

  const width = () => {
    return Math.abs(calc(value) - calc(price));
  };

  return (
    <div className={`${namespace}`}>
      <div
        className={`${namespace}__dot price-dot`}
        style={{ left: `${calc(price)}%` }}
      >
        <p>{format(price)}</p>
      </div>
      <div
        className={`${namespace}__dot selected-price-dot`}
        style={{ 
          left: `${calc(value)}%`  
        }}
      >
        <p>{format(value)}</p>
      </div>
      <div
        className={`${namespace}__line-diff`}
        style={{
          left: `${calc(price) > calc(value) ? calc(value) : calc(price)}%`,
          width: `${width()}%`,
        }}
      />
      <div className={`${namespace}__line`} />
    </div>
  );
};
