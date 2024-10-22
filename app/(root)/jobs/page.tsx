import JobsFilter from "@/components/jobs/JobsFilter";
import { fetchCountries } from "@/lib/actions/job.action";

const Page = async () => {
  const countries = await fetchCountries();

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Jobs</h1>

      <div className="flex">
        <JobsFilter countriesList={countries} />
      </div>
    </>
  );
};

export default Page;
