/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function DoctorsPortalLeft(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="588px"
      height="1024px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "DoctorsPortalLeft")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundImage="linear-gradient(-90deg, rgba(39,148,248,1), rgba(175,208,232,1))"
        {...getOverrideProps(overrides, "Left side")}
      ></View>
      <Text
        fontFamily="Montserrat"
        fontSize="72px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="84.375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="45.7%"
        bottom="37.11%"
        left="32.14%"
        right="10.54%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Doctor’s &#xA;Portal"
        {...getOverrideProps(overrides, "Doctor\u2019s Portal")}
      ></Text>
      <View
        position="absolute"
        top="49.32%"
        bottom="42.77%"
        left="12.07%"
        right="74.15%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Stethoscope Icon")}
      ></View>
    </View>
  );
}
