/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
import White from "./White";
export default function Dashboard(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="1024px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(245,245,245,1)"
      {...rest}
      {...getOverrideProps(overrides, "Dashboard")}
    >
      <View
        width="280px"
        height="944px"
        position="absolute"
        top="40px"
        left="40px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Navigation")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        width="221.05px"
        height="120px"
        position="absolute"
        top="129px"
        left="637.89px"
        {...getOverrideProps(overrides, "Total Transactions")}
      >
        <View
          width="221.05px"
          height="120px"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Card2113")}
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
          width="141px"
          height="30px"
          position="absolute"
          top="45px"
          left="25.11px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Workouts in Progress"
          {...getOverrideProps(overrides, "Workouts in Progress")}
        ></Text>
        <Text
          fontFamily="Open Sans"
          fontSize="24px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="28.125px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="65.26px"
          position="absolute"
          top="67px"
          left="25.11px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="9"
          {...getOverrideProps(overrides, "9")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="221.05px"
        height="120px"
        position="absolute"
        top="129px"
        left="380px"
        {...getOverrideProps(overrides, "Total Revenues")}
      >
        <View
          width="221.05px"
          height="120px"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Card2121")}
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
          width="124px"
          position="absolute"
          top="45px"
          left="25px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Patients Active"
          {...getOverrideProps(overrides, "Patients Active")}
        ></Text>
        <Text
          fontFamily="Open Sans"
          fontSize="24px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="28.125px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="124px"
          position="absolute"
          top="67px"
          left="25px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="18"
          {...getOverrideProps(overrides, "18")}
        ></Text>
        <Icon
          width="26.399993896484375px"
          height="24px"
          viewBox={{ minX: 0, minY: 0, width: 26.399993896484375, height: 24 }}
          paths={[
            {
              d: "M13.2 12C12.488 12 11.792 12.2111 11.1999 12.6067C10.6079 13.0023 10.1465 13.5645 9.87403 14.2223C9.60156 14.8802 9.53026 15.604 9.66917 16.3023C9.80808 17.0007 10.1509 17.6421 10.6544 18.1456C11.1579 18.6491 11.7993 18.9919 12.4977 19.1308C13.196 19.2697 13.9198 19.1984 14.5777 18.926C15.2355 18.6535 15.7977 18.1921 16.1933 17.6001C16.5889 17.008 16.8 16.312 16.8 15.6C16.8 14.6452 16.4207 13.7295 15.7456 13.0544C15.0705 12.3793 14.1548 12 13.2 12ZM13.2 16.8C12.9627 16.8 12.7307 16.7296 12.5333 16.5978C12.336 16.4659 12.1822 16.2785 12.0913 16.0592C12.0005 15.8399 11.9768 15.5987 12.0231 15.3659C12.0694 15.1331 12.1836 14.9193 12.3515 14.7515C12.5193 14.5836 12.7331 14.4694 12.9659 14.4231C13.1987 14.3768 13.4399 14.4005 13.6592 14.4913C13.8785 14.5822 14.0659 14.736 14.1978 14.9333C14.3296 15.1307 14.4 15.3627 14.4 15.6C14.4 15.9183 14.2736 16.2235 14.0485 16.4485C13.8235 16.6736 13.5183 16.8 13.2 16.8ZM12.348 9.252C12.4621 9.36125 12.5967 9.44689 12.744 9.504C12.8876 9.56749 13.043 9.60028 13.2 9.60028C13.357 9.60028 13.5124 9.56749 13.656 9.504C13.8033 9.44689 13.9379 9.36125 14.052 9.252L16.8 6.552C17.0323 6.31967 17.1628 6.00456 17.1628 5.676C17.1628 5.34744 17.0323 5.03233 16.8 4.8C16.5677 4.56767 16.2526 4.43715 15.924 4.43715C15.5954 4.43715 15.2803 4.56767 15.048 4.8L14.4 5.508L14.4 1.2C14.4 0.88174 14.2736 0.576515 14.0485 0.351472C13.8235 0.126428 13.5183 7.99361e-16 13.2 0C12.8817 7.99361e-16 12.5765 0.126428 12.3515 0.351472C12.1264 0.576515 12 0.88174 12 1.2L12 5.508L11.352 4.8C11.1197 4.56767 10.8046 4.43715 10.476 4.43715C10.1474 4.43715 9.83233 4.56767 9.6 4.8C9.36767 5.03233 9.23715 5.34744 9.23715 5.676C9.23715 6.00456 9.36767 6.31967 9.6 6.552L12.348 9.252ZM21.6 15.6C21.6 15.3627 21.5296 15.1307 21.3978 14.9333C21.2659 14.736 21.0785 14.5822 20.8592 14.4913C20.6399 14.4005 20.3987 14.3768 20.1659 14.4231C19.9331 14.4694 19.7193 14.5836 19.5515 14.7515C19.3836 14.9193 19.2694 15.1331 19.2231 15.3659C19.1768 15.5987 19.2005 15.8399 19.2913 16.0592C19.3822 16.2785 19.536 16.4659 19.7333 16.5978C19.9307 16.7296 20.1627 16.8 20.4 16.8C20.7183 16.8 21.0235 16.6736 21.2485 16.4485C21.4736 16.2235 21.6 15.9183 21.6 15.6ZM22.8 7.2L19.2 7.2C18.8817 7.2 18.5765 7.32643 18.3515 7.55147C18.1264 7.77652 18 8.08174 18 8.4C18 8.71826 18.1264 9.02348 18.3515 9.24853C18.5765 9.47357 18.8817 9.6 19.2 9.6L22.8 9.6C23.1183 9.6 23.4235 9.72643 23.6485 9.95147C23.8736 10.1765 24 10.4817 24 10.8L24 20.4C24 20.7183 23.8736 21.0235 23.6485 21.2485C23.4235 21.4736 23.1183 21.6 22.8 21.6L3.6 21.6C3.28174 21.6 2.97652 21.4736 2.75147 21.2485C2.52643 21.0235 2.4 20.7183 2.4 20.4L2.4 10.8C2.4 10.4817 2.52643 10.1765 2.75147 9.95147C2.97652 9.72643 3.28174 9.6 3.6 9.6L7.2 9.6C7.51826 9.6 7.82348 9.47357 8.04853 9.24853C8.27357 9.02348 8.4 8.71826 8.4 8.4C8.4 8.08174 8.27357 7.77652 8.04853 7.55147C7.82348 7.32643 7.51826 7.2 7.2 7.2L3.6 7.2C2.64522 7.2 1.72955 7.57928 1.05442 8.25442C0.379285 8.92955 1.06581e-15 9.84522 0 10.8L0 20.4C7.99361e-16 21.3548 0.379285 22.2705 1.05442 22.9456C1.72955 23.6207 2.64522 24 3.6 24L22.8 24C23.7548 24 24.6705 23.6207 25.3456 22.9456C26.0207 22.2705 26.4 21.3548 26.4 20.4L26.4 10.8C26.4 9.84522 26.0207 8.92955 25.3456 8.25442C24.6705 7.57928 23.7548 7.2 22.8 7.2ZM4.8 15.6C4.8 15.8373 4.87038 16.0693 5.00224 16.2667C5.13409 16.464 5.32151 16.6178 5.54078 16.7087C5.76005 16.7995 6.00133 16.8232 6.23411 16.7769C6.46689 16.7306 6.6807 16.6164 6.84853 16.4485C7.01635 16.2807 7.13064 16.0669 7.17694 15.8341C7.22324 15.6013 7.19948 15.3601 7.10865 15.1408C7.01783 14.9215 6.86402 14.7341 6.66668 14.6022C6.46934 14.4704 6.23734 14.4 6 14.4C5.68174 14.4 5.37652 14.5264 5.15147 14.7515C4.92643 14.9765 4.8 15.2817 4.8 15.6Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="16.67%"
          bottom="63.33%"
          left="76.45%"
          right="11.6%"
          {...getOverrideProps(overrides, "Vector412756")}
        ></Icon>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="221.05px"
        height="120px"
        position="absolute"
        top="129px"
        left="895.79px"
        {...getOverrideProps(overrides, "Total Likes")}
      >
        <View
          width="221.05px"
          height="120px"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Card2118")}
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
          width="141px"
          height="30px"
          position="absolute"
          top="45px"
          left="25.21px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Workouts Completed"
          {...getOverrideProps(overrides, "Workouts Completed")}
        ></Text>
        <Text
          fontFamily="Open Sans"
          fontSize="24px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="28.125px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="65.26px"
          position="absolute"
          top="67px"
          left="25.58px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="10"
          {...getOverrideProps(overrides, "10")}
        ></Text>
        <Icon
          width="23.298126220703125px"
          height="24px"
          viewBox={{ minX: 0, minY: 0, width: 23.298126220703125, height: 24 }}
          paths={[
            {
              d: "M22.538 12.6334C23.0273 11.9869 23.2981 11.1948 23.2981 10.3706C23.2981 9.06299 22.5671 7.82528 21.3906 7.13507C21.0877 6.95741 20.7428 6.8639 20.3917 6.86423L13.4081 6.86423L13.5828 3.28506C13.6236 2.42011 13.3178 1.59886 12.7237 0.972718C12.4321 0.6641 12.0804 0.418552 11.6902 0.251249C11.3 0.0839457 10.8796 -0.0015581 10.455 2.1493e-05C8.94066 2.1493e-05 7.60101 1.01931 7.19912 2.47836L4.69748 11.5355L0.931925 11.5355C0.416454 11.5355 0 11.952 0 12.4674L0 23.0681C0 23.5835 0.416454 24 0.931925 24L18.4434 24C18.7113 24 18.9734 23.9476 19.2151 23.8427C20.6014 23.2515 21.4954 21.8973 21.4954 20.3946C21.4954 20.0277 21.443 19.6665 21.3382 19.3171C21.8274 18.6706 22.0983 17.8784 22.0983 17.0542C22.0983 16.6873 22.0459 16.3262 21.941 15.9767C22.4303 15.3302 22.7011 14.5381 22.7011 13.7139C22.6953 13.3469 22.6429 12.9829 22.538 12.6334ZM2.09683 21.9032L2.09683 13.6323L4.45577 13.6323L4.45577 21.9032L2.09683 21.9032ZM20.6305 11.6229L19.9927 12.1762L20.3975 12.9159C20.5309 13.1596 20.6 13.4332 20.5985 13.711C20.5985 14.1915 20.3888 14.6487 20.0277 14.9632L19.3899 15.5166L19.7947 16.2563C19.928 16.5 19.9972 16.7736 19.9956 17.0513C19.9956 17.5319 19.7859 17.9891 19.4248 18.3036L18.787 18.8569L19.1918 19.5967C19.3252 19.8403 19.3943 20.1139 19.3928 20.3917C19.3928 21.0441 19.0084 21.6323 18.4143 21.9003L6.31962 21.9003L6.31962 13.5391L9.21732 3.04043C9.29204 2.77133 9.45244 2.53393 9.67421 2.36419C9.89598 2.19445 10.167 2.10162 10.4463 2.09976C10.6676 2.09976 10.886 2.16383 11.0608 2.29489C11.3491 2.51039 11.5034 2.83657 11.486 3.18313L11.2064 8.96106L20.3626 8.96106C20.8809 9.2785 21.2013 9.81436 21.2013 10.3706C21.2013 10.8511 20.9916 11.3054 20.6305 11.6229Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="16.67%"
          bottom="63.33%"
          left="77.9%"
          right="11.56%"
          {...getOverrideProps(overrides, "Vector412758")}
        ></Icon>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="221.05px"
        height="120px"
        position="absolute"
        top="129px"
        left="1158.95px"
        {...getOverrideProps(overrides, "Total Users")}
      >
        <View
          width="221.05px"
          height="120px"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Card2120")}
        ></View>
        <Icon
          width="36.81585693359375px"
          height="24px"
          viewBox={{ minX: 0, minY: 0, width: 36.81585693359375, height: 24 }}
          paths={[
            {
              d: "M17.258 16.762C18.8939 15.6753 20.1365 14.0908 20.802 12.243C21.4674 10.3952 21.5202 8.38221 20.9526 6.50202C20.3851 4.62183 19.2273 2.97432 17.6506 1.80331C16.0739 0.632294 14.1621 0 12.1981 0C10.2341 -3.24885e-15 8.32234 0.632294 6.74566 1.80331C5.16897 2.97432 4.01117 4.62183 3.44361 6.50202C2.87605 8.38221 2.92889 10.3952 3.5943 12.243C4.25971 14.0908 5.50235 15.6753 7.1383 16.762C4.34954 17.7907 1.93924 19.6426 0.226895 22.0723C0.133477 22.2032 0.066866 22.3512 0.0308976 22.508C-0.00507071 22.6647 -0.00968636 22.827 0.0173165 22.9855C0.0443194 23.144 0.102407 23.2956 0.188236 23.4316C0.274066 23.5675 0.385941 23.6852 0.517422 23.7777C0.648903 23.8703 0.797392 23.9359 0.954343 23.9709C1.11129 24.0058 1.2736 24.0094 1.43193 23.9813C1.59026 23.9533 1.74148 23.8942 1.87688 23.8075C2.01229 23.7208 2.1292 23.6081 2.22089 23.476C3.34616 21.8752 4.84008 20.5687 6.57652 19.6668C8.31297 18.7648 10.2409 18.2939 12.1977 18.2939C14.1544 18.2938 16.0824 18.7646 17.8189 19.6664C19.5554 20.5683 21.0494 21.8747 22.1748 23.4754C22.2669 23.6065 22.3839 23.7182 22.5192 23.8041C22.6545 23.8899 22.8054 23.9483 22.9633 23.9758C23.1211 24.0032 23.2828 23.9994 23.4392 23.9643C23.5956 23.9293 23.7435 23.8637 23.8745 23.7715C24.0055 23.6792 24.117 23.562 24.2027 23.4266C24.2884 23.2912 24.3466 23.1403 24.3739 22.9824C24.4012 22.8245 24.3972 22.6628 24.3619 22.5065C24.3267 22.3501 24.261 22.2023 24.1686 22.0714C22.4563 19.6421 20.0463 17.7905 17.258 16.7618L17.258 16.762ZM5.49195 9.14935C5.49195 7.82301 5.88525 6.52645 6.62213 5.42364C7.35901 4.32082 8.40636 3.46129 9.63174 2.95372C10.8571 2.44615 12.2055 2.31335 13.5063 2.5721C14.8072 2.83086 16.0021 3.46955 16.94 4.40742C17.8778 5.34528 18.5165 6.5402 18.7753 7.84105C19.0341 9.14191 18.9013 10.4903 18.3937 11.7157C17.8861 12.941 17.0266 13.9884 15.9238 14.7253C14.821 15.4621 13.5244 15.8555 12.1981 15.8555C10.4201 15.8534 8.71555 15.1463 7.45835 13.8891C6.20115 12.6319 5.49397 10.9273 5.49195 9.14935ZM36.2986 23.7705C36.1677 23.8627 36.0199 23.9282 35.8636 23.9633C35.7074 23.9984 35.5458 24.0023 35.388 23.9749C35.2302 23.9476 35.0794 23.8894 34.9442 23.8037C34.8089 23.718 34.6918 23.6065 34.5996 23.4756C33.4729 21.8763 31.9787 20.5709 30.2426 19.6692C28.5065 18.7676 26.5792 18.2959 24.6229 18.294C24.2996 18.294 23.9894 18.1656 23.7608 17.9369C23.5321 17.7083 23.4036 17.3981 23.4036 17.0747C23.4036 16.7514 23.5321 16.4412 23.7608 16.2126C23.9894 15.9839 24.2996 15.8555 24.6229 15.8555C25.5806 15.8544 26.5269 15.6482 27.3982 15.2508C28.2694 14.8535 29.0455 14.2741 29.6742 13.5517C30.3028 12.8293 30.7695 11.9807 31.0427 11.0628C31.316 10.145 31.3895 9.17931 31.2583 8.23071C31.1271 7.28211 30.7943 6.3726 30.2822 5.56338C29.7701 4.75416 29.0907 4.064 28.2896 3.53933C27.4885 3.01466 26.5843 2.66765 25.6378 2.52165C24.6914 2.37565 23.7247 2.43404 22.8027 2.6929C22.4918 2.77911 22.1595 2.73862 21.8784 2.58029C21.5973 2.42196 21.3905 2.15869 21.3031 1.84815C21.2157 1.53761 21.255 1.20511 21.4123 0.923458C21.5696 0.641807 21.8321 0.433966 22.1423 0.345454C24.2398 -0.24633 26.4797 -0.0694359 28.4583 0.844256C30.4368 1.75795 32.024 3.34834 32.9336 5.32879C33.8433 7.30924 34.0156 9.54948 33.4196 11.6458C32.8235 13.742 31.4983 15.5564 29.6827 16.762C32.4711 17.7906 34.8812 19.6423 36.5935 22.0716C36.7797 22.336 36.8532 22.6635 36.7979 22.9821C36.7426 23.3007 36.563 23.5843 36.2986 23.7705Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="16.67%"
          bottom="63.33%"
          left="71.95%"
          right="11.39%"
          {...getOverrideProps(overrides, "Vector412760")}
        ></Icon>
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
          width="85.26px"
          position="absolute"
          top="45px"
          left="25.58px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Total Patients"
          {...getOverrideProps(overrides, "Total Patients")}
        ></Text>
        <Text
          fontFamily="Open Sans"
          fontSize="24px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="28.125px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="44.21px"
          position="absolute"
          top="67px"
          left="25.58px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="20"
          {...getOverrideProps(overrides, "20")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="1000px"
        height="359px"
        position="absolute"
        top="289px"
        left="380px"
        {...getOverrideProps(overrides, "Activities card")}
      >
        <View
          width="1000px"
          height="359px"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Card2148")}
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
          width="42px"
          position="absolute"
          top="49px"
          left="808px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Guest"
          {...getOverrideProps(overrides, "Guest")}
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
          width="34px"
          position="absolute"
          top="49px"
          left="906px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="User"
          {...getOverrideProps(overrides, "User")}
        ></Text>
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
          width="93px"
          position="absolute"
          top="30px"
          left="40px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Activities"
          {...getOverrideProps(overrides, "Activities")}
        ></Text>
        <View
          padding="0px 0px 0px 0px"
          width="124px"
          height="17px"
          position="absolute"
          top="57px"
          left="40px"
          {...getOverrideProps(overrides, "Group 7224")}
        >
          <Text
            fontFamily="Montserrat"
            fontSize="14px"
            fontWeight="400"
            color="rgba(133,133,133,1)"
            lineHeight="16.40625px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="111px"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="May - June 2021"
            {...getOverrideProps(overrides, "May - June 2021220")}
          ></Text>
          <Icon
            width="8px"
            height="5px"
            viewBox={{ minX: 0, minY: 0, width: 8, height: 5 }}
            paths={[
              {
                d: "M0.218599 0.255719C0.5193 -0.0722496 0.937938 -0.097987 1.30554 0.255719L4.00082 3.0111L6.69609 0.255719C7.0637 -0.097987 7.48302 -0.0722496 7.78166 0.255719C8.08236 0.582952 8.06305 1.13594 7.78166 1.44332C7.50164 1.7507 4.5436 4.75389 4.5436 4.75389C4.47316 4.83173 4.38873 4.89364 4.29536 4.93592C4.20198 4.97821 4.10157 5 4.00013 5C3.89868 5 3.79827 4.97821 3.7049 4.93592C3.61152 4.89364 3.5271 4.83173 3.45666 4.75389C3.45666 4.75389 0.499989 1.7507 0.218599 1.44332C-0.0634812 1.13594 -0.0821026 0.582952 0.218599 0.255719Z",
                fill: "rgba(133,133,133,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="47.06%"
            bottom="23.53%"
            left="93.55%"
            right="0%"
            {...getOverrideProps(overrides, "Vector412772")}
          ></Icon>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="921px"
          height="212px"
          position="absolute"
          top="105px"
          left="40px"
          {...getOverrideProps(overrides, "Chart")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="921px"
            height="17px"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Group 8")}
          >
            <Text
              fontFamily="Lato"
              fontSize="14px"
              fontWeight="400"
              color="rgba(133,133,133,1)"
              lineHeight="16.40625px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              width="25.34px"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="500"
              {...getOverrideProps(overrides, "500")}
            ></Text>
            <Icon
              width="881px"
              height="0px"
              viewBox={{ minX: 0, minY: 0, width: 881, height: 1 }}
              paths={[
                {
                  d: "M0 0L881 0L881 -1L0 -1L0 0Z",
                  stroke: "rgba(234,234,234,1)",
                  fillRule: "nonzero",
                  strokeWidth: 1,
                },
              ]}
              position="absolute"
              top="10px"
              left="40px"
              transformOrigin="top left"
              transform="rotate(0deg)"
              {...getOverrideProps(overrides, "Line 5226")}
            ></Icon>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="921px"
            height="17px"
            position="absolute"
            top="78px"
            left="0px"
            {...getOverrideProps(overrides, "Group 10")}
          >
            <Text
              fontFamily="Lato"
              fontSize="14px"
              fontWeight="400"
              color="rgba(133,133,133,1)"
              lineHeight="16.40625px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              width="25.34px"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="300"
              {...getOverrideProps(overrides, "300")}
            ></Text>
            <Icon
              width="881px"
              height="0px"
              viewBox={{ minX: 0, minY: 0, width: 881, height: 1 }}
              paths={[
                {
                  d: "M0 0L881 0L881 -1L0 -1L0 0Z",
                  stroke: "rgba(234,234,234,1)",
                  fillRule: "nonzero",
                  strokeWidth: 1,
                },
              ]}
              position="absolute"
              top="10px"
              left="40px"
              transformOrigin="top left"
              transform="rotate(0deg)"
              {...getOverrideProps(overrides, "Line 52215")}
            ></Icon>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="921px"
            height="17px"
            position="absolute"
            top="39px"
            left="0px"
            {...getOverrideProps(overrides, "Group 9")}
          >
            <Text
              fontFamily="Lato"
              fontSize="14px"
              fontWeight="400"
              color="rgba(133,133,133,1)"
              lineHeight="16.40625px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              width="25.34px"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="400"
              {...getOverrideProps(overrides, "400")}
            ></Text>
            <Icon
              width="881px"
              height="0px"
              viewBox={{ minX: 0, minY: 0, width: 881, height: 1 }}
              paths={[
                {
                  d: "M0 0L881 0L881 -1L0 -1L0 0Z",
                  stroke: "rgba(234,234,234,1)",
                  fillRule: "nonzero",
                  strokeWidth: 1,
                },
              ]}
              position="absolute"
              top="10px"
              left="40px"
              {...getOverrideProps(overrides, "Line 52212")}
            ></Icon>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="921px"
            height="17px"
            position="absolute"
            top="117px"
            left="0px"
            {...getOverrideProps(overrides, "Group 11")}
          >
            <Text
              fontFamily="Lato"
              fontSize="14px"
              fontWeight="400"
              color="rgba(133,133,133,1)"
              lineHeight="16.40625px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              width="25.34px"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="200"
              {...getOverrideProps(overrides, "200")}
            ></Text>
            <Icon
              width="881px"
              height="0px"
              viewBox={{ minX: 0, minY: 0, width: 881, height: 1 }}
              paths={[
                {
                  d: "M0 0L881 0L881 -1L0 -1L0 0Z",
                  stroke: "rgba(234,234,234,1)",
                  fillRule: "nonzero",
                  strokeWidth: 1,
                },
              ]}
              position="absolute"
              top="10px"
              left="40px"
              transformOrigin="top left"
              transform="rotate(0deg)"
              {...getOverrideProps(overrides, "Line 52218")}
            ></Icon>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="921px"
            height="17px"
            position="absolute"
            top="156px"
            left="0px"
            {...getOverrideProps(overrides, "Group 12")}
          >
            <Text
              fontFamily="Lato"
              fontSize="14px"
              fontWeight="400"
              color="rgba(133,133,133,1)"
              lineHeight="16.40625px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              width="25.34px"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="100"
              {...getOverrideProps(overrides, "100")}
            ></Text>
            <Icon
              width="881px"
              height="0px"
              viewBox={{ minX: 0, minY: 0, width: 881, height: 1 }}
              paths={[
                {
                  d: "M0 0L881 0L881 -1L0 -1L0 0Z",
                  stroke: "rgba(234,234,234,1)",
                  fillRule: "nonzero",
                  strokeWidth: 1,
                },
              ]}
              position="absolute"
              top="10px"
              left="40px"
              transformOrigin="top left"
              transform="rotate(0deg)"
              {...getOverrideProps(overrides, "Line 52221")}
            ></Icon>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="903.77px"
            height="17px"
            position="absolute"
            top="195px"
            left="17.23px"
            {...getOverrideProps(overrides, "Group 13")}
          >
            <Text
              fontFamily="Lato"
              fontSize="14px"
              fontWeight="400"
              color="rgba(133,133,133,1)"
              lineHeight="16.40625px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              width="9.12px"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="0"
              {...getOverrideProps(overrides, "0")}
            ></Text>
            <Icon
              width="881px"
              height="0px"
              viewBox={{ minX: 0, minY: 0, width: 881, height: 1 }}
              paths={[
                {
                  d: "M0 0L881 0L881 -1L0 -1L0 0Z",
                  stroke: "rgba(234,234,234,1)",
                  fillRule: "nonzero",
                  strokeWidth: 1,
                },
              ]}
              position="absolute"
              top="10px"
              left="22.77px"
              transformOrigin="top left"
              transform="rotate(0deg)"
              {...getOverrideProps(overrides, "Line 52224")}
            ></Icon>
          </View>
        </View>
        <Icon
          width="10px"
          height="10px"
          viewBox={{ minX: 0, minY: 0, width: 10, height: 10 }}
          paths={[
            {
              d: "M10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5Z",
              fill: "rgba(233,160,160,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="54px"
          left="787.53px"
          {...getOverrideProps(overrides, "Ellipse 3")}
        ></Icon>
        <Icon
          width="10px"
          height="10px"
          viewBox={{ minX: 0, minY: 0, width: 10, height: 10 }}
          paths={[
            {
              d: "M10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5Z",
              fill: "rgba(155,221,124,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="54px"
          left="885px"
          {...getOverrideProps(overrides, "Ellipse 4")}
        ></Icon>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="480px"
        height="256px"
        position="absolute"
        top="688px"
        left="380px"
        {...getOverrideProps(overrides, "Top Products Card")}
      >
        <View
          width="480px"
          height="256px"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Card2231")}
        ></View>
        <View
          padding="0px 0px 0px 0px"
          width="98px"
          height="36px"
          position="absolute"
          top="72px"
          left="244px"
          {...getOverrideProps(overrides, "1")}
        >
          <Icon
            width="11px"
            height="11px"
            viewBox={{ minX: 0, minY: 0, width: 11, height: 11 }}
            paths={[
              {
                d: "M11 5.5C11 8.53757 8.53757 11 5.5 11C2.46243 11 0 8.53757 0 5.5C0 2.46243 2.46243 0 5.5 0C8.53757 0 11 2.46243 11 5.5Z",
                fill: "rgba(81,155,208,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="3px"
            left="0px"
            {...getOverrideProps(overrides, "Ellipse 62612")}
          ></Icon>
          <Text
            fontFamily="Montserrat"
            fontSize="14px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="16.40625px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="0px"
            left="21px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Basic Tees"
            {...getOverrideProps(overrides, "Basic Tees")}
          ></Text>
          <Text
            fontFamily="Lato"
            fontSize="12px"
            fontWeight="400"
            color="rgba(133,133,133,1)"
            lineHeight="14.0625px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="22px"
            left="21px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="55%"
            {...getOverrideProps(overrides, "55%")}
          ></Text>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="97px"
          height="15px"
          position="absolute"
          top="31px"
          left="327px"
          {...getOverrideProps(overrides, "Group 72624")}
        >
          <Text
            fontFamily="Montserrat"
            fontSize="12px"
            fontWeight="400"
            color="rgba(133,133,133,1)"
            lineHeight="14.0625px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="97px"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="May - June 2021"
            {...getOverrideProps(overrides, "May - June 20212625")}
          ></Text>
        </View>
        <Icon
          width="8px"
          height="5px"
          viewBox={{ minX: 0, minY: 0, width: 8, height: 5 }}
          paths={[
            {
              d: "M0.218599 0.255719C0.5193 -0.0722496 0.937938 -0.097987 1.30554 0.255719L4.00082 3.0111L6.69609 0.255719C7.0637 -0.097987 7.48302 -0.0722496 7.78166 0.255719C8.08236 0.582952 8.06305 1.13594 7.78166 1.44332C7.50164 1.7507 4.5436 4.75389 4.5436 4.75389C4.47316 4.83173 4.38873 4.89364 4.29536 4.93592C4.20198 4.97821 4.10157 5 4.00013 5C3.89868 5 3.79827 4.97821 3.7049 4.93592C3.61152 4.89364 3.5271 4.83173 3.45666 4.75389C3.45666 4.75389 0.499989 1.7507 0.218599 1.44332C-0.0634812 1.13594 -0.0821026 0.582952 0.218599 0.255719Z",
              fill: "rgba(133,133,133,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="14.45%"
          bottom="83.59%"
          left="89.38%"
          right="8.96%"
          {...getOverrideProps(overrides, "Vector412773")}
        ></Icon>
        <View
          padding="0px 0px 0px 0px"
          width="168px"
          height="36px"
          position="absolute"
          top="129px"
          left="244px"
          {...getOverrideProps(overrides, "2")}
        >
          <Icon
            width="11px"
            height="11px"
            viewBox={{ minX: 0, minY: 0, width: 11, height: 11 }}
            paths={[
              {
                d: "M11 5.5C11 8.53757 8.53757 11 5.5 11C2.46243 11 0 8.53757 0 5.5C0 2.46243 2.46243 0 5.5 0C8.53757 0 11 2.46243 11 5.5Z",
                fill: "rgba(52,107,212,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="3px"
            left="0px"
            {...getOverrideProps(overrides, "Ellipse 62617")}
          ></Icon>
          <Text
            fontFamily="Montserrat"
            fontSize="14px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="16.40625px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="0px"
            left="21px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Custom Short Pants"
            {...getOverrideProps(overrides, "Custom Short Pants")}
          ></Text>
          <Text
            fontFamily="Lato"
            fontSize="12px"
            fontWeight="400"
            color="rgba(133,133,133,1)"
            lineHeight="14.0625px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="22px"
            left="21px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="31%"
            {...getOverrideProps(overrides, "31%")}
          ></Text>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="128px"
          height="36px"
          position="absolute"
          top="186px"
          left="244px"
          {...getOverrideProps(overrides, "3")}
        >
          <Icon
            width="11px"
            height="11px"
            viewBox={{ minX: 0, minY: 0, width: 11, height: 11 }}
            paths={[
              {
                d: "M11 5.5C11 8.53757 8.53757 11 5.5 11C2.46243 11 0 8.53757 0 5.5C0 2.46243 2.46243 0 5.5 0C8.53757 0 11 2.46243 11 5.5Z",
                fill: "rgba(160,201,232,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="3px"
            left="0px"
            {...getOverrideProps(overrides, "Ellipse 62621")}
          ></Icon>
          <Text
            fontFamily="Montserrat"
            fontSize="14px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="16.40625px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="0px"
            left="21px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Super Hoodies"
            {...getOverrideProps(overrides, "Super Hoodies")}
          ></Text>
          <Text
            fontFamily="Lato"
            fontSize="12px"
            fontWeight="400"
            color="rgba(133,133,133,1)"
            lineHeight="14.0625px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="22px"
            left="21px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="14%"
            {...getOverrideProps(overrides, "14%")}
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
          top="30px"
          left="40px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Top products"
          {...getOverrideProps(overrides, "Top products")}
        ></Text>
        <View
          padding="0px 0px 0px 0px"
          width="134px"
          height="134px"
          position="absolute"
          top="216px"
          left="194px"
          transformOrigin="top left"
          transform="rotate(180deg)"
          {...getOverrideProps(overrides, "Pie Chart")}
        >
          <Icon
            width="134px"
            height="134px"
            viewBox={{ minX: 0, minY: 0, width: 134, height: 134 }}
            paths={[
              {
                d: "M134 67C134 104.003 104.003 134 67 134C29.9969 134 0 104.003 0 67C0 29.9969 29.9969 0 67 0C104.003 0 134 29.9969 134 67Z",
                fill: "rgba(196,196,196,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Ellipse 5")}
          ></Icon>
          <View
            width="145.94px"
            height="145.94px"
            position="absolute"
            top="-5.31px"
            left="-6.63px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(81,155,208,1)"
            {...getOverrideProps(overrides, "Rectangle 6")}
          ></View>
          <Icon
            width="72.97px"
            height="72.97px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 72.97030639648438,
              height: 72.9703369140625,
            }}
            paths={[
              {
                d: "M59.0396 69.6535L72.9703 0L0 28.6425L0 72.9703L59.0396 69.6535Z",
                fill: "rgba(160,201,232,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="67.66px"
            left="-6.63px"
            {...getOverrideProps(overrides, "Vector 1")}
          ></Icon>
          <Icon
            width="72.31px"
            height="101.5px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 72.30693054199219,
              height: 101.4949951171875,
            }}
            paths={[
              {
                d: "M0 0L0 101.495L72.3069 73.6337L72.3069 0L0 0Z",
                fill: "rgba(52,107,212,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="-5.31px"
            left="-6.63px"
            {...getOverrideProps(overrides, "Vector 2")}
          ></Icon>
        </View>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="480px"
        height="256px"
        position="absolute"
        top="688px"
        left="900px"
        {...getOverrideProps(overrides, "Schedules Card")}
      >
        <View
          width="480px"
          height="256px"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Card2248")}
        ></View>
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
          top="30px"
          left="40px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Recent Messages"
          {...getOverrideProps(overrides, "Recent Messages")}
        ></Text>
        <View
          padding="0px 0px 0px 0px"
          width="195px"
          height="66px"
          position="absolute"
          top="77px"
          left="40px"
          {...getOverrideProps(overrides, "Group 19")}
        >
          <Text
            fontFamily="Lato"
            fontSize="14px"
            fontWeight="700"
            color="rgba(102,102,102,1)"
            lineHeight="16.40625px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="3px"
            left="15px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Harry Styles"
            {...getOverrideProps(overrides, "Harry Styles")}
          ></Text>
          <Text
            fontFamily="Lato"
            fontSize="12px"
            fontWeight="400"
            color="rgba(153,153,153,1)"
            lineHeight="14.0625px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="25px"
            left="15px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="01/04/22 15:38"
            {...getOverrideProps(overrides, "01/04/22 15:38")}
          ></Text>
          <Text
            fontFamily="Lato"
            fontSize="12px"
            fontWeight="400"
            color="rgba(153,153,153,1)"
            lineHeight="14.0625px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="44px"
            left="15px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="The workouts are too hard for me!"
            {...getOverrideProps(
              overrides,
              "The workouts are too hard for me!"
            )}
          ></Text>
          <Icon
            width="66px"
            height="0px"
            viewBox={{ minX: 0, minY: 0, width: 1, height: 66 }}
            paths={[
              {
                d: "M0 0L66 0L66 -5L0 -5L0 0Z",
                fillRule: "nonzero",
                strokeWidth: 5,
              },
            ]}
            position="absolute"
            top="0px"
            left="0px"
            transformOrigin="top left"
            transform="rotate(90deg)"
            {...getOverrideProps(overrides, "Line 62636")}
          ></Icon>
        </View>
        <Text
          fontFamily="Montserrat"
          fontSize="12px"
          fontWeight="400"
          color="rgba(133,133,133,1)"
          lineHeight="14.0625px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="34px"
          left="398px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="See All"
          {...getOverrideProps(overrides, "See All")}
        ></Text>
        <Icon
          width="5px"
          height="8px"
          viewBox={{ minX: 0, minY: 0, width: 5, height: 8 }}
          paths={[
            {
              d: "M0.218599 0.255719C0.5193 -0.0722496 0.937938 -0.097987 1.30554 0.255719L4.00082 3.0111L6.69609 0.255719C7.0637 -0.097987 7.48302 -0.0722496 7.78166 0.255719C8.08236 0.582952 8.06305 1.13594 7.78166 1.44332C7.50164 1.7507 4.5436 4.75389 4.5436 4.75389C4.47316 4.83173 4.38873 4.89364 4.29536 4.93592C4.20198 4.97821 4.10157 5 4.00013 5C3.89868 5 3.79827 4.97821 3.7049 4.93592C3.61152 4.89364 3.5271 4.83173 3.45666 4.75389C3.45666 4.75389 0.499989 1.7507 0.218599 1.44332C-0.0634812 1.13594 -0.0821026 0.582952 0.218599 0.255719Z",
              fill: "rgba(133,133,133,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="17.97%"
          bottom="80.08%"
          left="92.71%"
          right="5.63%"
          transformOrigin="top left"
          transform="rotate(-90deg)"
          {...getOverrideProps(overrides, "Vector412774")}
        ></Icon>
        <View
          padding="0px 0px 0px 0px"
          width="168px"
          height="66px"
          position="absolute"
          top="156px"
          left="40px"
          {...getOverrideProps(overrides, "Group 20")}
        >
          <Text
            fontFamily="Lato"
            fontSize="14px"
            fontWeight="700"
            color="rgba(102,102,102,1)"
            lineHeight="16.40625px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="3px"
            left="15px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Zayn Malik"
            {...getOverrideProps(overrides, "Zayn Malik")}
          ></Text>
          <Text
            fontFamily="Lato"
            fontSize="12px"
            fontWeight="400"
            color="rgba(153,153,153,1)"
            lineHeight="14.0625px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="25px"
            left="15px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="01/04/22 14:25"
            {...getOverrideProps(overrides, "01/04/22 14:25")}
          ></Text>
          <Text
            fontFamily="Lato"
            fontSize="12px"
            fontWeight="400"
            color="rgba(153,153,153,1)"
            lineHeight="14.0625px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="44px"
            left="15px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Feeling so much better today"
            {...getOverrideProps(overrides, "Feeling so much better today")}
          ></Text>
          <Icon
            width="66px"
            height="0px"
            viewBox={{ minX: 0, minY: 0, width: 1, height: 66 }}
            paths={[
              {
                d: "M0 0L66 0L66 -5L0 -5L0 0Z",
                stroke: "rgba(39,148,248,1)",
                fillRule: "nonzero",
                strokeWidth: 5,
              },
            ]}
            position="absolute"
            top="0px"
            left="0px"
            transformOrigin="top left"
            transform="rotate(90deg)"
            {...getOverrideProps(overrides, "Line 62644")}
          ></Icon>
        </View>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="648px"
        height="19px"
        position="absolute"
        top="604px"
        left="559px"
        {...getOverrideProps(overrides, "chart_weeks")}
      >
        <Text
          fontFamily="Lato"
          fontSize="14px"
          fontWeight="400"
          color="rgba(133,133,133,1)"
          lineHeight="16.40625px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Week 1"
          {...getOverrideProps(overrides, "Week 1")}
        ></Text>
        <Text
          fontFamily="Open Sans"
          fontSize="14px"
          fontWeight="400"
          color="rgba(133,133,133,1)"
          lineHeight="16.40625px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="0px"
          left="200px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Week 2"
          {...getOverrideProps(overrides, "Week 2")}
        ></Text>
        <Text
          fontFamily="Open Sans"
          fontSize="14px"
          fontWeight="400"
          color="rgba(133,133,133,1)"
          lineHeight="16.40625px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="0px"
          left="400px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Week 3"
          {...getOverrideProps(overrides, "Week 3")}
        ></Text>
        <Text
          fontFamily="Open Sans"
          fontSize="14px"
          fontWeight="400"
          color="rgba(133,133,133,1)"
          lineHeight="16.40625px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="0px"
          left="600px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Week 4"
          {...getOverrideProps(overrides, "Week 4")}
        ></Text>
      </View>
      <Icon
        width="877.5px"
        height="95px"
        viewBox={{ minX: 0, minY: 0, width: 877.5, height: 95 }}
        paths={[
          {
            d: "M878.47 1.14402C879.102 0.608205 879.18 -0.338348 878.644 -0.97017C878.108 -1.60199 877.162 -1.67983 876.53 -1.14402L878.47 1.14402ZM-1.27631 94.2119C-1.71154 94.9168 -1.49294 95.8411 -0.788058 96.2763C-0.0831715 96.7115 0.841077 96.4929 1.27631 95.7881L-1.27631 94.2119ZM877.5 0C876.53 -1.14402 876.53 -1.14385 876.529 -1.14335C876.528 -1.14275 876.527 -1.14192 876.526 -1.14071C876.523 -1.1383 876.519 -1.13458 876.513 -1.12956C876.501 -1.11952 876.483 -1.10428 876.459 -1.08393C876.41 -1.04324 876.338 -0.982093 876.241 -0.90116C876.048 -0.739294 875.76 -0.498277 875.38 -0.183387C874.62 0.4464 873.495 1.37165 872.037 2.55014C869.12 4.9072 864.872 8.2769 859.553 12.3216C848.914 20.4123 833.997 31.1979 816.888 41.981C799.774 52.7665 780.492 63.5332 761.119 71.5996C741.729 79.673 722.344 85 705 85L705 88C722.906 88 742.709 82.5145 762.272 74.3691C781.852 66.2168 801.288 55.3585 818.487 44.519C835.69 33.6771 850.68 22.8377 861.369 14.7096C866.714 10.645 870.985 7.25686 873.922 4.88345C875.391 3.69671 876.526 2.76356 877.295 2.12626C877.679 1.8076 877.972 1.5629 878.169 1.39744C878.268 1.3147 878.343 1.25178 878.393 1.20932C878.418 1.18809 878.437 1.17198 878.45 1.16107C878.456 1.15561 878.461 1.15146 878.465 1.14861C878.466 1.14719 878.468 1.14604 878.469 1.14533C878.47 1.14451 878.47 1.14402 877.5 0ZM705 85C674.471 85 645.03 77.4304 615.374 69.7973C585.78 62.1804 555.971 54.5 525 54.5L525 57.5C555.529 57.5 584.97 65.0696 614.626 72.7027C644.22 80.3196 674.029 88 705 88L705 85ZM525 54.5C494.038 54.5 454.091 63.93 413.724 73.2888C373.236 82.6754 332.293 92 299 92L299 95C332.707 95 374.014 85.5746 414.401 76.2112C454.909 66.82 494.462 57.5 525 57.5L525 54.5ZM299 92C282.507 92 264.888 87.5041 246.818 80.6902C228.754 73.8782 210.335 64.7874 192.238 55.6607C174.17 46.5486 156.404 37.3907 139.752 30.5197C123.114 23.6546 107.425 19.0001 93.5 19.0001L93.5 22.0001C106.825 22.0001 122.073 26.4706 138.608 33.2929C155.127 40.1094 172.768 49.2015 190.887 58.3394C208.977 67.4626 227.527 76.6219 245.76 83.4973C263.987 90.3709 281.993 95 299 95L299 92ZM93.5 19.0001C81.2372 19.0001 69.175 23.8041 58.0471 30.8747C46.9112 37.9503 36.6112 47.359 27.8425 56.7249C19.0687 66.0961 11.7943 75.461 6.71453 82.48C4.1737 85.9908 2.17959 88.918 0.819144 90.97C0.138868 91.996 -0.383119 92.8035 -0.735953 93.3559C-0.912374 93.6321 -1.04652 93.8446 -1.13703 93.9888C-1.18228 94.0609 -1.21663 94.1159 -1.2399 94.1533C-1.25153 94.172 -1.2604 94.1863 -1.26647 94.1961C-1.26951 94.201 -1.27185 94.2047 -1.27349 94.2074C-1.27431 94.2087 -1.27502 94.2099 -1.27543 94.2105C-1.27596 94.2114 -1.27631 94.2119 0 95C1.27631 95.7881 1.27631 95.7881 1.27648 95.7878C1.27677 95.7873 1.27712 95.7868 1.2777 95.7858C1.27886 95.7839 1.28072 95.7809 1.28328 95.7768C1.28839 95.7686 1.29629 95.7558 1.30694 95.7387C1.32825 95.7045 1.36061 95.6526 1.40384 95.5838C1.4903 95.446 1.62026 95.2402 1.79235 94.9707C2.13654 94.4319 2.64922 93.6387 3.31953 92.6277C4.66025 90.6055 6.63099 87.7124 9.14485 84.2388C14.1745 77.289 21.3688 68.0289 30.0325 58.7752C38.7013 49.5161 48.8075 40.2998 59.656 33.4067C70.5125 26.5086 82.0128 22.0001 93.5 22.0001L93.5 19.0001Z",
            stroke: "rgba(81,155,208,1)",
            fillRule: "nonzero",
            strokeLinejoin: "round",
            strokeWidth: 3,
          },
        ]}
        position="absolute"
        top="425.5px"
        left="460.5px"
        {...getOverrideProps(overrides, "line_chart_2")}
      ></Icon>
      <Icon
        width="876.5px"
        height="132px"
        viewBox={{ minX: 0, minY: 0, width: 876.5, height: 132 }}
        paths={[
          {
            d: "M877.243 75.3031C877.963 74.8928 878.213 73.9768 877.803 73.2571C877.393 72.5374 876.477 72.2866 875.757 72.6969L877.243 75.3031ZM-1.26378 131.192C-1.71003 131.89 -1.50596 132.818 -0.807993 133.264C-0.110024 133.71 0.817541 133.506 1.26378 132.808L-1.26378 131.192ZM876.5 74C875.757 72.6969 875.757 72.6968 875.757 72.6968C875.757 72.697 875.757 72.6971 875.756 72.6974C875.755 72.698 875.753 72.6991 875.75 72.7007C875.745 72.7038 875.736 72.7087 875.724 72.7154C875.7 72.7289 875.664 72.7496 875.614 72.7772C875.515 72.8326 875.364 72.9158 875.164 73.0251C874.762 73.2436 874.159 73.5663 873.363 73.9784C871.771 74.8025 869.405 75.9838 866.325 77.4034C860.166 80.2427 851.155 84.034 839.776 87.827C817.014 95.414 784.802 103 747 103L747 106C785.198 106 817.736 98.336 840.724 90.673C852.22 86.841 861.334 83.0073 867.581 80.1279C870.705 78.688 873.112 77.4865 874.742 76.6427C875.557 76.2208 876.178 75.8882 876.598 75.66C876.807 75.5459 876.967 75.4578 877.074 75.3977C877.128 75.3677 877.169 75.3446 877.198 75.3288C877.212 75.3209 877.222 75.3147 877.23 75.3104C877.234 75.3083 877.237 75.3066 877.239 75.3054C877.24 75.3048 877.241 75.3042 877.242 75.3039C877.242 75.3035 877.243 75.3031 876.5 74ZM747 103C705.893 103 675.682 77.3052 645.037 51.1098C614.561 25.0585 583.644 -1.5 541.5 -1.5L541.5 1.5C582.356 1.5 612.439 27.1915 643.088 53.3902C673.568 79.4448 704.607 106 747 106L747 103ZM541.5 -1.5C520.383 -1.5 501.236 5.91356 483.218 16.9231C465.218 27.9215 448.25 42.5695 431.516 57.118C414.742 71.7015 398.209 86.1792 380.952 97.0269C363.712 107.863 345.866 115 326.5 115L326.5 118C346.634 118 365.038 110.574 382.548 99.5668C400.041 88.5708 416.758 73.9235 433.484 59.382C450.25 44.8055 467.032 30.3285 484.782 19.4831C502.514 8.64894 521.117 1.5 541.5 1.5L541.5 -1.5ZM326.5 115C287.718 115 260.508 88.8886 234.767 62.2085C221.965 48.9389 209.508 35.5189 196.276 25.4471C183.016 15.3538 168.826 8.5 152.5 8.5L152.5 11.5C167.924 11.5 181.484 17.9587 194.459 27.8342C207.461 37.7311 219.723 50.9361 232.608 64.2915C258.242 90.8614 286.282 118 326.5 118L326.5 115ZM152.5 8.5C133.475 8.5 114.346 16.2822 96.431 27.8008C78.5033 39.3274 61.6754 54.6701 47.2221 69.9699C32.7634 85.2754 20.6469 100.575 12.1464 112.044C7.89527 117.781 4.54617 122.562 2.25839 125.912C1.11445 127.587 0.23571 128.904 -0.357922 129.804C-0.654742 130.254 -0.880298 130.599 -1.0321 130.833C-1.108 130.95 -1.16547 131.039 -1.20418 131.099C-1.22354 131.129 -1.23821 131.152 -1.24816 131.168C-1.25313 131.175 -1.25693 131.181 -1.25953 131.185C-1.26083 131.187 -1.2619 131.189 -1.26255 131.19C-1.26331 131.191 -1.26378 131.192 0 132C1.26378 132.808 1.26391 132.808 1.26433 132.807C1.26487 132.806 1.26559 132.805 1.26666 132.803C1.26881 132.8 1.27214 132.795 1.27665 132.788C1.28567 132.774 1.2994 132.752 1.31782 132.724C1.35465 132.667 1.4102 132.581 1.48416 132.467C1.63207 132.239 1.85359 131.9 2.14625 131.456C2.73158 130.569 3.60137 129.265 4.73575 127.604C7.00461 124.282 10.3313 119.532 14.5567 113.831C23.0094 102.425 35.0491 87.2246 49.4029 72.0301C63.7621 56.8299 80.4029 41.6726 98.0534 30.3242C115.716 18.9678 134.275 11.5 152.5 11.5L152.5 8.5Z",
            stroke: "rgba(52,107,212,1)",
            fillRule: "nonzero",
            strokeLinejoin: "round",
            strokeWidth: 3,
          },
        ]}
        position="absolute"
        top="425px"
        left="460.5px"
        {...getOverrideProps(overrides, "line_chart_1")}
      ></Icon>
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="14.55%"
        bottom="83.11%"
        left="57.9%"
        right="40.65%"
        transformOrigin="top left"
        transform="rotate(180deg)"
        {...getOverrideProps(overrides, "total_transactions_icon")}
      >
        <Icon
          width="20.792434692382812px"
          height="24px"
          viewBox={{ minX: 0, minY: 0, width: 20.792434692382812, height: 24 }}
          paths={[
            {
              d: "M16.2601 6.27406C16.0116 6.52048 15.6758 6.65874 15.3258 6.65874C14.9759 6.65874 14.6401 6.52048 14.3916 6.27406C14.2692 6.15278 14.1721 6.00845 14.1058 5.84943C14.0395 5.6904 14.0054 5.51982 14.0054 5.34753C14.0054 5.17524 14.0395 5.00466 14.1058 4.84564C14.1721 4.68661 14.2692 4.54229 14.3916 4.42101C14.6401 4.17459 14.9759 4.03633 15.3258 4.03633C15.6758 4.03633 16.0116 4.17459 16.2601 4.42101C16.7743 4.93355 16.7743 5.76323 16.2601 6.27406ZM1.13912 13.988C0.818717 13.6705 0.564386 13.2927 0.390819 12.8763C0.217252 12.46 0.127887 12.0134 0.127887 11.5624C0.127887 11.1113 0.217252 10.6647 0.390819 10.2484C0.564386 9.83207 0.818717 9.45425 1.13912 9.13677L9.29872 1.0286C9.94405 0.388352 10.8153 0.0275497 11.7243 0.0240828L17.3195 8.39041e-05C17.7744 -0.00309353 18.2255 0.084005 18.6466 0.256338C19.0677 0.42867 19.4504 0.682813 19.7726 1.00406C20.0948 1.3253 20.3501 1.70726 20.5237 2.12783C20.6972 2.5484 20.7857 2.99922 20.7839 3.4542L20.7427 9.2362C20.7353 10.1382 20.3718 11.0008 19.7313 11.6361L11.6917 19.6243C11.0427 20.2672 10.166 20.6279 9.25243 20.6279C8.33884 20.6279 7.46218 20.2672 6.81313 19.6243L1.13912 13.988ZM2.35963 10.3487C2.19943 10.5075 2.07227 10.6964 1.98548 10.9045C1.8987 11.1127 1.85402 11.336 1.85402 11.5615C1.85402 11.787 1.8987 12.0103 1.98548 12.2185C2.07227 12.4267 2.19943 12.6156 2.35963 12.7743L8.03364 18.414C8.70732 19.0826 9.79926 19.0826 10.4729 18.414L18.5125 10.4241C18.8322 10.1063 19.0134 9.67499 19.0165 9.2242L19.0594 3.4422C19.0605 3.21453 19.0164 2.98891 18.9297 2.77841C18.8429 2.56792 18.7152 2.37676 18.554 2.21601C18.3928 2.05526 18.2012 1.92814 17.9905 1.84201C17.7797 1.75588 17.554 1.71247 17.3263 1.71428L11.7312 1.73828C11.2763 1.73979 10.8404 1.92021 10.5175 2.24054L2.35792 10.3487L2.35963 10.3487ZM0.216882 14.9993C-0.0133975 15.6156 -0.061498 16.2851 0.0783209 16.928C0.21814 17.5709 0.539973 18.1599 1.00541 18.6249L4.3721 21.9916C5.00882 22.6283 5.76473 23.1334 6.59665 23.478C7.42858 23.8226 8.32024 24 9.22072 24C10.1212 24 11.0129 23.8226 11.8448 23.478C12.6767 23.1334 13.4326 22.6283 14.0693 21.9916L20.0382 16.0227C20.5205 15.541 20.7918 14.8874 20.7924 14.2057L20.7924 12.8686L14.0693 19.5917C13.9511 19.71 13.8294 19.8231 13.7059 19.9294L12.8574 20.7796C12.3799 21.2572 11.8129 21.6361 11.1889 21.8946C10.5649 22.1531 9.89613 22.2862 9.22072 22.2862C8.54531 22.2862 7.87652 22.1531 7.25253 21.8946C6.62855 21.6361 6.06159 21.2572 5.58404 20.7796L4.72866 19.9242C4.60598 19.8176 4.48705 19.7066 4.3721 19.5917L1.00541 16.225C0.657474 15.8779 0.388511 15.4599 0.216882 14.9993Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Vector412754")}
        ></Icon>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="1000px"
        height="30px"
        position="absolute"
        top="60px"
        left="380px"
        {...getOverrideProps(overrides, "Header")}
      >
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
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Dashboard"
          {...getOverrideProps(overrides, "Dashboard17113")}
        ></Text>
        <View
          padding="0px 0px 0px 0px"
          width="180px"
          height="30px"
          position="absolute"
          top="0px"
          left="713px"
          {...getOverrideProps(overrides, "Search bar")}
        >
          <White
            width="180px"
            height="30px"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "White")}
          ></White>
          <Text
            fontFamily="Lato"
            fontSize="14px"
            fontWeight="400"
            color="rgba(176,176,176,1)"
            lineHeight="16.40625px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="6px"
            left="15px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Search..."
            {...getOverrideProps(overrides, "Search...")}
          ></Text>
          <View
            padding="0px 0px 0px 0px"
            width="12px"
            height="12px"
            position="absolute"
            top="9px"
            left="153px"
            {...getOverrideProps(overrides, "Search icon")}
          >
            <Icon
              width="10px"
              height="10px"
              viewBox={{ minX: 0, minY: 0, width: 10, height: 10 }}
              paths={[
                {
                  d: "M9 5C9 7.20914 7.20914 9 5 9L5 11C8.31371 11 11 8.31371 11 5L9 5ZM5 9C2.79086 9 1 7.20914 1 5L-1 5C-1 8.31371 1.68629 11 5 11L5 9ZM1 5C1 2.79086 2.79086 1 5 1L5 -1C1.68629 -1 -1 1.68629 -1 5L1 5ZM5 1C7.20914 1 9 2.79086 9 5L11 5C11 1.68629 8.31371 -1 5 -1L5 1Z",
                  stroke: "rgba(133,133,133,1)",
                  fillRule: "nonzero",
                  strokeWidth: 1,
                },
              ]}
              position="absolute"
              top="0px"
              left="0px"
              {...getOverrideProps(overrides, "Ellipse 2")}
            ></Icon>
            <Icon
              width="5.66px"
              height="0px"
              viewBox={{ minX: 0, minY: 0, width: 4, height: 4 }}
              paths={[
                {
                  d: "M0 0L5.65685 0L5.65685 -1L0 -1L0 0Z",
                  stroke: "rgba(133,133,133,1)",
                  fillRule: "nonzero",
                  strokeWidth: 1,
                },
              ]}
              position="absolute"
              top="8px"
              left="8px"
              transformOrigin="top left"
              transform="rotate(45deg)"
              {...getOverrideProps(overrides, "Line 2")}
            ></Icon>
          </View>
        </View>
        <View
          width="30px"
          height="30px"
          position="absolute"
          top="0px"
          left="970px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Mask Group")}
        ></View>
        <Icon
          width="18px"
          height="20px"
          viewBox={{ minX: 0, minY: 0, width: 18, height: 20 }}
          paths={[
            {
              d: "M16 11.586L16 8C16 4.783 13.815 2.073 10.855 1.258C10.562 0.52 9.846 0 9 0C8.154 0 7.438 0.52 7.145 1.258C4.185 2.074 2 4.783 2 8L2 11.586L0.293001 13.293C0.199958 13.3857 0.126171 13.4959 0.0758854 13.6172C0.0256001 13.7386 -0.000189449 13.8687 1.04767e-06 14L1.04767e-06 16C1.04767e-06 16.2652 0.105358 16.5196 0.292894 16.7071C0.480431 16.8946 0.734785 17 1 17L17 17C17.2652 17 17.5196 16.8946 17.7071 16.7071C17.8946 16.5196 18 16.2652 18 16L18 14C18.0002 13.8687 17.9744 13.7386 17.9241 13.6172C17.8738 13.4959 17.8 13.3857 17.707 13.293L16 11.586ZM16 15L2 15L2 14.414L3.707 12.707C3.80004 12.6143 3.87383 12.5041 3.92412 12.3828C3.9744 12.2614 4.00019 12.1313 4 12L4 8C4 5.243 6.243 3 9 3C11.757 3 14 5.243 14 8L14 12C14 12.266 14.105 12.52 14.293 12.707L16 14.414L16 15ZM9 20C9.6193 20.0008 10.2235 19.8086 10.7285 19.4502C11.2335 19.0917 11.6143 18.5849 11.818 18L6.182 18C6.38566 18.5849 6.76648 19.0917 7.27151 19.4502C7.77654 19.8086 8.3807 20.0008 9 20Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="16.67%"
          bottom="16.67%"
          left="92.3%"
          right="5.9%"
          {...getOverrideProps(overrides, "Vector412763")}
        ></Icon>
      </View>
    </View>
  );
}
