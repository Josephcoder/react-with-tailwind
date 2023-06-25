import useTerms from './useTerms';

export const useTerm = (id?: string) => {
  const { data: terms } = useTerms();
  return terms?.find((term) => term.id === id);
};

export default useTerm;
