import PropTypes from "prop-types";
import { Progress } from "antd";

export default function ProgressBar(props) {
  const {
    strokeLinecap = "butt",
    strokeColor = "lightblue",
    percent,
    showInfo = false,
  } = props;

  return (
    <div>
      <Progress
        strokeLinecap={strokeLinecap}
        strokeColor={strokeColor}
        percent={percent}
        showInfo={showInfo}
      />
    </div>
  );
}

ProgressBar.propTypes = {
  strokeLinecap: PropTypes.oneOf(["butt", "round", "square"]),
  strokeColor: PropTypes.string,
  percent: PropTypes.number.isRequired,
  showInfo: PropTypes.bool,
};

ProgressBar.defaultProps = {
  strokeLinecap: "butt",
  strokeColor: "lightblue",
  showInfo: false,
};
