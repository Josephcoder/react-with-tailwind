import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import { Term__Interface } from '../entities/Period';
import APIClient from '../services/apiClient';
import useDistrictSchoolQueryStore from '../statemanagement/districtSchool/store';

const apiClient = new APIClient<Term__Interface>('/academic/active/term');

export const useTerms = () => {
  const districtSchoolQuery = useDistrictSchoolQueryStore(
    (s) => s.districtSchoolQuery
  );

  return useQuery<Term__Interface[]>({
    queryKey: ['Terms', districtSchoolQuery],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
  });
};

export default useTerms;
