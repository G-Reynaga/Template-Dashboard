import ApexCharts from "apexcharts";

interface MainChartColors {
  borderColor: string;
  labelColor: string;
  opacityFrom: number;
  opacityTo: number;
}

interface TrafficChannelsChartColors {
  strokeColor: string;
}

const getMainChartOptions = () => {
  let mainChartColors: MainChartColors = {
    borderColor: "",
    labelColor: "",
    opacityFrom: 0,
    opacityTo: 0,
  };

  if (document.documentElement.classList.contains("dark")) {
    mainChartColors = {
      borderColor: "#374151",
      labelColor: "#9CA3AF",
      opacityFrom: 0,
      opacityTo: 0.15,
    };
  } else {
    mainChartColors = {
      borderColor: "#F3F4F6",
      labelColor: "#6B7280",
      opacityFrom: 0.45,
      opacityTo: 0,
    };
  }

  return {
    chart: {
      height: 420,
      type: "area",
      fontFamily: "Inter Variable, sans-serif",
      foreColor: mainChartColors.labelColor,
      toolbar: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        enabled: true,
        opacityFrom: mainChartColors.opacityFrom,
        opacityTo: mainChartColors.opacityTo,
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      style: {
        fontSize: "14px",
        fontFamily: "Inter Variable, sans-serif",
      },
    },
    grid: {
      show: true,
      borderColor: mainChartColors.borderColor,
      strokeDashArray: 1,
      padding: {
        left: 35,
        bottom: 15,
      },
    },
    series: [
      {
        name: "Revenue",
        data: [6356, 6218, 6156, 6526, 6356, 6256, 6056],
        color: "#1A56DB",
      },
      {
        name: "Revenue (previous period)",
        data: [6556, 6725, 6424, 6356, 6586, 6756, 6616],
        color: "#FDBA8C",
      },
    ],
    markers: {
      size: 5,
      strokeColors: "#ffffff",
      hover: {
        size: undefined,
        sizeOffset: 3,
      },
    },
    xaxis: {
      categories: [
        "01 Feb",
        "02 Feb",
        "03 Feb",
        "04 Feb",
        "05 Feb",
        "06 Feb",
        "07 Feb",
      ],
      labels: {
        style: {
          colors: [mainChartColors.labelColor],
          fontSize: "14px",
          fontWeight: 800,
        },
      },
      axisBorder: {
        color: mainChartColors.borderColor,
      },
      axisTicks: {
        color: mainChartColors.borderColor,
      },
      crosshairs: {
        show: true,
        position: "back",
        stroke: {
          color: mainChartColors.borderColor,
          width: 1,
          dashArray: 10,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: [mainChartColors.labelColor],
          fontSize: "14px",
          fontWeight: 500,
        },
        formatter(value: any) {
          return `$${value}`;
        },
      },
    },
    legend: {
      fontSize: "14px",
      fontWeight: 500,
      fontFamily: "Inter Variable, sans-serif",
      labels: {
        colors: [mainChartColors.labelColor],
      },
      itemMargin: {
        horizontal: 10,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          xaxis: {
            labels: {
              show: false,
            },
          },
        },
      },
    ],
  };
};

document.addEventListener("astro:page-load", () => {
  if (document.getElementById("main-chart")) {
    const chart = new ApexCharts(
      document.getElementById("main-chart"),
      getMainChartOptions()
    );
    chart.render();

    document.addEventListener("dark-mode", () => {
      chart.updateOptions(getMainChartOptions());
    });
  }
});

const getSalesBYCategory = () => {
  return {
    colors: ["#1A56DB", "#FDBA8C"],
    series: [
      {
        name: "Desktop PC",
        color: "#1A56DB",
        data: [
          { x: "01 Feb", y: 170 },
          { x: "02 Feb", y: 180 },
          { x: "03 Feb", y: 164 },
          { x: "04 Feb", y: 145 },
          { x: "05 Feb", y: 194 },
          { x: "06 Feb", y: 170 },
          { x: "07 Feb", y: 155 },
        ],
      },
      {
        name: "Phones",
        color: "#FDBA8C",
        data: [
          { x: "01 Feb", y: 120 },
          { x: "02 Feb", y: 294 },
          { x: "03 Feb", y: 167 },
          { x: "04 Feb", y: 179 },
          { x: "05 Feb", y: 245 },
          { x: "06 Feb", y: 182 },
          { x: "07 Feb", y: 143 },
        ],
      },
      {
        name: "Gaming/Console",
        color: "#17B0BD",
        data: [
          { x: "01 Feb", y: 220 },
          { x: "02 Feb", y: 194 },
          { x: "03 Feb", y: 217 },
          { x: "04 Feb", y: 279 },
          { x: "05 Feb", y: 215 },
          { x: "06 Feb", y: 263 },
          { x: "07 Feb", y: 183 },
        ],
      },
    ],
    chart: {
      type: "bar",
      height: "420px",
      fontFamily: "Inter Variable, sans-serif",
      foreColor: "#4B5563",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "90%",
        borderRadius: 3,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      style: {
        fontSize: "14px",
        fontFamily: "Inter Variable, sans-serif",
      },
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 1,
        },
      },
    },
    stroke: {
      show: true,
      width: 5,
      colors: ["transparent"],
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      floating: false,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
  };
};

document.addEventListener("astro:page-load", () => {
  if (document.getElementById("sales-by-category")) {
    const chart = new ApexCharts(
      document.getElementById("sales-by-category"),
      getSalesBYCategory()
    );
    chart.render();

    document.addEventListener("dark-mode", () => {
      chart.updateOptions(getSalesBYCategory());
    });
  }
});

const getTrafficChannelsChartOptions = () => {
  let trafficChannelsChartColors: TrafficChannelsChartColors = {
    strokeColor: "",
  };

  if (document.documentElement.classList.contains("dark")) {
    trafficChannelsChartColors = {
      strokeColor: "#1f2937",
    };
  } else {
    trafficChannelsChartColors = {
      strokeColor: "#ffffff",
    };
  }

  return {
    series: [70, 5, 25],
    labels: ["Atendidos", "Pendientes", "Rechazados"],
    colors: ["#16BDCA", "#FDBA8C", "#A34343"],
    chart: {
      type: "donut",
      height: 400,
      fontFamily: "Inter Variable, sans-serif",
      toolbar: {
        show: false,
      },
    },
    responsive: [
      {
        breakpoint: 430,
        options: {
          chart: {
            height: 300,
          },
        },
      },
    ],
    stroke: {
      colors: [trafficChannelsChartColors.strokeColor],
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 0.9,
        },
      },
    },
    tooltip: {
      shared: true,
      followCursor: false,
      fillSeriesColor: false,
      inverseOrder: true,
      style: {
        fontSize: "14px",
        fontFamily: "Inter Variable, sans-serif",
      },
      x: {
        show: true,
        formatter(_value: any, { seriesIndex, w }: any) {
          const label = w.config.labels[seriesIndex];
          return label;
        },
      },
      y: {
        formatter(value: any) {
          return `${value}%`;
        },
      },
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
  };
};

document.addEventListener("astro:page-load", () => {
  if (document.getElementById("traffic-by-device")) {
    const chart = new ApexCharts(
      document.getElementById("traffic-by-device"),
      getTrafficChannelsChartOptions()
    );
    chart.render();

    document.addEventListener("dark-mode", () => {
      chart.updateOptions(getTrafficChannelsChartOptions());
    });
  }
});
