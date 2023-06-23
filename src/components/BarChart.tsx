import ReactApexChart from 'react-apexcharts';

export const BarChart = ({
  categories,
  series,
  type = 'bar',
  title,
  width,
  height,
}: {
  categories: string[];
  series: { name: string; data: number[] }[];
  type: 'bar' | 'pie';
  title: string;
  width: string;
  height?: number;
}) => {
  const districtsTotalSchools = {
    series,
    options: {
      chart: {
        type,
        background: '#f4f4f4',
        foreColor: '#333',
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: title,
        margin: 20,
        offset: 20,
        align: 'center',
      },
      xaxis: {
        categories,
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={districtsTotalSchools.options}
        series={districtsTotalSchools.series}
        type={type}
        width={width}
        height={height}
      />
    </div>
  );
};
export default BarChart;
