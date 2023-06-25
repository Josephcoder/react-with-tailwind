import useDistrictsTotalSchools from './useDistrictsTotalSchools';

export const useDistrictTotalSchools = (code?: string) => {
  const { data: districtsTotal } = useDistrictsTotalSchools();
  return districtsTotal?.find((districtTotal) => districtTotal.code === code);
};

export default useDistrictTotalSchools;
