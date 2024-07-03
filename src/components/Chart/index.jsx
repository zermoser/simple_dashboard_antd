import PropTypes from "prop-types";
import { theme } from "../../theme";

export default function ChartData(props) {
  const {
    title,
    type = "area",
    categories = [],
    series = [],
    width,
    height,
    colors = [theme.COLORS.CHART_DEFAULT_2],
  } = props;

  const VMChart = {
    options: {
      colors: [],
      dataLabels: {
        enabled: false,
      },
      chart: {
        toolbar: {
          show: false,
        },
        id: "chart",
      },
      xaxis: {
        categories: [],
      },
    },
    series: [],
  };

  return (
    <div>
      <h3>{title}</h3>
      <Chart
        options={{
          ...VMChart.options,
          xaxis: { categories: categories },
          colors: colors,
        }}
        series={series}
        width={width}
        height={height}
        type={type}
      />
    </div>
  );
}

ChartData.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    "line",
    "area",
    "bar",
    "pie",
    "donut",
    "radar",
    "scatter",
    "bubble",
    "heatmap",
    "candlestick",
  ]),
  categories: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  series: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      data: PropTypes.arrayOf(PropTypes.number).isRequired,
    })
  ),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  colors: PropTypes.arrayOf(PropTypes.string),
};

ChartData.defaultProps = {
  type: "area",
  categories: [],
  series: [],
  colors: [theme.COLORS.CHART_DEFAULT_2],
};
