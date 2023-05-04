/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { useErrorContext } from '@shared/error';
import { useGetThemeClasses } from '@shared/themes';
import { useStageContext } from '@shared/themes/theLine';
import theLineClasses from './button.theLine.module.scss';

function Button({
  children,
  type = 'button',
  className,
  ...rest
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  const stage = useStageContext();

  const classes = useGetThemeClasses({
    theLineClasses,
  });

  const error = !!useErrorContext();

  return (
    <button
      {...rest}
      type={type}
      className={classNames(classes.button, className, {
        [classes.error]: error,
        [classes['stage-0']]: !error && stage === 0,
        [classes['stage-1']]: !error && stage === 1,
      })}
    >
      {children}
    </button>
  );
}

export { Button };
