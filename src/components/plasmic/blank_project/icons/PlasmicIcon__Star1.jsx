// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Star1Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 13"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7 0l1.572 4.837h5.085l-4.114 2.99 1.572 4.836L7 9.673l-4.114 2.99 1.571-4.837-4.114-2.99h5.085L7 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Star1Icon;
/* prettier-ignore-end */
