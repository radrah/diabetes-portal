/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function PatientRecordFrame(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="953px"
      height="801px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "PatientRecordFrame")}
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
        {...getOverrideProps(overrides, "Frame")}
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
        top="7.49%"
        bottom="90.39%"
        left="3.88%"
        right="75.07%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Patient Records"
        {...getOverrideProps(overrides, "Patient Records")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="7.74%"
        bottom="88.51%"
        left="78.59%"
        right="12.59%"
        {...getOverrideProps(overrides, "Button filter")}
      >
        <View
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          border="1px SOLID rgba(176,176,176,1)"
          borderRadius="10px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle 9175603")}
        ></View>
        <Text
          fontFamily="Montserrat"
          fontSize="14px"
          fontWeight="700"
          color="rgba(176,176,176,1)"
          lineHeight="16.40625px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="23.33%"
          bottom="20%"
          left="36.9%"
          right="16.67%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Filter"
          {...getOverrideProps(overrides, "Filter")}
        ></Text>
        <Icon
          width="12px"
          height="10.87493896484375px"
          viewBox={{ minX: 0, minY: 0, width: 12, height: 10.87493896484375 }}
          paths={[
            {
              d: "M11.625 0L0.374999 0C0.275543 0 0.18016 0.0395088 0.109835 0.109835C0.0395087 0.180161 3.33066e-16 0.275543 0 0.374999L0 1.00125C7.01179e-05 1.08982 0.0176677 1.1775 0.0517786 1.25923C0.0858895 1.34097 0.135839 1.41515 0.198749 1.47749L4.49998 5.84248L4.49998 9.66747L5.24998 9.95247L5.24998 5.62498C5.25027 5.57563 5.24081 5.52671 5.22215 5.48102C5.20348 5.43533 5.17599 5.39377 5.14123 5.35873L0.749997 0.971247L0.749997 0.749997L11.25 0.749997L11.25 0.978747L6.87373 5.35873C6.83625 5.39251 6.80598 5.43349 6.78471 5.47924C6.76345 5.52499 6.75163 5.57456 6.74998 5.62498L6.74998 10.5787L7.49997 10.875L7.49997 5.81248L11.8012 1.49999C11.8651 1.43607 11.9156 1.36001 11.9498 1.2763C11.9839 1.19259 12.001 1.1029 12 1.0125L12 0.374999C12 0.275543 11.9605 0.180161 11.8901 0.109835C11.8198 0.0395088 11.7244 1.66533e-16 11.625 0Z",
              fill: "rgba(176,176,176,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="33.33%"
          bottom="30.42%"
          left="17.86%"
          right="67.86%"
          {...getOverrideProps(overrides, "Vector175605")}
        ></Icon>
      </View>
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="7.74%"
        bottom="88.51%"
        left="58.34%"
        right="23.5%"
        {...getOverrideProps(overrides, "Search")}
      >
        <View
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          borderRadius="10px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(245,245,245,1)"
          {...getOverrideProps(overrides, "Rectangle 9175607")}
        ></View>
        <View
          padding="0px 0px 0px 0px"
          position="absolute"
          top="30%"
          bottom="30%"
          left="84.39%"
          right="8.67%"
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
        <Text
          fontFamily="Lato"
          fontSize="14px"
          fontWeight="400"
          color="rgba(133,133,133,1)"
          lineHeight="16.40625px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="23.33%"
          bottom="20%"
          left="8.67%"
          right="33.53%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Search in table..."
          {...getOverrideProps(overrides, "Search in table...")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="7.74%"
        bottom="88.51%"
        left="89.51%"
        right="2.1%"
        {...getOverrideProps(overrides, "Button add")}
      >
        <View
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Button primary")}
        ></View>
        <Text
          fontFamily="Montserrat"
          fontSize="14px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="16.40625px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="20%"
          bottom="23.33%"
          left="42.5%"
          right="18.75%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Add"
          {...getOverrideProps(overrides, "Add")}
        ></Text>
        <View
          padding="0px 0px 0px 0px"
          position="absolute"
          top="30%"
          bottom="30%"
          left="21.25%"
          right="63.75%"
          {...getOverrideProps(overrides, "Group")}
        >
          <Icon
            width="12px"
            height="12px"
            viewBox={{ minX: 0, minY: 0, width: 12, height: 12 }}
            paths={[
              {
                d: "M6 0C6.19891 1.04083e-16 6.38968 0.0790176 6.53033 0.21967C6.67098 0.360322 6.75 0.551088 6.75 0.75L6.75 5.25L11.25 5.25C11.4489 5.25 11.6397 5.32902 11.7803 5.46967C11.921 5.61032 12 5.80109 12 6C12 6.19891 11.921 6.38968 11.7803 6.53033C11.6397 6.67098 11.4489 6.75 11.25 6.75L6.75 6.75L6.75 11.25C6.75 11.4489 6.67098 11.6397 6.53033 11.7803C6.38968 11.921 6.19891 12 6 12C5.80109 12 5.61032 11.921 5.46967 11.7803C5.32902 11.6397 5.25 11.4489 5.25 11.25L5.25 6.75L0.75 6.75C0.551088 6.75 0.360322 6.67098 0.21967 6.53033C0.0790176 6.38968 1.09288e-16 6.19891 0 6C3.64292e-17 5.80109 0.0790176 5.61032 0.21967 5.46967C0.360322 5.32902 0.551088 5.25 0.75 5.25L5.25 5.25L5.25 0.75C5.25 0.551088 5.32902 0.360322 5.46967 0.21967C5.61032 0.0790176 5.80109 2.28983e-16 6 4.16334e-17L6 0Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Vector175616")}
          ></Icon>
        </View>
      </View>
    </View>
  );
}
