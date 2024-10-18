"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { HomePageFilters } from "@/constants/filters";
import { Button } from "../ui/button";
import { formUrlQuery } from "@/lib/utils";

const HomeFilters = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [active, setActive] = useState("");

  const handleTypeClick = (item: string) => {
    // Create a URLSearchParams object from the current query parameters
    const currentParams = new URLSearchParams(searchParams.toString());

    // Remove the "filter" and "page" keys if they exist
    currentParams.delete("filter");
    currentParams.delete("page");

    if (active === item) {
      setActive("");

      // Build the URL without the current filter
      const newUrl = formUrlQuery({
        params: currentParams.toString(),
        key: "filter",
        value: null,
      });

      // Push the new URL to the router
      router.push(newUrl, { scroll: false });
    } else {
      setActive(item);

      // Add the selected filter to the query parameters
      currentParams.set("filter", item.toLowerCase());

      const newUrl = formUrlQuery({
        params: currentParams.toString(),
        key: "filter",
        value: item.toLowerCase(),
      });

      // Push the updated URL to the router
      router.push(newUrl, { scroll: false });
    }
  };

  useEffect(() => {
    const currentFilter = searchParams.get("filter") || "";
    setActive(currentFilter);
  }, [searchParams]);

  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {HomePageFilters.map((item) => (
        <Button
          key={item.value}
          onClick={() => {}}
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${
            active === item.value
              ? "bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500 dark:hover:bg-dark-400"
              : "bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300"
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
