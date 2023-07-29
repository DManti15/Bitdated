import HighCharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import '../styles/Chart.scss';

interface ChartProps {
  options: {};
}

const Chart: React.FC<ChartProps> = ({ options }) => {
  return (
    <>
      <div className="chart-container">
        <HighchartsReact highcharts={HighCharts} options={options} />
      </div>
    </>
  );
};

export default Chart;
