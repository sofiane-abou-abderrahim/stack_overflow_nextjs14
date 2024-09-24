"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { HomePageFilters } from "@/constants/filters";
import { Button } from "../ui/button";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";

const HomeFilters = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [active, setActive] = useState("");

  const handleTypeClick = (item: string) => {
    const newParams = removeKeysFromQuery({
      params: searchParams.toString(),
      keysToRemove: ["filter", "page"], // Remove the "filter" and "page" keys first
    });

    if (active === item) {
      setActive("");
      // Push the URL without the current filter
      const newUrl = formUrlQuery({
        params: newParams,
        key: "filter",
        value: null,
      });

      router.push(newUrl, { scroll: false });
    } else {
      setActive(item);
      // Add the selected filter to the URL
      const newUrl = formUrlQuery({
        params: newParams,
        key: "filter",
        value: item.toLowerCase(),
      });

      router.push(newUrl, { scroll: false });
    }
  };

  useEffect(() => {
    // Update the 'active' state on filter change or when getting back to the homepage
    const currentFilter = searchParams.get("filter") || "";
    setActive(currentFilter);
  }, [searchParams]);

  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {HomePageFilters.map((item) => (
        <Button
          key={item.value}
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${
            active === item.value
              ? "bg-primary-100 text-primary-500"
              : "bg-light-800 text-light-500"
          }`}
          onClickCapture={() => handleTypeClick(item.value)}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;
