"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery } from "@/lib/utils";
import { Button } from "../ui/button";

interface Props {
  pageNumber: number;
  isNext: boolean;
  totalResults?: number;
}

const Pagination = ({ pageNumber, isNext, totalResults }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleNavigation = (direction: string) => {
    const nextPageNumber =
      direction === "prev" ? pageNumber - 1 : pageNumber + 1;

    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "page",
      value: nextPageNumber.toString(),
    });

    router.push(newUrl);
  };

  // Hide pagination if no results or only one page is needed
  if (totalResults === 0 || (!isNext && pageNumber === 1)) return null;

  return (
    <div className="flex w-full items-center justify-center gap-2">
      <Button
        disabled={pageNumber === 1}
        onClick={() => handleNavigation("prev")}
        className="light-border-2 btn flex min-h-[36px] items-center justify-center gap-2 border"
      >
        <span className="body-medium text-dark200_light800">Prev</span>
      </Button>
      <div className="flex items-center justify-center rounded-md bg-primary-500 px-3.5 py-2">
        <p className="body-semibold text-light-900">{pageNumber}</p>
      </div>
      <Button
        disabled={!isNext}
        onClick={() => handleNavigation("next")}
        className="light-border-2 btn flex min-h-[36px] items-center justify-center gap-2 border"
      >
        <span className="body-medium text-dark200_light800">Next</span>
      </Button>
    </div>
  );
};

export default Pagination;
