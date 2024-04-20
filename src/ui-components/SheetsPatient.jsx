/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function SheetsPatient(props) {
  const { patient, overrides, ...rest } = props;
  return (
    <View
      width="1003px"
      height="74px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "SheetsPatient")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="20px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(237,237,237,1)"
        {...getOverrideProps(overrides, "Rectangle 11")}
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
        top="33.78%"
        bottom="37.84%"
        left="12.86%"
        right="65.21%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${patient?.firstName}${" "}${patient?.lastName}`}
        {...getOverrideProps(overrides, "#Full_Name")}
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
        top="37.84%"
        bottom="33.78%"
        left="82.68%"
        right="-4.61%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Last Workout"
        {...getOverrideProps(overrides, "Last Workout")}
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
        top="37.84%"
        bottom="33.78%"
        left="60.54%"
        right="17.54%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Start Date"
        {...getOverrideProps(overrides, "Start Date")}
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
        top="37.84%"
        bottom="33.78%"
        left="38.61%"
        right="39.46%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={patient?.email}
        {...getOverrideProps(overrides, "#Email")}
      ></Text>
      <Icon
        width="44px"
        height="44px"
        viewBox={{ minX: 0, minY: 0, width: 44, height: 44 }}
        paths={[
          {
            d: "M44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22C0 9.84974 9.84974 0 22 0C34.1503 0 44 9.84974 44 22Z",
            fill: "rgba(217,217,217,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="20.27%"
        bottom="20.27%"
        left="4.69%"
        right="90.93%"
        {...getOverrideProps(overrides, "Ellipse 12")}
      ></Icon>
    </View>
  );
}
