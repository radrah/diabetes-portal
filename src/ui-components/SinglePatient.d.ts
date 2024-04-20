/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { Patient, Workout } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type SinglePatientProps = React.PropsWithChildren<Partial<ViewProps> & {
    workout?: Workout;
    patientName?: String;
    patient?: Patient;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function SinglePatient(props: SinglePatientProps): React.ReactElement;
