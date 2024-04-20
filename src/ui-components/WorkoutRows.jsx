/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function WorkoutRows(props) {
  const { workoutPlan, patient, overrides, ...rest } = props;
  return (
    <View
      width="553px"
      height="40px"
      overflow="hidden"
      position="relative"
      borderRadius="10px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(237,237,237,1)"
      {...rest}
      {...getOverrideProps(overrides, "WorkoutRows")}
    >
      <Text
        fontFamily="Lato"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="16.40625px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="11px"
        left="104px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Exercise"
        {...getOverrideProps(overrides, "Exercise")}
      ></Text>
      <Text
        fontFamily="Lato"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="16.40625px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="11px"
        left="320px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Rep Length"
        {...getOverrideProps(overrides, "Rep Length")}
      ></Text>
      <Text
        fontFamily="Lato"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="16.40625px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="11px"
        left="207px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Select Reps"
        {...getOverrideProps(overrides, "Select Reps")}
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
        width="70px"
        height="16px"
        position="absolute"
        top="11px"
        left="433px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Time"
        {...getOverrideProps(overrides, "Time")}
      ></Text>
      <Icon
        width="22px"
        height="22px"
        viewBox={{ minX: 0, minY: 0, width: 22, height: 22 }}
        paths={[
          {
            d: "M20 11C20 15.9706 15.9706 20 11 20L11 24C18.1797 24 24 18.1797 24 11L20 11ZM11 20C6.02944 20 2 15.9706 2 11L-2 11C-2 18.1797 3.8203 24 11 24L11 20ZM2 11C2 6.02944 6.02944 2 11 2L11 -2C3.8203 -2 -2 3.8203 -2 11L2 11ZM11 2C15.9706 2 20 6.02944 20 11L24 11C24 3.8203 18.1797 -2 11 -2L11 2Z",
            stroke: "rgba(144,150,156,1)",
            fillRule: "nonzero",
            strokeWidth: 2,
          },
          {
            d: "M22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11Z",
            fill: "rgba(217,217,217,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="9px"
        left="38px"
        {...getOverrideProps(overrides, "Ellipse 11")}
      ></Icon>
      <Icon
        width="12px"
        height="12px"
        viewBox={{ minX: 0, minY: 0, width: 12, height: 12 }}
        paths={[
          {
            d: "M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6Z",
            fill: "rgba(40,148,248,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="35%"
        bottom="35%"
        left="7.78%"
        right="90.05%"
        {...getOverrideProps(overrides, "Ellipse 10")}
      ></Icon>
    </View>
  );
}
