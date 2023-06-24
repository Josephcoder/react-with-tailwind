import ReactApexChart from "react-apexcharts";

export const BarChart = ({
  categories,
  series,
  type = "bar",
  title,
  width,
  height,
  stacked,
}: {
  categories: string[];
  series: { name: string; data: number[] }[];
  type: "bar" | "pie";
  title: string;
  width: string;
  height?: number;
  stacked?: boolean;
}) => {
  const districtsTotalSchools = {
    series,
    stacked: true,
    options: {
      chart: {
        type,
        background: "#fff",
        foreColor: "#333",
        stacked: true,
      },
      // colors: ["#50e7a6", "#E91E63", "#9C27B0"],

      plotOptions: {
        bar: {
          // borderRadius: 4,
          horizontal: false,
        },
      },
      stacked: true,

      dataLabels: {
        enabled: false,
      },
      title: {
        text: title,
        margin: 20,
        offset: 20,
        align: "center",
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
