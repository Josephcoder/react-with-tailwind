import { MdSchool } from 'react-icons/md';
import { PiStudentBold } from 'react-icons/pi';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';

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
export const SchoolOwner = [
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
];
export const TeacherOwner = [
  {
    title: 'Private',
    total: 12312,
    icon: LiaChalkboardTeacherSolid,
    color: 'text-blue-800',
    bg: 'bg-blue-100',
  },
  {
    title: 'Public',
    total: 12312,
    icon: LiaChalkboardTeacherSolid,
    color: 'text-green-800',
    bg: 'bg-green-100',
  },
  {
    title: 'Government Aided',
    total: 12312,
    icon: LiaChalkboardTeacherSolid,
    color: 'text-yellow-800',
    bg: 'bg-yellow-100',
  },
  {
    title: 'Total',
    total: 12312,
    icon: LiaChalkboardTeacherSolid,
    color: 'text-purple-800',
    bg: 'bg-purple-100',
  },
];
export const StudentOwner = [
  {
    title: 'Private',
    total: 12312,
    icon: PiStudentBold,
    color: 'text-blue-800',
    bg: 'bg-blue-100',
  },
  {
    title: 'Public',
    total: 12312,
    icon: PiStudentBold,
    color: 'text-green-800',
    bg: 'bg-green-100',
  },
  {
    title: 'Government Aided',
    total: 12312,
    icon: PiStudentBold,
    color: 'text-yellow-800',
    bg: 'bg-yellow-100',
  },
  {
    title: 'Total',
    total: 12312,
    icon: PiStudentBold,
    color: 'text-purple-800',
    bg: 'bg-purple-100',
  },
];
export default {
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
} as MarksInterface;
