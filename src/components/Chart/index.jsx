import PropTypes from "prop-types";
import ApexCharts from "react-apexcharts";
import { theme } from "../../theme";

const ChartData = ({
  title,
  type = "area",
  categories = [],
  series = [],
  width,
  height,
  colors = [theme.COLORS.CHART_DEFAULT_2],
}) => {
  const chartOptions = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: categories,
    },
    colors: colors,
  };

  return (
    <div>
      <h3>{title}</h3>
      <ApexCharts options={chartOptions} series={series} type={type} width={width} height={height} />
    </div>
  );
};

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

export default ChartData;
