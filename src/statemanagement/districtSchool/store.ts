import { create } from 'zustand';

interface DistrictSchoolQuery {
  termId?: string;
  districtCode?: string;
}

interface DistrictSchoolStore {
  districtSchoolQuery: DistrictSchoolQuery;
  setTermId: (termId: string) => void;
  setDistrictCode: (districtCode: string) => void;
}

const useDistrictSchoolQueryStore = create<DistrictSchoolStore>((set) => ({
  districtSchoolQuery: {},
  setTermId: (termId) =>
    set((store) => ({
      districtSchoolQuery: { ...store.districtSchoolQuery, termId },
    })),
  setDistrictCode: (districtCode) =>
    set((store) => ({
      districtSchoolQuery: { ...store.districtSchoolQuery, districtCode },
    })),
}));

export default useDistrictSchoolQueryStore;
