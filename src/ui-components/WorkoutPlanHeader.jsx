/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function WorkoutPlanHeader(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1000px"
      height="30px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "WorkoutPlanHeader")}
    >
      <Text
        fontFamily="Montserrat"
        fontSize="24px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="28.125px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="0%"
        bottom="3.33%"
        left="0%"
        right="82.6%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Workout Plan"
        {...getOverrideProps(overrides, "Workout Plan")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="0%"
        bottom="0%"
        left="71.3%"
        right="10.7%"
        {...getOverrideProps(overrides, "Search bar")}
      >
        <View
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "White")}
        ></View>
        <Text
          fontFamily="Lato"
          fontSize="14px"
          fontWeight="400"
          color="rgba(176,176,176,1)"
          lineHeight="16.40625px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="20%"
          bottom="23.33%"
          left="8.33%"
          right="62.78%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Search..."
          {...getOverrideProps(overrides, "Search...")}
        ></Text>
        <View
          padding="0px 0px 0px 0px"
          position="absolute"
          top="30%"
          bottom="30%"
          left="85%"
          right="8.33%"
          {...getOverrideProps(overrides, "Search icon")}
        >
          <Icon
            width="10px"
            height="10px"
            viewBox={{ minX: 0, minY: 0, width: 10, height: 10 }}
            paths={[
              {
                d: "M9 5C9 7.20914 7.20914 9 5 9L5 11C8.31371 11 11 8.31371 11 5L9 5ZM5 9C2.79086 9 1 7.20914 1 5L-1 5C-1 8.31371 1.68629 11 5 11L5 9ZM1 5C1 2.79086 2.79086 1 5 1L5 -1C1.68629 -1 -1 1.68629 -1 5L1 5ZM5 1C7.20914 1 9 2.79086 9 5L11 5C11 1.68629 8.31371 -1 5 -1L5 1Z",
                stroke: "rgba(133,133,133,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            position="absolute"
            top="0%"
            bottom="16.67%"
            left="0%"
            right="16.67%"
            {...getOverrideProps(overrides, "Ellipse 2")}
          ></Icon>
          <Icon
            width="4px"
            height="4px"
            viewBox={{ minX: 0, minY: 0, width: 4, height: 4 }}
            paths={[
              {
                d: "M0 0L5.65685 0L5.65685 -1L0 -1L0 0Z",
                stroke: "rgba(133,133,133,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            position="absolute"
            top="66.67%"
            bottom="33.33%"
            left="66.67%"
            right="-13.81%"
            transformOrigin="top left"
            transform="rotate(45deg)"
            {...getOverrideProps(overrides, "Line 2")}
          ></Icon>
        </View>
      </View>
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="97%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Mask Group")}
      ></View>
      <Icon
        width="18px"
        height="20px"
        viewBox={{ minX: 0, minY: 0, width: 18, height: 20 }}
        paths={[
          {
            d: "M16 11.586L16 8C16 4.783 13.815 2.073 10.855 1.258C10.562 0.52 9.846 0 9 0C8.154 0 7.438 0.52 7.145 1.258C4.185 2.074 2 4.783 2 8L2 11.586L0.293001 13.293C0.199958 13.3857 0.126171 13.4959 0.0758854 13.6172C0.0256001 13.7386 -0.000189449 13.8687 1.04767e-06 14L1.04767e-06 16C1.04767e-06 16.2652 0.105358 16.5196 0.292894 16.7071C0.480431 16.8946 0.734785 17 1 17L17 17C17.2652 17 17.5196 16.8946 17.7071 16.7071C17.8946 16.5196 18 16.2652 18 16L18 14C18.0002 13.8687 17.9744 13.7386 17.9241 13.6172C17.8738 13.4959 17.8 13.3857 17.707 13.293L16 11.586ZM16 15L2 15L2 14.414L3.707 12.707C3.80004 12.6143 3.87383 12.5041 3.92412 12.3828C3.9744 12.2614 4.00019 12.1313 4 12L4 8C4 5.243 6.243 3 9 3C11.757 3 14 5.243 14 8L14 12C14 12.266 14.105 12.52 14.293 12.707L16 14.414L16 15ZM9 20C9.6193 20.0008 10.2235 19.8086 10.7285 19.4502C11.2335 19.0917 11.6143 18.5849 11.818 18L6.182 18C6.38566 18.5849 6.76648 19.0917 7.27151 19.4502C7.77654 19.8086 8.3807 20.0008 9 20Z",
            fill: "rgba(0,0,0,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="16.67%"
        bottom="16.67%"
        left="92.3%"
        right="5.9%"
        {...getOverrideProps(overrides, "Vector")}
      ></Icon>
    </View>
  );
}
