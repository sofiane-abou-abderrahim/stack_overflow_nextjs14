"use client";

import React from "react";
import JobsFilter from "@/components/jobs/JobsFilter";

const Page = () => {
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Jobs</h1>

      <div className="flex">
        <JobsFilter />
      </div>
    </>
  );
};

export default Page;
