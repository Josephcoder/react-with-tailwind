import { Card } from '../components/Card';
import SmallNavBar from '../components/SmallNavBar';

const DistrictSchool = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <Card className="sticky top-14 z-40">
        <SmallNavBar title="School Marks" />
      </Card>
    </div>
  );
};

export default DistrictSchool;
