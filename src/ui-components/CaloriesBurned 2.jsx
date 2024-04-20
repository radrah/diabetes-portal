/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function CaloriesBurned(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="301px"
      height="256px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "CaloriesBurned")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="20px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Card")}
      ></View>
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
        top="11.33%"
        bottom="80.08%"
        left="8.38%"
        right="22.77%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Calories Burned"
        {...getOverrideProps(overrides, "Calories Burned")}
      ></Text>
      <Text
        fontFamily="Montserrat"
        fontSize="18px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="50.78%"
        bottom="40.63%"
        left="35.55%"
        right="38.87%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="457"
        {...getOverrideProps(overrides, "457")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="33.03%"
        bottom="22.14%"
        left="29.24%"
        right="32.64%"
        transformOrigin="top left"
        transform="rotate(-0.28deg)"
        {...getOverrideProps(overrides, "Progress")}
      >
        <Icon
          width="115.322265625px"
          height="115.322265625px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 115.322265625,
            height: 115.322265625,
          }}
          paths={[
            {
              d: "M57.3827 124.765C94.5972 124.765 124.765 94.5972 124.765 57.3827L104.765 57.3827C104.765 83.5515 83.5515 104.765 57.3827 104.765L57.3827 124.765ZM124.765 57.3827C124.765 20.1683 94.5972 -10 57.3827 -10L57.3827 10C83.5515 10 104.765 31.214 104.765 57.3827L124.765 57.3827ZM57.3827 -10C20.1683 -10 -10 20.1683 -10 57.3827L10 57.3827C10 31.214 31.214 10 57.3827 10L57.3827 -10ZM-10 57.3827C-10 94.5972 20.1683 124.765 57.3827 124.765L57.3827 104.765C31.214 104.765 10 83.5515 10 57.3827L-10 57.3827Z",
              stroke: "rgba(174,207,232,1)",
              fillRule: "nonzero",
              strokeWidth: 20,
            },
          ]}
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Oval")}
        ></Icon>
        <Icon
          width="57.923828125px"
          height="111.70166015625px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 57.923828125,
            height: 111.70166015625,
          }}
          paths={[
            {
              d: "M16.8554 98.0068L23.9181 90.9273L16.8554 98.0068ZM57.3827 -10C20.1683 -10 -10 20.1683 -10 57.3827L10 57.3827C10 31.214 31.214 10 57.3827 10L57.3827 -10ZM-10 57.3827C-10 76.0161 -2.4235 92.8989 9.79269 105.086L23.9181 90.9273C15.309 82.3386 10 70.4901 10 57.3827L-10 57.3827ZM9.79269 105.086C16.7444 112.021 25.2131 117.454 34.6706 120.839L41.4108 102.009C34.7801 99.6355 28.8211 95.8188 23.9181 90.9273L9.79269 105.086Z",
              stroke: "rgba(38,148,248,1)",
              fillRule: "nonzero",
              strokeWidth: 20,
            },
          ]}
          position="absolute"
          top="0%"
          bottom="2.91%"
          left="0%"
          right="50%"
          {...getOverrideProps(overrides, "Oval Copy")}
        ></Icon>
      </View>
    </View>
  );
}
