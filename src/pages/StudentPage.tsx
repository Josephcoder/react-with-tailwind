import BarChart from '../components/BarChart';
import { Card } from '../components/Card';
import MarksSubMiniStatistics from '../components/MarksSubMiniStatistics';
import SmallNavBar from '../components/SmallNavBar';
import schoolDistrictSubmission, {
  SchoolOwner,
  StudentOwner,
} from '../data/schoolSubmittedMarks';
const StudentPage = () => {
  const series = [
    {
      name: 'private	',
      data: schoolDistrictSubmission.districts_summary.map((el) => el.private),
    },
    {
      name: 'GVM Aided',
      data: schoolDistrictSubmission.districts_summary.map(
        (el) => el.government_aided
      ),
    },
    {
      name: 'Public',
      data: schoolDistrictSubmission.districts_summary.map((el) => el.public),
    },
  ];
  const categories = schoolDistrictSubmission.districts_summary.map(
    (el) => el.name
  );

  return (
    <div className="flex flex-col gap-y-4">
      <Card className="sticky top-14 z-40">
        <SmallNavBar title="Student marks submission" />
      </Card>
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 gap-4">
        {StudentOwner.map(({ title, icon, color, total, bg }, index) => {
          return (
            <MarksSubMiniStatistics
              key={index}
              title={title}
              subtitle="school"
              icon={icon}
              color={color}
              total={total}
              bg={bg}
            />
          );
        })}
      </div>
      <Card>
        <div className="text-center">
          <section className="p-1 bg-gray-200 rounded-xl inline-block mx-auto">
            {['Submitted', 'Non Submitted', 'Total'].map((el) => (
              <button
                className={`p-1 px-3 text-sm hover:bg-blue-500 mx-2- hover:text-white rounded-xl ${
                  el === 'Submitted' ? '' : ''
                }`}
                key={el}
              >
                {el}
              </button>
            ))}
          </section>
        </div>

        <BarChart
          categories={categories}
          series={series}
          type="bar"
          title="District teacher total"
          width="100%"
          height={600}
        />
      </Card>
      <Card className="p-0">
        <div className="flex ">
          <div className="flex-1">
            <h3 className="text-2xl font-bold">District students submission</h3>
            <p className="text-sm text-gray-500">District submission list</p>
          </div>
          <div className="flex-1">
            <input
              type="search"
              name=""
              className=" rounded-md border border-separate w-full p-2 px-3 bg-gray-100"
              id=""
              placeholder="Search"
            />
          </div>
          <div className="flex-1 text-right">
            <button className="p-2 hover:bg-blue-700 hover:text-white bg-blue-600 text-white px-3 rounded-lg">
              Export CSV
            </button>
          </div>
        </div>

        <table className="table-auto border w-full mt-2 text-left ">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-2 border" rowSpan={2}>
                District code
              </th>
              <th className="p-2 border" rowSpan={2}>
                District name
              </th>
              <th className="p-2 border bg-blue-50" colSpan={3}>
                Private
              </th>
              <th className="p-2 border bg-yellow-50" colSpan={3}>
                Government Aided
              </th>
              <th className="p-2 border bg-green-50" colSpan={3}>
                Public
              </th>
              <th className="p-2 border bg-purple-50" colSpan={3}>
                Total
              </th>
              <th className="p-2 border" rowSpan={2}></th>
            </tr>
            <tr className="bg-gray-50 text-xs">
              <th className="p-2 border bg-blue-50">Submitted</th>
              <th className="p-2 border bg-blue-50">Non-Submitted</th>
              <th className="p-2 border bg-blue-50">Total</th>

              <th className="p-2 border bg-yellow-50">Submitted</th>
              <th className="p-2 border bg-yellow-50">Non-Submitted</th>
              <th className="p-2 border bg-yellow-50">Total</th>

              <th className="p-2 border bg-green-50">Submitted</th>
              <th className="p-2 border bg-green-50">Non Submitted</th>
              <th className="p-2 border bg-green-50">Total</th>

              <th className="p-2 border bg-purple-50">Submitted</th>
              <th className="p-2 border bg-purple-50">Non-Submitted</th>
              <th className="p-2 border bg-purple-50 ">Total</th>
            </tr>
          </thead>

          <tbody>
            {schoolDistrictSubmission.districts_summary.map((el, i) => (
              <tr
                key={i}
                className={`${i % 2 ? 'bg-gray-100' : ''} hover:bg-blue-200`}
              >
                <td className="p-2 border">{el.code}</td>
                <td className="p-2 border">{el.name}</td>
                <td className="p-2 border bg-blue-50">{el.private}</td>
                <td className="p-2 border bg-blue-50">{el.private}</td>
                <td className="p-2 border bg-blue-50">{el.private}</td>

                <td className="p-2 border bg-yellow-50">{el.public}</td>
                <td className="p-2 border bg-yellow-50">{el.public}</td>
                <td className="p-2 border bg-yellow-50">{el.public}</td>

                <td className="p-2 border bg-green-50">{el.private}</td>
                <td className="p-2 border bg-green-50">{el.private}</td>
                <td className="p-2 border bg-green-50">{el.private}</td>
                <td className="p-2 border bg-purple-50 -50">{el.public}</td>

                <td className="p-2 border bg-purple-50">{el.public}</td>
                <td className="p-2 border bg-purple-50">{el.public}</td>

                <td className="w-40 p-1">
                  <button className="p-2 w-full text-sm hover:bg-blue-700 hover:text-white bg-blue-100 text-blue-600 px-3 rounded-lg">
                    Open district
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default StudentPage;
