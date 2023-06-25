import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import { School__Interface } from '../entities/School';
import APIClient from '../services/apiClient';
const useDistrictSchools = (district_code: string | undefined) => {
  const apiClient = new APIClient<School__Interface>(
    `schools/district/${district_code}`
  );

  return useQuery({
    queryKey: ['districtSchools', district_code],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
  });
};

export default useDistrictSchools;
