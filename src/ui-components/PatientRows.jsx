/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function PatientRows(props) {
  const { patient, overrides, ...rest } = props;
  return (
    <View
      width="900px"
      height="42px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "PatientRows")}
    >
      <View
        position="absolute"
        top="100%"
        bottom="-100%"
        left="100%"
        right="-100%"
        transformOrigin="top left"
        transform="rotate(180deg)"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(237,237,237,1)"
        {...getOverrideProps(overrides, "Rectangle 8")}
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
        top="28.57%"
        bottom="30.95%"
        left="15.44%"
        right="75.22%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${patient?.firstName}${" "}${patient?.lastName}`}
        {...getOverrideProps(overrides, "Patient Name")}
      ></Text>
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
        top="28.57%"
        bottom="30.95%"
        left="38%"
        right="48.89%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={patient?.email}
        {...getOverrideProps(overrides, "Email Address")}
      ></Text>
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
        top="28.57%"
        bottom="30.95%"
        left="66.56%"
        right="30.67%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Age"
        {...getOverrideProps(overrides, "Age")}
      ></Text>
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
        top="28.57%"
        bottom="30.95%"
        left="87.89%"
        right="9.11%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="F/M"
        {...getOverrideProps(overrides, "Gender")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="7.14%"
        bottom="7.14%"
        left="4.67%"
        right="91.33%"
        {...getOverrideProps(overrides, "Patient Image")}
      >
        <Icon
          width="36px"
          height="36px"
          viewBox={{ minX: 0, minY: 0, width: 36, height: 36 }}
          paths={[
            {
              d: "M36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18Z",
              fill: "rgba(196,196,196,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Ellipse 7")}
        ></Icon>
        <Image
          position="absolute"
          top="-36.11%"
          bottom="-47.22%"
          height="183.33%"
          left="-97.22%"
          right="-77.78%"
          width="275%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "image 2")}
        ></Image>
      </View>
    </View>
  );
}
