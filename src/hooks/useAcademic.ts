import useAcademics from './useAcademics';

export const useAcademic = (id?: string) => {
  const { data: Academics } = useAcademics();

  return Academics?.find((year) => year.id === id);
};

export default useAcademic;
