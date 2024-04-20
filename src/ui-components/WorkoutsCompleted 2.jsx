/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function WorkoutsCompleted(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="221.05px"
      height="120px"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "WorkoutsCompleted")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Card")}
      ></View>
      <Text
        fontFamily="Lato"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="16.40625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="37.5%"
        bottom="37.5%"
        left="11.4%"
        right="24.81%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Workouts Completed"
        {...getOverrideProps(overrides, "Workouts Completed")}
      ></Text>
      <Text
        fontFamily="Open Sans"
        fontSize="24px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="28.125px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="55.83%"
        bottom="16.67%"
        left="11.57%"
        right="58.9%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="10"
        {...getOverrideProps(overrides, "10")}
      ></Text>
    </View>
  );
}
