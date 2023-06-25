import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import { District__Interface } from '../entities/District';
import APIClient from '../services/apiClient';
const apiClient = new APIClient<District__Interface>('/schools/district/total');
const useDistrictsTotalSchools = () =>
  useQuery({
    queryKey: ['districtsTotalSchools'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
  });

export default useDistrictsTotalSchools;
