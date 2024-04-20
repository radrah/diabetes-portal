/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Image, View } from "@aws-amplify/ui-react";
export default function MaskGroup(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="30px"
      height="30px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "MaskGroup")}
    >
      <Icon
        width="30px"
        height="30px"
        viewBox={{ minX: 0, minY: 0, width: 30, height: 30 }}
        paths={[
          {
            d: "M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15Z",
            fill: "rgba(196,196,196,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Ellipse 1")}
      ></Icon>
      <Image
        position="absolute"
        top="-33.33%"
        bottom="-36.67%"
        height="170%"
        left="-30%"
        right="-43.33%"
        width="173.33%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "image 1")}
      ></Image>
    </View>
  );
}
