import SelectInput from './SelectInput';
interface Props {
  title: string;
}
const SmallNavBar = ({ title }: Props) => {
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
              options={[
                {
                  title: 'Academic 2021 - 2023',
                  value: '2021 - 2023',
                },
                {
                  title: 'Academic 2021 - 2023',
                  value: '2021 - 2023',
                },
                {
                  title: 'Academic 2021 - 2023',
                  value: '2021 - 2023',
                },
              ]}
              title={'Academic'}
              value={'2021 - 2023'}
              onChange={() => {}}
            />
          </div>

          <div>
            <SelectInput
              options={[
                {
                  title: 'First term',
                  value: '1',
                },
                {
                  title: 'Second term',
                  value: '2',
                },
                {
                  title: 'Third term',
                  value: '2',
                },
              ]}
              title={'Term'}
              value={'2'}
              onChange={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallNavBar;
