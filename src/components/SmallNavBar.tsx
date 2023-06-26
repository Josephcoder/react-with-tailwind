import useAcademic from '../hooks/useAcademic';
import useAcademics from '../hooks/useAcademics';
import useAcademicQueryStore from '../statemanagement/academic/store';
import SelectInput from './SelectInput';
interface Props {
  title: string;
}

const SmallNavBar = ({ title }: Props) => {
  const { data: Academics } = useAcademics();

  const setSelectedYearId = useAcademicQueryStore((s) => s.setyearId);
  const selectedAcademicId = useAcademicQueryStore(
    (s) => s.academicQuery.yearId
  );
  const selectedAcademic = useAcademic(selectedAcademicId);
  const setSelectedTermId = useAcademicQueryStore((s) => s.setTermId);

  return (
    <div className="flex items-center justify-between">
      {/* <button className="p-2 hover:bg-blue-700 hover:text-white bg-blue-600 text-white px-3 rounded-lg">
        Back
      </button> */}
      <div className="text-gray-700">
        <h3 className="text-2xl font-bold">{title}</h3>
        {<p className="text-gray-400">{`${title} dashboard list`}</p>}{' '}
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="inline-flex gap-4">
          <div>
            <SelectInput
              options={Academics === undefined ? [] : Academics}
              title={'Academic'}
              value={'2021 - 2023'}
              onChange={(yearId) => setSelectedYearId(yearId)}
            />
          </div>

          <div>
            <SelectInput
              options={
                selectedAcademic?.terms === undefined
                  ? []
                  : selectedAcademic?.terms
              }
              title={'Term'}
              value={'2'}
              onChange={(termId) => setSelectedTermId(termId)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallNavBar;
