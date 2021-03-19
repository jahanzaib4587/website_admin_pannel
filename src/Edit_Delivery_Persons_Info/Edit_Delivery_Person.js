import React from "react";
import Card from "./Card";
import Table from "./Tabledetail";
const Edit_Delivery_Person = () => {
  return (
    <div className="p-2 ">
      <Card />
      <Table Vehicle_Name="Honda Civic" Category="Sedan" RegNo="983473467321" />
    </div>
  );
};

export default Edit_Delivery_Person;
