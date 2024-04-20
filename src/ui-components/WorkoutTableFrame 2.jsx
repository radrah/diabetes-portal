/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function WorkoutTableFrame(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="618px"
      height="601px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "WorkoutTableFrame")}
    >
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "table")}
      >
        <View
          position="absolute"
          top="100%"
          bottom="-100%"
          left="0%"
          right="0%"
          borderRadius="20px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Card")}
        ></View>
      </View>
      <Text
        fontFamily="Montserrat"
        fontSize="18px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="6.82%"
        bottom="90.35%"
        left="4.97%"
        right="62.58%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Workouts"
        {...getOverrideProps(overrides, "Workouts")}
      ></Text>
    </View>
  );
}
