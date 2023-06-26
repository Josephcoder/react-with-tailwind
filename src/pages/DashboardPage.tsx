import { useState } from 'react';
import { MdSchool } from 'react-icons/md';
import BarChart from '../components/BarChart';
import { Card } from '../components/Card';
import SelectInput from '../components/SelectInput';
import useAcademicQueryStore from '../statemanagement/academic/store';
import useAuthStore from '../statemanagement/auth/store';
// import { FaSchool } from "react-icons/fa";
// import { SiVirustotal } from "react-icons/si";

interface SectionValues {
  ownership: 'private' | 'public' | 'gvt_aided' | 'TIVET';
  private: number;
  government_aided: number;
}

interface MarksInterface {
  ownership_summary: SectionValues[] | null;
  districts_summary: {
    name: string;
    code: string;
    private: number;
    government_aided: number;
    public: number;
  }[];
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const dataList: MarksInterface = {
  ownership_summary: [
    {
      government_aided: 123,
      ownership: 'TIVET',
      private: 123,
    },
    {
      government_aided: 123,
      ownership: 'gvt_aided',
      private: 123,
    },
    {
      government_aided: 123,
      ownership: 'private',
      private: 123,
    },
    {
      government_aided: 123,
      ownership: 'private',
      private: 123,
    },
  ],
  districts_summary: [
    {
      code: '11',
      name: 'Nyarugenge',
      private: generateRandomNumber(),
      government_aided: generateRandomNumber(),
      public: generateRandomNumber(),
    },
    {
      code: '12',
      name: 'Gasabo',
      private: generateRandomNumber(),
      government_aided: generateRandomNumber(),
      public: generateRandomNumber(),
    },
    {
      code: '13',
      name: 'Kicukiro',
      private: generateRandomNumber(),
      government_aided: generateRandomNumber(),
      public: generateRandomNumber(),
    },
    {
      code: '21',
      name: 'Nyanza',
      private: generateRandomNumber(),
      government_aided: generateRandomNumber(),
      public: generateRandomNumber(),
    },
    {
      code: '22',
      name: 'Gisagara',
      private: generateRandomNumber(),
      government_aided: generateRandomNumber(),
      public: generateRandomNumber(),
    },
    {
      code: '23',
      name: 'Nyaruguru',
      private: generateRandomNumber(),
      government_aided: generateRandomNumber(),
      public: generateRandomNumber(),
    },
    {
      code: '24',
      name: 'Huye',
      private: generateRandomNumber(),
      government_aided: generateRandomNumber(),
      public: generateRandomNumber(),
    },
    {
      code: '25',
      name: 'Nyamagabe',
      private: generateRandomNumber(),
      government_aided: generateRandomNumber(),
      public: generateRandomNumber(),
    },
    {
      code: '26',
      name: 'Ruhango',
      private: generateRandomNumber(),
      government_aided: generateRandomNumber(),
      public: generateRandomNumber(),
    },
    {
      code: '27',
      name: 'Muhanga',
      private: generateRandomNumber(),
      government_aided: generateRandomNumber(),
      public: generateRandomNumber(),
    },
    {
      code: '28',
      name: 'Kamonyi',
      private: generateRandomNumber(),
      government_aided: generateRandomNumber(),
      public: generateRandomNumber(),
    },
    {
      code: '31',
      name: 'Karongi',
      private: generateRandomNumber(),
      government_aided: generateRandomNumber(),
      public: generateRandomNumber(),
    },
    {
      code: '32',
      name: 'Rutsiro',
      private: generateRandomNumber(),
      government_aided: generateRandomNumber(),
      public: generateRandomNumber(),
    },
    {
      code: '33',
      name: 'Rubavu',
      private: generateRandomNumber(),
      government_aided: generateRandomNumber(),
      public: generateRandomNumber(),
    },
    {
      code: '34',
      name: 'Nyabihu',
      private: generateRandomNumber(),
      government_aided: generateRandomNumber(),
      public: generateRandomNumber(),
    },
    {
      code: '35',
      name: 'Ngororero',
      private: generateRandomNumber(),
      government_aided: generateRandomNumber(),
      public: generateRandomNumber(),
    },
    {
      code: '36',
      name: 'Rusizi',
      private: generateRandomNumber(),
      government_aided: generateRandomNumber(),
      public: generateRandomNumber(),
    },
    {
      code: '37',
      name: 'Nyamasheke',
      private: generateRandomNumber(),
      government_aided: generateRandomNumber(),
      public: generateRandomNumber(),
    },
    {
      code: '41',
      name: 'Rulindo',
      private: generateRandomNumber(),
      government_aided: generateRandomNumber(),
      public: generateRandomNumber(),
    },
    {
      code: '42',
      name: 'Gakenke',
      private: generateRandomNumber(),
      government_aided: generateRandomNumber(),
      public: generateRandomNumber(),
    },
    {
      code: '43',
      name: 'Musanze',
      private: generateRandomNumber(),
      government_aided: generateRandomNumber(),
      public: generateRandomNumber(),
    },
    {
      code: '44',
      name: 'Burera',
      private: generateRandomNumber(),
      government_aided: generateRandomNumber(),
      public: generateRandomNumber(),
    },
    {
      code: '45',
      name: 'Gicumbi',
      private: generateRandomNumber(),
      government_aided: generateRandomNumber(),
      public: generateRandomNumber(),
    },
    {
      code: '51',
      name: 'Rwamagana',
      private: generateRandomNumber(),
      government_aided: generateRandomNumber(),
      public: generateRandomNumber(),
    },
    {
      code: '52',
      name: 'Nyagatare',
      private: generateRandomNumber(),
      government_aided: generateRandomNumber(),
      public: generateRandomNumber(),
    },
    {
      code: '53',
      name: 'Gatsibo',
      private: generateRandomNumber(),
      government_aided: generateRandomNumber(),
      public: generateRandomNumber(),
    },
    {
      code: '54',
      name: 'Kayonza',
      private: generateRandomNumber(),
      government_aided: generateRandomNumber(),
      public: generateRandomNumber(),
    },
    {
      code: '55',
      name: 'Kirehe',
      private: generateRandomNumber(),
      government_aided: generateRandomNumber(),
      public: generateRandomNumber(),
    },
    {
      code: '56',
      name: 'Ngoma',
      private: generateRandomNumber(),
      government_aided: generateRandomNumber(),
      public: generateRandomNumber(),
    },
    {
      code: '57',
      name: 'Bugesera',
      private: generateRandomNumber(),
      government_aided: generateRandomNumber(),
      public: generateRandomNumber(),
    },
  ],
};

interface District_Schools {
  name: string;
  code: string;
  private: number;
  government_aided: number;
  public: number;
}

const DashboardPage = () => {
  const { user } = useAuthStore();
  console.log(user);

  const [selectedDistrict, setselectedDistrict] =
    useState<District_Schools | null>(null);
  const series = [
    {
      name: 'private	',
      data: dataList.districts_summary.map((el) => el.private),
    },
    {
      name: 'GVM Aided',
      data: dataList.districts_summary.map((el) => el.government_aided),
    },
    {
      name: 'Public',
      data: dataList.districts_summary.map((el) => el.public),
    },
  ];
  const categories = dataList.districts_summary.map((el) => el.name);
  return (
    <div>
      {selectedDistrict ? (
        <>
          <div className="flex flex-col gap-y-4 ">
            <Card className="sticky top-14">
              <div className="flex text-center items-center justify-between">
                <button
                  onClick={() => setselectedDistrict(null)}
                  className="p-2 hover:bg-blue-700 hover:text-white bg-blue-600 text-white px-3 rounded-lg"
                >
                  Back
                </button>
                <div className="text-gray-700">
                  <h3 className="text-2xl font-bold">
                    {' '}
                    {selectedDistrict?.name} districts students
                  </h3>
                  <p className="text-gray-400">District dashboard list</p>
                </div>
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
            </Card>

            <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 gap-4">
              {[
                {
                  title: 'Private',
                  total: 12312,
                  icon: MdSchool,
                  color: 'text-blue-800',
                  bg: 'bg-blue-100',
                },
                {
                  title: 'Public',
                  total: 12312,
                  icon: MdSchool,
                  color: 'text-green-800',
                  bg: 'bg-green-100',
                },
                {
                  title: 'Government Aided',
                  total: 12312,
                  icon: MdSchool,
                  color: 'text-yellow-800',
                  bg: 'bg-yellow-100',
                },
                {
                  title: 'Total',
                  total: 12312,
                  icon: MdSchool,
                  color: 'text-purple-800',
                  bg: 'bg-purple-100',
                },
              ].map(({ title, icon, color, total, bg }, i) => {
                const Icon = icon;
                return (
                  <Card key={i} className={`${bg}-`}>
                    <div className="flex items-center justify-between">
                      <div className="">
                        <h5
                          className={`text-xl m-0 font-semibold tracking-tight ${color} `}
                        >
                          {title}
                        </h5>

                        <p className="text-gray-500 mt-2 text-sm">
                          Total students
                        </p>
                        <h5 className={`text-4xl m-0 font-extrabold ${color}`}>
                          {total}
                        </h5>
                      </div>
                      <div>
                        <Icon className={`opacity-20 text-8xl m-0  ${color}`} />
                      </div>
                    </div>
                    <div className="flex gap-2 pt-3">
                      <div className="flex-1 rounded bg-red-50 p-2">
                        <h4 className="text-xs text-red-900 opacity-60">
                          Total submitted
                        </h4>
                        <h2 className="font-bold text-lg text-red-900">
                          12332
                        </h2>
                      </div>
                      <div className="flex-1 rounded bg-green-50 p-2">
                        <h4 className="text-xs text-green-900 opacity-60">
                          Total submitted
                        </h4>
                        <h2 className="font-bold text-lg text-green-900">
                          12332
                        </h2>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <Card className="p-0">
              <div className="flex ">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold">District students list</h3>
                  <p className="text-sm text-gray-500">
                    District students list
                  </p>
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
                  <tr className="bg-gray-200">
                    <th className="p-2 border">School code</th>
                    <th className="p-2 border">School name</th>
                    <th className="p-2 border">Total submitted</th>
                    <th className="p-2 border">Total un-submited</th>
                    <th className="p-2 border">Total</th>
                    <th className="p-2 border"></th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    {
                      school_code: '110101',
                      school_name: 'CYAPEPE PRIMARY SCHOOL',
                    },
                    {
                      school_code: '110103',
                      school_name: 'EP GITEGA',
                    },
                    {
                      school_code: '110104',
                      school_name: 'GS CYAHAFI',
                    },
                    {
                      school_code: '110105',
                      school_name: 'ITETERO Nursery School',
                    },
                    {
                      school_code: '110107',
                      school_name: 'The Source Nursery School',
                    },
                    {
                      school_code: '110108',
                      school_name: 'Imbyeyi Christhian',
                    },
                    {
                      school_code: '110109',
                      school_name: 'Kigali Leading Technical School',
                    },
                    {
                      school_code: '110201',
                      school_name: 'GS KANYINYA',
                    },
                    {
                      school_code: '110202',
                      school_name: 'GS NZOVE',
                    },
                    {
                      school_code: '110203',
                      school_name: 'BIBUNGO NURSERYSCHOOL',
                    },
                    {
                      school_code: '110204',
                      school_name: 'EP NYAMWERU',
                    },
                    {
                      school_code: '110205',
                      school_name: 'Star Shine school',
                    },
                    {
                      school_code: '110206',
                      school_name: 'TVET KANYINYA',
                    },
                    {
                      school_code: '110207',
                      school_name: 'ECD RWAKIVUMU',
                    },
                    {
                      school_code: '110208',
                      school_name: 'EP BIBUNGO',
                    },
                    {
                      school_code: '110304',
                      school_name: 'FOUNDATION NURSERY SCHOOL',
                    },
                    {
                      school_code: '110305',
                      school_name: 'GS MWENDO',
                    },
                    {
                      school_code: '110306',
                      school_name: 'GS KIGALI',
                    },
                    {
                      school_code: '110309',
                      school_name: 'ECOLE MATERNELLE RUHANGO',
                    },
                    {
                      school_code: '110310',
                      school_name: 'ECOLE MATERNELLE EPR KARAMA',
                    },
                    {
                      school_code: '110311',
                      school_name: 'ECDF CENTER KARAMA',
                    },
                    {
                      school_code: '110314',
                      school_name: 'GS KARAMA',
                    },
                    {
                      school_code: '110315',
                      school_name: 'ECOLE MATERNELLE RBCR RURIBA',
                    },
                    {
                      school_code: '110316',
                      school_name: 'BETHLEHEM NURSERY SCHOOL',
                    },
                    {
                      school_code: '110317',
                      school_name: 'APAGI NURSERY SCHOOL',
                    },
                    {
                      school_code: '110319',
                      school_name: 'INKESHA NURSERY SCHOOL',
                    },
                    {
                      school_code: '110320',
                      school_name: 'PEACE NURSERY SCHOOL',
                    },
                    {
                      school_code: '110322',
                      school_name: 'RWEZA NURSERY SCHOOL',
                    },
                    {
                      school_code: '110324',
                      school_name: 'MUGANZA NURSERY SCHOOL',
                    },
                    {
                      school_code: '110325',
                      school_name: 'EP RWESERO',
                    },
                    {
                      school_code: '110326',
                      school_name: 'GATARE NURSERY SCHOOL',
                    },
                    {
                      school_code: '110327',
                      school_name: 'ECOLE MATERNELLE LES PEPINIERES',
                    },
                    {
                      school_code: '110329',
                      school_name: 'EP Karama EPR',
                    },
                    {
                      school_code: '110330',
                      school_name: 'EP GATARE',
                    },
                    {
                      school_code: '110331',
                      school_name: 'LES GAZELLES DE KIGALI',
                    },
                    {
                      school_code: '110332',
                      school_name: 'Creche et Maternelle Ange Gardien',
                    },
                    {
                      school_code: '110333',
                      school_name: 'New Hope Nursery School',
                    },
                    {
                      school_code: '110334',
                      school_name: 'ECD Center Ruhondo Village',
                    },
                    {
                      school_code: '110401',
                      school_name: 'APADERWA',
                    },
                    {
                      school_code: '110402',
                      school_name: 'APPEK KAMUHOZA',
                    },
                    {
                      school_code: '110404',
                      school_name: 'ECOLE PRIMAIRE KAMUHOZA',
                    },
                    {
                      school_code: '110405',
                      school_name: 'EP MUGANZA',
                    },
                    {
                      school_code: '110406',
                      school_name: 'GS KIMISAGARA',
                    },
                    {
                      school_code: '110407',
                      school_name: 'NUSRA NURSERY SCHOOL',
                    },
                    {
                      school_code: '110408',
                      school_name: 'LA PROMISE NURSERY SCHOOL',
                    },
                    {
                      school_code: '110409',
                      school_name: 'UHUDI NURSERY SCHOOL',
                    },
                    {
                      school_code: '110410',
                      school_name: 'UNITY ACADEMY NURSERY SCHOOL',
                    },
                    {
                      school_code: '110413',
                      school_name: 'HOPE NURSERY SCHOOL',
                    },
                  ].map((el, i) => {
                    const male = generateRandomNumber();
                    const female = generateRandomNumber();
                    return (
                      <tr
                        key={i}
                        className={`${
                          i % 2 ? 'bg-gray-100' : ''
                        } hover:bg-blue-200`}
                      >
                        <td className="p-2 border">{el.school_code}</td>
                        <td className="p-2 border">{el.school_name}</td>
                        <td className="p-2 border">{male}</td>
                        <td className="p-2 border">{female}</td>
                        <td className="p-2 border">{female + female}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Card>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-y-4 ">
            <Card className="sticky top-14">
              <div className="flex items-center justify-between">
                <div className="text-gray-700">
                  <h3 className="text-2xl font-bold">Districts students</h3>
                  <p className="text-gray-400">District dashboard list</p>
                </div>
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
                      title="Academic"
                      value="2021 - 2023"
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
            </Card>

            <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 gap-4">
              {[
                {
                  title: 'Private',
                  total: 12312,
                  icon: MdSchool,
                  color: 'text-blue-800',
                  bg: 'bg-blue-100',
                },
                {
                  title: 'Public',
                  total: 12312,
                  icon: MdSchool,
                  color: 'text-green-800',
                  bg: 'bg-green-100',
                },
                {
                  title: 'Government Aided',
                  total: 12312,
                  icon: MdSchool,
                  color: 'text-yellow-800',
                  bg: 'bg-yellow-100',
                },
                {
                  title: 'Total',
                  total: 12312,
                  icon: MdSchool,
                  color: 'text-purple-800',
                  bg: 'bg-purple-100',
                },
              ].map(({ title, icon, color, total, bg }, i) => {
                const Icon = icon;
                return (
                  <Card key={i} className={`${bg}-`}>
                    <div className="flex items-center justify-between">
                      <div className="">
                        <h5
                          className={`text-xl m-0 font-semibold tracking-tight ${color} `}
                        >
                          {title}
                        </h5>

                        <p className="text-gray-500 mt-2 text-sm">
                          Total students
                        </p>
                        <h5 className={`text-4xl m-0 font-extrabold ${color}`}>
                          {total}
                        </h5>
                      </div>
                      <div>
                        <Icon className={`opacity-20 text-8xl m-0  ${color}`} />
                      </div>
                    </div>
                    <div className="flex gap-2 pt-3">
                      <div className="flex-1 rounded bg-red-50 p-2">
                        <h4 className="text-xs text-red-900 opacity-60">
                          Total submitted
                        </h4>
                        <h2 className="font-bold text-lg text-red-900">
                          12332
                        </h2>
                      </div>
                      <div className="flex-1 rounded bg-green-50 p-2">
                        <h4 className="text-xs text-green-900 opacity-60">
                          Total submitted
                        </h4>
                        <h2 className="font-bold text-lg text-green-900">
                          12332
                        </h2>
                      </div>
                    </div>
                  </Card>
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
                title="District school total"
                width="100%"
                height={600}
              />
            </Card>

            <Card className="p-0">
              <div className="flex ">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold">District students list</h3>
                  <p className="text-sm text-gray-500">
                    District students list
                  </p>
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
                  {dataList.districts_summary.map((el, i) => (
                    <tr
                      key={i}
                      className={`${
                        i % 2 ? 'bg-gray-100' : ''
                      } hover:bg-blue-200`}
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
                      <td className="p-2 border bg-purple-50 -50">
                        {el.public}
                      </td>

                      <td className="p-2 border bg-purple-50">{el.public}</td>
                      <td className="p-2 border bg-purple-50">{el.public}</td>

                      <td className="w-40 p-1">
                        <button
                          onClick={() => setselectedDistrict(el)}
                          className="p-2 w-full text-sm hover:bg-blue-700 hover:text-white bg-blue-100 text-blue-600 px-3 rounded-lg"
                        >
                          Open district
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardPage;
