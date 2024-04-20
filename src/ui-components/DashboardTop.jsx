/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function DashboardTop(props) {
  const { dashboardData, overrides, ...rest } = props;
  return (
    <Flex
      gap="27px"
      direction="row"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="10px 10px 10px 10px"
      {...rest}
      {...getOverrideProps(overrides, "DashboardTop")}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="230px"
        height="120px"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 41294314")}
      >
        <View
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="20px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,0.4)"
          {...getOverrideProps(overrides, "Rectangle 19294311")}
        ></View>
        <Text
          fontFamily="Montserrat"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="16.40625px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="27.5%"
          bottom="58.33%"
          left="8.14%"
          right="9.05%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Patients Active"
          {...getOverrideProps(overrides, "Patients Active")}
        ></Text>
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
          top="45.83%"
          bottom="30%"
          left="8.14%"
          right="35.75%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={dashboardData?.patientsActive}
          {...getOverrideProps(overrides, "3")}
        ></Text>
      </Flex>
      <Flex
        padding="0px 0px 0px 0px"
        width="221px"
        height="120px"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 42")}
      >
        <View
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="20px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,0.4)"
          {...getOverrideProps(overrides, "Rectangle 19294316")}
        ></View>
        <Text
          fontFamily="Montserrat"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="16.40625px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="27.5%"
          bottom="58.33%"
          left="8.14%"
          right="8.6%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Workouts in Progress"
          {...getOverrideProps(overrides, "Workouts in Progress")}
        ></Text>
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
          top="45.83%"
          bottom="30%"
          left="8.14%"
          right="35.75%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={dashboardData?.workoutsInProgress}
          {...getOverrideProps(overrides, "14")}
        ></Text>
      </Flex>
      <Flex
        padding="0px 0px 0px 0px"
        width="221px"
        height="120px"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 41294319")}
      >
        <View
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="20px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,0.4)"
          {...getOverrideProps(overrides, "Rectangle 19294320")}
        ></View>
        <Text
          fontFamily="Montserrat"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="16.40625px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="27.5%"
          bottom="58.33%"
          left="8.14%"
          right="8.14%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Workouts Completed"
          {...getOverrideProps(overrides, "Workouts Completed")}
        ></Text>
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
          top="45.83%"
          bottom="30%"
          left="8.14%"
          right="35.75%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={dashboardData?.workoutsCompleted}
          {...getOverrideProps(overrides, "9")}
        ></Text>
      </Flex>
      <Flex
        padding="0px 0px 0px 0px"
        width="221px"
        height="120px"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 43")}
      >
        <View
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="20px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,0.4)"
          {...getOverrideProps(overrides, "Rectangle 19294330")}
        ></View>
        <Text
          fontFamily="Montserrat"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="16.40625px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="27.5%"
          bottom="58.33%"
          left="8.14%"
          right="48.42%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Total Patients"
          {...getOverrideProps(overrides, "Total Patients")}
        ></Text>
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
          top="45.83%"
          bottom="30%"
          left="8.14%"
          right="35.75%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={dashboardData?.totalPatients}
          {...getOverrideProps(overrides, "8")}
        ></Text>
      </Flex>
    </Flex>
  );
}
