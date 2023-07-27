import HighCharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface ChartProps {
  options: {}
}

const Chart: React.FC<ChartProps> = ({ options }) => {
  return (
    <>
      <div
        id="container"
        style={{ display: "block", padding: "0 15px 0 15px" }}>
        <HighchartsReact highcharts={HighCharts} options={options} />
      </div>
    </>
  );
};

export default Chart;
