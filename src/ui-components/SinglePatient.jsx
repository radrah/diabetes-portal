/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function SinglePatient(props) {
  const { workout, patientName, patient, overrides, ...rest } = props;
  return (
    <View
      width="750px"
      height="48px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "SinglePatient")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 10")}
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
        justifyContent="center"
        position="absolute"
        top="27.08%"
        bottom="31.25%"
        left="3.6%"
        right="77.6%"
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
        justifyContent="center"
        position="absolute"
        top="27.08%"
        bottom="31.25%"
        left="28.8%"
        right="52.4%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={patient?.email}
        {...getOverrideProps(overrides, "Email")}
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
        justifyContent="center"
        position="absolute"
        top="29.17%"
        bottom="29.17%"
        left="56.4%"
        right="24.8%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={patient?.createdOn}
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
        justifyContent="center"
        position="absolute"
        top="27.08%"
        bottom="31.25%"
        left="80.8%"
        right="0.4%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Last Workout"
        {...getOverrideProps(overrides, "Last Workout")}
      ></Text>
    </View>
  );
}
