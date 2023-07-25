/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { useErrorContext } from '../error';
import { useGetThemeClasses } from '../themes';
import { useLoadingContext } from '../loading';
import { useStageContext } from '../themes/theLine';
import theLineClasses from './button.theLine.module.scss';

// TODO: #1 remove theme related things

function Button({
  children,
  type = 'button',
  className,
  ...rest
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  const classes = useGetThemeClasses({
    theLineClasses,
  });

  const stage = useStageContext();
  const error = !!useErrorContext();
  const loading = useLoadingContext();
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

// CHECKED 0.2.0
