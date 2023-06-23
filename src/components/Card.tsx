import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  title?: string;
}
const Card = ({ children }: Props) => {
  return (
    <div className="bg-white rounded-md shadow-lg border border-1 border-gray-100  p-4 sm:p-4 md:p-4">
      {children}
    </div>
  );
};

const CardHeader = ({ title }: Props) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-medium text-gray-800">{title}</h2>
    </div>
  );
};

const CardOverHeader = ({ title }: Props) => {
  return (
    <div className="bg-white border border-1 shadow border-gray-100 rounded-lg -mt-14 mb-6  p-3 w-full flex flex-wrap justify-center">
      <div className="flex justify-center w-full">
        <div className="relative">
          <p className=" text-xl">{title}</p>
          {/* <p>230,000</p> */}
        </div>
      </div>
    </div>
  );
};

const CardFooter = ({ children }: Props) => {
  return <div className="mt-4">{children}</div>;
};

export { Card, CardFooter, CardHeader, CardOverHeader };
