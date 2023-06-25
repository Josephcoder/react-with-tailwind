import { IconType } from 'react-icons';
import { Card } from './Card';

interface Props {
  color: string;
  title: string;
  subtitle: string;
  total: number;
  icon: IconType;
  bg: string;
}
const MarksSubMiniStatistics = ({
  color,
  title,
  subtitle,
  total,
  icon,
  bg,
}: Props) => {
  const Icon = icon;

  return (
    <Card className={`${bg}-`}>
      <div className="flex items-center justify-between">
        <div className="">
          <h5 className={`text-xl m-0 font-semibold tracking-tight ${color} `}>
            {title}
          </h5>

          <p className="text-gray-500 mt-2 text-sm">Total {subtitle}</p>
          <h5 className={`text-4xl m-0 font-extrabold ${color}`}>{total}</h5>
        </div>
        <div>
          <Icon className={`opacity-20 text-8xl m-0  ${color}`} />
        </div>
      </div>
      <div className="flex gap-2 pt-3">
        <div className="flex-1 rounded bg-red-50 p-2">
          <h4 className="text-xs text-red-900 opacity-60">Submitted</h4>
          <h2 className="font-bold text-lg text-red-900">12332</h2>
        </div>
        <div className="flex-1 rounded bg-green-50 p-2">
          <h4 className="text-xs text-green-900 opacity-60">Not submitted</h4>
          <h2 className="font-bold text-lg text-green-900">12332</h2>
        </div>
      </div>
    </Card>
  );
};

export default MarksSubMiniStatistics;
