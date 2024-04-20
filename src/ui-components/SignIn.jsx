/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
import MedicalStethoscope from "./MedicalStethoscope";
import Inputfield from "./Inputfield";
import Buttonprimary from "./Buttonprimary";
import White from "./White";
export default function SignIn(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="1024px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "SignIn")}
    >
      <View
        width="852px"
        height="1024px"
        position="absolute"
        top="0px"
        left="588px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(245,245,245,1)"
        {...getOverrideProps(overrides, "Right side")}
      ></View>
      <View
        width="588px"
        height="1024px"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundImage="linear-gradient(-90deg, rgba(39,148,248,1), rgba(175,208,232,1))"
        {...getOverrideProps(overrides, "Left side")}
      ></View>
      <MedicalStethoscope
        width="81px"
        height="81px"
        position="absolute"
        top="505px"
        left="71px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Medical/Stethoscope ")}
      ></MedicalStethoscope>
      <Text
        fontFamily="Montserrat"
        fontSize="72px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="84.375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="468px"
        left="189px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Doctor’s &#xA;Portal"
        {...getOverrideProps(overrides, "Doctor\u2019s Portal")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="385px"
        height="356px"
        position="absolute"
        top="409px"
        left="832px"
        {...getOverrideProps(overrides, "Login Form")}
      >
        <View
          width="385px"
          height="317px"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Card")}
        ></View>
        <Inputfield
          width="325px"
          height="40px"
          position="absolute"
          top="59px"
          left="30px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Input field")}
        ></Inputfield>
        <View
          position="absolute"
          top="41.57%"
          bottom="47.19%"
          left="7.79%"
          right="7.79%"
          borderRadius="10px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(234,234,234,1)"
          {...getOverrideProps(overrides, "input")}
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
          top="44.38%"
          bottom="50.28%"
          left="11.69%"
          right="68.83%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="••••••••"
          {...getOverrideProps(
            overrides,
            "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
          )}
        ></Text>
        <Icon
          width="1px"
          height="18px"
          viewBox={{ minX: 0, minY: 0, width: 1, height: 18 }}
          paths={[
            {
              d: "M0 0L18 0L18 -1L0 -1L0 0Z",
              stroke: "rgba(153,153,153,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ]}
          position="absolute"
          top="44.66%"
          bottom="55.34%"
          left="31.17%"
          right="64.16%"
          transformOrigin="top left"
          transform="rotate(90deg)"
          {...getOverrideProps(overrides, "Line 1")}
        ></Icon>
        <View
          padding="0px 0px 0px 0px"
          width="325px"
          height="40px"
          position="absolute"
          top="247px"
          left="30px"
          {...getOverrideProps(overrides, "Button Sign In")}
        >
          <Buttonprimary
            width="325px"
            height="40px"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Button primary")}
          ></Buttonprimary>
          <Text
            fontFamily="Montserrat"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="18.75px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="101.96px"
            height="21.71px"
            position="absolute"
            top="9px"
            left="112.58px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Sign In"
            {...getOverrideProps(overrides, "Sign In212")}
          ></Text>
        </View>
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
          top="30px"
          left="30px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Email address"
          {...getOverrideProps(overrides, "Email address")}
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
          top="69px"
          left="45px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="suryawigunaa@gmail.com"
          {...getOverrideProps(overrides, "suryawigunaa@gmail.com")}
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
          top="119px"
          left="30px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Password"
          {...getOverrideProps(overrides, "Password")}
        ></Text>
        <Text
          fontFamily="Lato"
          fontSize="16px"
          fontWeight="400"
          color="rgba(52,107,212,1)"
          lineHeight="18.75px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="208px"
          left="31px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Forgot password?"
          {...getOverrideProps(overrides, "Forgot password?")}
        ></Text>
        <Text
          fontFamily="Lato"
          fontSize="16px"
          fontWeight="400"
          color="rgba(133,133,133,1)"
          lineHeight="18.75px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="337px"
          left="62px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Don’t have an account? Register here"
          {...getOverrideProps(
            overrides,
            "Don\u2019t have an account? Register here"
          )}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="180px"
        height="30px"
        position="absolute"
        top="354px"
        left="832px"
        {...getOverrideProps(overrides, "Google Sign In")}
      >
        <White
          width="180px"
          height="30px"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "White77482")}
        ></White>
        <Text
          fontFamily="Montserrat"
          fontSize="12px"
          fontWeight="400"
          color="rgba(133,133,133,1)"
          lineHeight="14.0625px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="center"
          position="absolute"
          top="8px"
          left="43px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sign in with Google"
          {...getOverrideProps(overrides, "Sign in with Google")}
        ></Text>
        <View
          width="14px"
          height="14px"
          position="absolute"
          top="8px"
          left="19px"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "google-icon 1")}
        >
          <Icon
            width="6.8531646728515625px"
            height="6.5573883056640625px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 6.8531646728515625,
              height: 6.5573883056640625,
            }}
            paths={[
              {
                d: "M6.85317 1.42618C6.85317 0.85261 6.80554 0.434053 6.70247 0L0 0L0 2.58882L3.9342 2.58882C3.85491 3.23218 3.42658 4.20107 2.47474 4.85212L2.46139 4.93879L4.58059 6.54307L4.72741 6.55739C6.07581 5.34046 6.85317 3.54996 6.85317 1.42618Z",
                fill: "rgba(66,133,244,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="40.75%"
            bottom="12.41%"
            left="51%"
            right="0.05%"
            {...getOverrideProps(overrides, "Vector36")}
          ></Icon>
          <Icon
            width="11.10467529296875px"
            height="5.59625244140625px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 11.10467529296875,
              height: 5.59625244140625,
            }}
            paths={[
              {
                d: "M6.37727 5.59626C8.3047 5.59626 9.92279 4.97614 11.1047 3.90653L8.85201 2.20126C8.2492 2.61207 7.44012 2.89885 6.37727 2.89885C4.48949 2.89885 2.88726 1.68198 2.3161 0L2.23239 0.00694683L0.0288173 1.67343L0 1.75171C1.17391 4.0305 3.58522 5.59626 6.37727 5.59626Z",
                fill: "rgba(52,168,83,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="59.68%"
            bottom="0.34%"
            left="5.44%"
            right="15.24%"
            {...getOverrideProps(overrides, "Vector37")}
          ></Icon>
          <Icon
            width="3.077545166015625px"
            height="6.2967987060546875px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 3.077545166015625,
              height: 6.2967987060546875,
            }}
            paths={[
              {
                d: "M3.07755 4.54508C2.92685 4.11103 2.83963 3.64593 2.83963 3.16539C2.83963 2.68479 2.92685 2.21975 3.06962 1.7857L3.06563 1.69325L0.834445 0L0.761445 0.0339314C0.27762 0.979573 0 2.04149 0 3.16539C0 4.28929 0.27762 5.35115 0.761445 6.2968L3.07755 4.54508Z",
                fill: "rgba(251,188,5,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="27.22%"
            bottom="27.8%"
            left="0%"
            right="78.01%"
            {...getOverrideProps(overrides, "Vector38")}
          ></Icon>
          <Icon
            width="11.152252197265625px"
            height="5.59625244140625px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 11.152252197265625,
              height: 5.59625244140625,
            }}
            paths={[
              {
                d: "M6.37727 2.69735C7.71774 2.69735 8.62196 3.26317 9.13756 3.73602L11.1523 1.81375C9.91491 0.689847 8.3047 0 6.37727 0C3.58522 0 1.17391 1.5657 0 3.8445L2.30818 5.59626C2.88726 3.91428 4.48949 2.69735 6.37727 2.69735Z",
                fill: "rgba(235,67,53,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="0%"
            bottom="60.03%"
            left="5.44%"
            right="14.9%"
            {...getOverrideProps(overrides, "Vector39")}
          ></Icon>
        </View>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="180px"
        height="30px"
        position="absolute"
        top="354px"
        left="1037px"
        {...getOverrideProps(overrides, "Apple Sign In")}
      >
        <White
          width="180px"
          height="30px"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "White17159")}
        ></White>
        <Text
          fontFamily="Montserrat"
          fontSize="12px"
          fontWeight="400"
          color="rgba(133,133,133,1)"
          lineHeight="14.0625px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="center"
          position="absolute"
          top="8px"
          left="46px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sign in with Apple"
          {...getOverrideProps(overrides, "Sign in with Apple")}
        ></Text>
        <View
          width="11.5px"
          height="14px"
          position="absolute"
          top="7px"
          left="24px"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "apple 1")}
        >
          <Icon
            width="11.5px"
            height="13.999435424804688px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 11.5,
              height: 13.999435424804688,
            }}
            paths={[
              {
                d: "M6.34516 1.21827C7.27201 0.00591045 8.56055 0 8.56055 0C8.56055 0 8.75222 1.13982 7.83144 2.23783C6.84828 3.41026 5.73078 3.21841 5.73078 3.21841C5.73078 3.21841 5.52094 2.29634 6.34516 1.21827ZM5.84866 4.01685C6.32548 4.01685 7.21043 3.36638 8.36232 3.36638C10.3451 3.36638 11.1251 4.76656 11.1251 4.76656C11.1251 4.76656 9.59954 5.54064 9.59954 7.41892C9.59954 9.53778 11.5 10.268 11.5 10.268C11.5 10.268 10.1715 13.9789 8.37708 13.9789C7.55292 13.9789 6.91217 13.4277 6.04378 13.4277C5.15883 13.4277 4.28065 13.9994 3.70868 13.9994C2.0701 13.9995 0 10.4793 0 7.64973C0 4.86579 1.7522 3.40538 3.39569 3.40538C4.46411 3.40538 5.29321 4.01685 5.84866 4.01685Z",
                fill: "rgba(153,153,153,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="0.01%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Vector418")}
          ></Icon>
        </View>
      </View>
      <Text
        fontFamily="Montserrat"
        fontSize="36px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="42.1875px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="260px"
        left="832px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Sign In"
        {...getOverrideProps(overrides, "Sign In24")}
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
        top="309px"
        left="832px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Sign in to your account"
        {...getOverrideProps(overrides, "Sign in to your account")}
      ></Text>
    </View>
  );
}
