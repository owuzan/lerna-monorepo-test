import React, { FC } from "react";

export type AlertProps = {
  children?: React.ReactNode;
};

export const Alert: FC<AlertProps> = (props) => {
  const { children } = props;

  return <div>{children}</div>;
};
