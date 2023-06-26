import { create } from 'zustand';

interface AcademicQuery {
  termId?: string;
  yearId?: string;
}

interface AcademicQueryStore {
  academicQuery: AcademicQuery;
  setTermId: (termId: string) => void;
  setyearId: (yearId: string) => void;
}

const useAcademicQueryStore = create<AcademicQueryStore>((set) => ({
  academicQuery: {},
  setTermId: (termId) =>
    set((store) => ({
      academicQuery: { ...store.academicQuery, termId },
    })),
  setyearId: (yearId) =>
    set((store) => ({
      academicQuery: { ...store.academicQuery, yearId },
    })),
}));

export default useAcademicQueryStore;
