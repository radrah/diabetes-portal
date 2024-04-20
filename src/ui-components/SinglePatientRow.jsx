/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function SinglePatientRow(props) {
  const { patient, workoutPlan, overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="914px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 96px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "SinglePatientRow")}
    >
      <View
        width="1003px"
        height="74px"
        shrink="0"
        position="relative"
        borderRadius="20px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(237,237,237,1)"
        {...getOverrideProps(overrides, "Laury Renner")}
      >
        <Text
          fontFamily="Montserrat"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="16.40625px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="37.84%"
          bottom="39.19%"
          left="14.21%"
          right="70.84%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${patient?.firstName}${" "}${patient?.lastName}`}
          {...getOverrideProps(overrides, "#Full_Name.1")}
        ></Text>
        <Text
          fontFamily="Montserrat"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="16.40625px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="37.84%"
          bottom="39.19%"
          left="72.13%"
          right="7.93%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={workoutPlan?.updatedAt}
          {...getOverrideProps(overrides, "#Last_Workout.1")}
        ></Text>
        <Text
          fontFamily="Montserrat"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="16.40625px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="39.19%"
          bottom="37.84%"
          left="50%"
          right="30.06%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={patient?.createdOn}
          {...getOverrideProps(overrides, "#Start Date.1")}
        ></Text>
        <Text
          fontFamily="Montserrat"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="16.40625px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="35.14%"
          bottom="41.89%"
          left="30.96%"
          right="54.09%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={patient?.email}
          {...getOverrideProps(overrides, "#Email.1")}
        ></Text>
        <View
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          borderRadius="20px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Rectangle 11")}
        ></View>
        <Image
          position="absolute"
          top="16.22%"
          bottom="16.22%"
          height="67.57%"
          left="4.09%"
          right="90.93%"
          width="4.99%"
          borderRadius="30px"
          padding="0px 0px 0px 0px"
          src={patient?.profilePicUrl}
          {...getOverrideProps(overrides, "Rectangle 13")}
        ></Image>
      </View>
    </Flex>
  );
}
