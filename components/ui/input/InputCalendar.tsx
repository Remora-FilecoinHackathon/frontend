import React, { ForwardedRef, forwardRef } from 'react';
import {
  InputWrapperStyle,
  InputContentStyle,
  InputStyle,
  InputLeftDecoratorStyle,
  InputRightDecoratorStyle,
  InputMessageStyle,
} from './InputStyles';
import { InputLabelStyle } from './LabelStyles';
import { InputProps } from './types';

function InputCalendar(
  props: InputProps,
  ref?: ForwardedRef<HTMLInputElement>,
) {
  const {
    label,
    error,
    warning,
    success,
    active = false,
    fullwidth = false,
    placeholder = ' ',
    leftDecorator,
    rightDecorator,
    className,
    style,
    variant = 'default',
    color = 'default',
    wrapperRef,
    children,
    selected,
    onChange,
    readOnly = false,
    ...rest
  } = props;

  const { id, disabled = false } = props;
  const wrapperProps = { className, style };

  const hasLabel = (!!label && variant === 'default') || 'nopading';

  const hasError = !!error;
  const hasErrorMessage = hasError && typeof error !== 'boolean';
  const hasWarning = !hasError && !!warning; // `error` overrides `warning`
  const hasWarningMessage = hasWarning && typeof warning !== 'boolean';
  const hasSuccess = !!success && !error;
  const hasSuccessMessage = hasSuccess && typeof success !== 'boolean';

  const hasLeftDecorator = !!leftDecorator;
  const hasRightDecorator = !!rightDecorator;

  return (
    <div>
      {hasLabel && (
        <InputLabelStyle htmlFor={id} $color={color}>
          {label}
        </InputLabelStyle>
      )}
      <InputWrapperStyle
        $error={hasError}
        $warning={hasWarning}
        $active={active}
        $disabled={disabled}
        $fullwidth={fullwidth}
        $color={color}
        $readonly={readOnly}
        ref={wrapperRef}
        {...wrapperProps}
      >
        {hasLeftDecorator && (
          <InputLeftDecoratorStyle>{leftDecorator}</InputLeftDecoratorStyle>
        )}

        <InputContentStyle $variant={variant}></InputContentStyle>

        {/* {hasErrorMessage && (
          <InputMessageStyle $variant="error" $bordered>
            {error}
          </InputMessageStyle>
        )}
        {hasWarningMessage && (
          <InputMessageStyle $variant="warning" $bordered>
            {warning}
          </InputMessageStyle>
        )}
        {hasSuccessMessage && (
          <InputMessageStyle $variant="success" $bordered>
            {success}
          </InputMessageStyle>
        )}

        {hasRightDecorator && (
          <InputRightDecoratorStyle>{rightDecorator}</InputRightDecoratorStyle>
        )} */}
      </InputWrapperStyle>
    </div>
  );
}

export default forwardRef(InputCalendar);
