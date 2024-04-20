/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Patient } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import SinglePatient from "./SinglePatient";
import { Collection } from "@aws-amplify/ui-react";
export default function SinglePatientTable(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Patient,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      isSearchable={true}
      isPaginated={true}
      searchPlaceholder="Search..."
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "SinglePatientTable")}
    >
      {(item, index) => (
        <SinglePatient
          workout={item}
          patientName={item.firstName}
          patient={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></SinglePatient>
      )}
    </Collection>
  );
}
