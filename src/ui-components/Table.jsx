/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Table(props) {
  const { patient, doctor, overrides, ...rest } = props;
  return (
    <View
      width="900px"
      height="42px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Table")}
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
        top="26.19%"
        bottom="33.33%"
        left="2.22%"
        right="87.33%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${patient?.firstName}${patient?.lastName}`}
        {...getOverrideProps(overrides, "Robert Thomas")}
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
        top="26.19%"
        bottom="33.33%"
        left="24.67%"
        right="57.44%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={patient?.email}
        {...getOverrideProps(overrides, "robert.thomas@gmail.com")}
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
        top="26.19%"
        bottom="33.33%"
        left="53.33%"
        right="39.67%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={patient?.glucoseLevel}
        {...getOverrideProps(overrides, "Basic Tees")}
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
        top="26.19%"
        bottom="33.33%"
        left="74.67%"
        right="19.89%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={patient?.heartRate}
        {...getOverrideProps(overrides, "150 pcs")}
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
        top="26.19%"
        bottom="33.33%"
        left="88.11%"
        right="7%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={doctor?.id}
        {...getOverrideProps(overrides, "$3,000")}
      ></Text>
    </View>
  );
}
