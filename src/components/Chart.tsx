import HighCharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useRef } from "react";
import "../styles/Chart.scss";

interface ChartProps {
  options: {};
}

const Chart: React.FC<ChartProps> = ({ options }) => {
  const chartRef = useRef<HighchartsReact.RefObject>(null);

  useEffect(() => {
    setTimeout(() => chartRef.current?.chart.reflow(), 0);
  }, [])

  return (
    <>
      <div className="chart-container">
        <HighchartsReact
          containerProps={{ style: { height: "100%", width: "100%" ,display: "block"} }}
          highcharts={HighCharts}
          options={options}
          ref={chartRef}
        />
      </div>
    </>
  );
};

export default Chart;
