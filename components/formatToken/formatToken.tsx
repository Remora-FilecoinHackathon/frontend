import { FormatTokenComponent } from './types';

const FormatToken: FormatTokenComponent = (props: any) => {
  const { amount, symbol, approx = false, ...rest } = props;
  const prefix = !approx || amount?.isZero() ? '' : '≈ ';

  return (
    <span {...rest}>
      {prefix}
      {amount}&nbsp;{symbol}
    </span>
  );
};

export default FormatToken;
