"use client";
import { useParams } from "next/navigation";
import React from "react";

const EditBranch = () => {
  const { branchId } = useParams();
  return <div>Edit Branch{branchId}</div>;
};

export default EditBranch;
