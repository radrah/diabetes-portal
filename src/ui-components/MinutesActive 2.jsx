/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import CaloriesBurned from "./CaloriesBurned";
import { View } from "@aws-amplify/ui-react";
export default function MinutesActive(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="301px"
      height="256px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "MinutesActive")}
    >
      <CaloriesBurned
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Minutes Active")}
      ></CaloriesBurned>
    </View>
  );
}
