/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function PatientProfile(props) {
  const { patientProfile, overrides, ...rest } = props;
  return (
    <View
      width="382px"
      height="601px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "PatientProfile")}
    >
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="1.05%"
        {...getOverrideProps(overrides, "Group 1")}
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
        <View
          position="absolute"
          top="36.94%"
          bottom="56.41%"
          left="7.41%"
          right="52.91%"
          borderRadius="10px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(245,245,245,1)"
          {...getOverrideProps(overrides, "Input field5716")}
        ></View>
        <Text
          fontFamily="Lato"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18.75px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="38.77%"
          bottom="58.07%"
          left="11.38%"
          right="56.61%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={patientProfile?.firstName}
          {...getOverrideProps(overrides, "John")}
        ></Text>
        <Text
          fontFamily="Lato"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18.75px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="32.11%"
          bottom="64.73%"
          left="7.41%"
          right="66.14%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="First Name"
          {...getOverrideProps(overrides, "First Name")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="32.11%"
        bottom="56.41%"
        left="53.4%"
        right="7.33%"
        {...getOverrideProps(overrides, "Group 2")}
      >
        <View
          position="absolute"
          top="42.03%"
          bottom="0%"
          left="0%"
          right="0%"
          borderRadius="10px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(245,245,245,1)"
          {...getOverrideProps(overrides, "Input field5720")}
        ></View>
        <Text
          fontFamily="Lato"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18.75px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="57.97%"
          bottom="14.49%"
          left="10%"
          right="9.33%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={patientProfile?.lastName}
          {...getOverrideProps(overrides, "Smith")}
        ></Text>
        <Text
          fontFamily="Lato"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18.75px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="0%"
          bottom="72.46%"
          left="6.67%"
          right="26.67%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Last Name"
          {...getOverrideProps(overrides, "Last Name")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="47.42%"
        bottom="12.98%"
        left="7.33%"
        right="7.33%"
        {...getOverrideProps(overrides, "Group 40")}
      >
        <View
          position="absolute"
          top="10.92%"
          bottom="0%"
          left="0%"
          right="0%"
          borderRadius="10px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(245,245,245,1)"
          {...getOverrideProps(overrides, "Input field169444")}
        ></View>
        <Text
          fontFamily="Lato"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18.75px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="21.43%"
          bottom="16.81%"
          left="4.6%"
          right="4.29%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={patientProfile?.doctorsNotes}
          {...getOverrideProps(
            overrides,
            "Patient has type 2 Diabetes History of diabetes in the family Been in the program for 2 months"
          )}
        ></Text>
        <Text
          fontFamily="Lato"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18.75px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="0%"
          bottom="73.16%"
          left="0%"
          right="87.12%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Notes"
          {...getOverrideProps(overrides, "Notes")}
        ></Text>
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
        top="4.66%"
        bottom="91.68%"
        left="41.1%"
        right="40.84%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Patient"
        {...getOverrideProps(overrides, "Patient")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="91.35%"
        bottom="2%"
        left="63.35%"
        right="7.33%"
        {...getOverrideProps(overrides, "Button Save")}
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
          fontSize="16px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="18.75px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="25%"
          bottom="25%"
          left="32.14%"
          right="32.14%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Save"
          {...getOverrideProps(overrides, "Save")}
        ></Text>
      </View>
      <View
        position="absolute"
        top="10.65%"
        bottom="72.71%"
        left="36.39%"
        right="37.43%"
        borderRadius="50px"
        padding="0px 0px 0px 0px"
        src={patientProfile?.profilePicUrl}
        {...getOverrideProps(overrides, "Rectangle 15")}
      ></View>
      <Icon
        width="120px"
        height="120px"
        viewBox={{ minX: 0, minY: 0, width: 120, height: 120 }}
        paths={[
          {
            d: "M120 60C120 93.1371 93.1371 120 60 120C26.8629 120 0 93.1371 0 60C0 26.8629 26.8629 0 60 0C93.1371 0 120 26.8629 120 60Z",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="12.15%"
        bottom="67.89%"
        left="35.86%"
        right="32.72%"
        {...getOverrideProps(overrides, "Ellipse 12")}
      ></Icon>
      <Text
        fontFamily="Montserrat"
        fontSize="48px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="56.25px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="17.47%"
        bottom="72.71%"
        left="43.19%"
        right="40.05%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="JH"
        {...getOverrideProps(overrides, "JH")}
      ></Text>
    </View>
  );
}
