const DEFAULT_OPTIONS = {
  chart: {
    backgroundColor: "transparent",
    height: "300",
  },

  title: {
    text: "Market Price (USD)",
    style: {
      color: "#2d2d30",
    },
  },

  legend: {
    itemStyle: {
      color: "#2d2d30",
    },
  },

  credits: {
    enabled: false,
  },

  xAxis: {
    type: "datetime",
    accessibility: {
      rangeDescription: "Range: 2021 to 2022",
    },
    labels: {
      format: "{value:%d %b}",
      style: {
        color: "#2d2d30",
      },
    },
    plotOptions: {
      series: {
        pointStart: 2022,
      },
    },
  },
  yAxis: {
    title: {
      text: "",
    },
    categories: "USD",
    labels: {
      format: "${value}",
      style: {
        color: "#2d2d30",
      },
    },
  },

  series: [
    {
      name: "Bitcoin",
      data: [],
      color: "#F7931A",
    },
  ],
};

const DARK_OPTIONS = {
  title: {
    style: {
      color: "#f4f5f8",
    },
  },
  legend: {
    itemStyle: {
      color: "#f4f5f8",
    },
  },
  xAxis: {
    labels: {
      style: {
        color: "#f4f5f8",
      },
    },
  },
  yAxis: {
    labels: {
      style: {
        color: "#f4f5f8",
      },
    },
  },
};

const LIGHT_OPTIONS = {
  title: {
    style: {
      color: "#19191b",
    },
  },
  legend: {
    itemStyle: {
      color: "#19191b",
    },
  },
  xAxis: {
    labels: {
      style: {
        color: "#19191b",
      },
    },
  },
  yAxis: {
    labels: {
      style: {
        color: "#19191b",
      },
    },
  },
}

export { DEFAULT_OPTIONS, DARK_OPTIONS, LIGHT_OPTIONS }