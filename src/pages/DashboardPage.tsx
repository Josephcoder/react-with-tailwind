import { Card } from '../components/Card';
import BarChart from '../components/BarChart';
import { MdSchool } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';
import { SiVirustotal } from 'react-icons/si';
const DashboardPage = () => {
  const series = [
    {
      name: 'PRODUCT A',
      data: [44, 55, 41, 67, 22, 43],
    },
    {
      name: 'PRODUCT B',
      data: [13, 23, 20, 8, 13, 27],
    },
    {
      name: 'PRODUCT C',
      data: [11, 17, 15, 15, 21, 14],
    },
    {
      name: 'PRODUCT D',
      data: [21, 7, 25, 13, 22, 8],
    },
  ];
  const categories = [
    '01/01/2011 GMT',
    '01/02/2011 GMT',
    '01/03/2011 GMT',
    '01/04/2011 GMT',
    '01/05/2011 GMT',
    '01/06/2011 GMT',
  ];
  return (
    <div className="flex flex-col gap-y-4">
      <Card>
        <div className="flex items-center justify-between">
          <div className="text-gray-700">Districts</div>
          <div className="inline-flex gap-4">
            <div className="w-54">
              <label className="sr-only">Underline select</label>
              <select
                id="underline_select"
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                <option selected>Choose an academic year</option>
                <option>2021/2022</option>
                <option>2022/2023</option>
              </select>
            </div>
            <div className="w-54">
              <label className="sr-only">Underline select</label>
              <select
                id="underline_select"
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                <option selected>Choose an academic term</option>
                <option>Term 1/2021/2022</option>
                <option>Term 2/2022/2023</option>
                <option>Term 3/2022/2023</option>
              </select>
            </div>
          </div>
        </div>
      </Card>
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <div className="flex  items-center justify-around gap-y-4">
            <div className="flex flex-col items-center">
              <h5 className="text-2xl font-semibold tracking-tight text-gray-500 dark:text-white">
                Private
              </h5>
              <p className="text-gray-500">Submitted marks</p>
              <p className="text-4xl font-extrabold">200</p>
            </div>
            <MdSchool className=" text-9xl text-green-800" />
          </div>
        </Card>
        <Card>
          <div className="flex  items-center justify-around gap-y-4">
            <div className="flex flex-col items-center">
              <h5 className="text-2xl font-semibold tracking-tight text-gray-500 dark:text-white">
                Public
              </h5>
              <p className="text-gray-500">Submitted marks</p>
              <p className="text-4xl font-extrabold">400</p>
            </div>
            <FaSchool className=" text-9xl text-yellow-700" />
          </div>
        </Card>
        <Card>
          <div className="flex  items-center justify-around gap-y-4">
            <div className="flex flex-col items-center">
              <h5 className="text-2xl font-semibold tracking-tight text-gray-500 dark:text-white">
                Government Aided
              </h5>
              <p className="text-gray-500">Submitted marks</p>
              <p className="text-4xl font-extrabold">300</p>
            </div>
            <MdSchool className=" text-9xl text-blue-700" />
          </div>
        </Card>
        <Card>
          <div className="flex  items-center justify-around gap-y-4">
            <div className="flex flex-col items-center">
              <h5 className="text-2xl font-semibold tracking-tight text-gray-500 dark:text-white">
                Total
              </h5>
              <p className="text-gray-500">Submitted marks</p>
              <p className="text-4xl font-extrabold">300</p>
            </div>
            <SiVirustotal className=" text-9xl text-indigo-700" />
          </div>
        </Card>
      </div>
      <Card>
        <BarChart
          categories={categories}
          series={series}
          type="bar"
          title="District school total"
          width="100%"
          height={600}
        />
      </Card>
    </div>
  );
};

export default DashboardPage;
