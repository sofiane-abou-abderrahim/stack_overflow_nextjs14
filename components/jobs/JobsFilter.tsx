import Image from "next/image";

import LocalSearchbar from "../shared/search/LocalSearchbar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const JobsFilter = () => {
  const handleUpdateParams = (value: string) => {
    console.log(value);
  };

  return (
    <div className="relative mt-11 flex w-full justify-between gap-5 max-sm:flex-col sm:items-center">
      <LocalSearchbar
        route="/jobs"
        iconPosition="left"
        imgSrc="/assets/icons/job-search.svg"
        placeholder="Job Title, Company, or Keywords"
        otherClasses="flex-1 max-sm:w-full"
      />

      <Select onValueChange={(value) => handleUpdateParams(value)}>
        <SelectTrigger className="body-regular light-border background-light800_dark300 text-dark500_light700 line-clamp-1 flex min-h-[56px] items-center gap-3 border p-4 sm:max-w-[210px]">
          <Image
            src="/assets/icons/carbon-location.svg"
            alt="location"
            width={18}
            height={18}
          />
          <div className="line-clamp-1 flex-1 text-left">
            <SelectValue placeholder="Select Location" />
          </div>
        </SelectTrigger>

        <SelectContent className="body-semibold text-dark500_light700 small-regular max-h-[350px] max-w-[250px] border-none bg-light-900 dark:bg-dark-300">
          <SelectGroup>
            <SelectItem
              className="cursor-pointer focus:bg-light-800 dark:focus:bg-dark-400"
              value="France"
            >
              France
            </SelectItem>
            <SelectItem
              className="cursor-pointer focus:bg-light-800 dark:focus:bg-dark-400"
              value="England"
            >
              England
            </SelectItem>
            <SelectItem
              className="cursor-pointer focus:bg-light-800 dark:focus:bg-dark-400"
              value="USA"
            >
              United States
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default JobsFilter;
