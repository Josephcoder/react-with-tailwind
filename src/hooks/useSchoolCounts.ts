import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/apiClient';
import { School__Interface } from '../entities/School';

const apiClient = new APIClient<School__Interface>(
  '/schools/count/group_by/ownership'
);

const useSchoolCount = (academicYearId: string | undefined) =>
  useQuery({
    queryKey: ['schoolCount', academicYearId],
    queryFn: () => apiClient.get(academicYearId),
  });

export default useSchoolCount;
