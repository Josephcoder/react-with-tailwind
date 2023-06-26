import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import { Academic__Interface } from '../entities/Period';
import useAcademicQueryStore from '../statemanagement/academic/store';
import academicService from '../services/academicService';

export const useAcademics = () => {
  const academicQuery = useAcademicQueryStore((s) => s.academicQuery);

  return useQuery<Academic__Interface[]>({
    queryKey: ['Academics', academicQuery],
    queryFn: academicService.getAll,
    staleTime: ms('24h'),
  });
};

export default useAcademics;
