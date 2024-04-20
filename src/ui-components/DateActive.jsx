/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function DateActive(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="30px"
      padding="30px 30px 30px 30px"
      backgroundColor="rgba(255,242,217,1)"
      {...rest}
      {...getOverrideProps(overrides, "DateActive")}
    >
      <Text
        fontFamily="Lato"
        fontSize="16px"
        fontWeight="600"
        color="rgba(98,177,97,1)"
        lineHeight="18.75px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        width="20px"
        height="20px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="18"
        {...getOverrideProps(overrides, "18")}
      ></Text>
    </Flex>
  );
}
