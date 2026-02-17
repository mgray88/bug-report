/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, View as DefaultView } from 'react-native';

const withDefaultClassName = (defaultClassName: string, className?: string) =>
  className ? `${defaultClassName} ${className}` : defaultClassName;

export type TextProps = DefaultText['props'] & {
  className?: string;
};

export type ViewProps = DefaultView['props'] & {
  className?: string;
};

export function Text({ className, ...otherProps }: TextProps) {
  return <DefaultText className={withDefaultClassName('text-black dark:text-white', className)} {...otherProps} />;
}

export function View({ className, ...otherProps }: ViewProps) {
  return <DefaultView className={withDefaultClassName('bg-white dark:bg-black', className)} {...otherProps} />;
}
