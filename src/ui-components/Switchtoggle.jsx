/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Switchtoggle(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="44px"
      height="20px"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 44, height: 20 }}
      paths={[
        {
          d: "M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z",
          fill: "rgba(196,196,196,1)",
          fillRule: "nonzero",
          style: { transform: "translate(54.55%, 0%)" },
        },
        {
          d: "M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z",
          fill: "rgba(196,196,196,1)",
          fillRule: "nonzero",
          style: { transform: "translate(0%, 0%)" },
        },
        {
          d: "M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6Z",
          fill: "rgba(255,255,255,1)",
          fillRule: "nonzero",
          style: { transform: "translate(11.36%, 20%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "Switchtoggle")}
    ></Icon>
  );
}
