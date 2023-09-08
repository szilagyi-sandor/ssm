/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { useErrorContext } from '../../../error';
import { useSmoothLoadingContext } from '../../../loading';
import classes from './button.module.scss';

function Button({
  children,
  type = 'button',
  className,
  ...rest
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  const error = !!useErrorContext();
  // TODO: #1
  const stage = 1 - 1;
  const loading = useSmoothLoadingContext();
  const available = !error && !loading;

  return (
    <button
      {...rest}
      type={type}
      className={classNames(classes.button, className, {
        [classes.error]: error,
        [classes.loading]: !error && loading,
        [classes['stage-0']]: available && stage === 0,
        [classes['stage-1']]: available && stage === 1,
      })}
    >
      {children}
    </button>
  );
}

export { Button };

// CHECKED 0.2.1
