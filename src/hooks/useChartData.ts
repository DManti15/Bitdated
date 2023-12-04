import { useState, useEffect } from "react";
import { DEFAULT_OPTIONS } from "../constants/chartOptions";
import { CHART_API } from "../constants/apis";

export function useChartData() {
  const [options, setOptions] = useState<{}>(DEFAULT_OPTIONS);

  const getChartData = () => {
    fetch(
      `${CHART_API}market-price?timespan=1weeks&sampled=true&metadata=false&cors=true&format=json`
    )
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        const keys = Object.keys(response.values);
        let myDataArr: { x: number; y: number }[] = [];
        keys.forEach((key) => {
          let data1 = response.values[key].x * 1000;
          let data2 = response.values[key].y;
          let myData = { x: data1, y: data2 };
          myDataArr.push(myData);
        });
        setOptions({ series: [{ data: myDataArr }] });
      });
  };

  useEffect(getChartData, []);

  return { options, setOptions, getChartData };
}
