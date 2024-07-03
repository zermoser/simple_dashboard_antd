import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { theme } from "../../theme";

export default function ButtonApp(props) {
  const {
    title,
    color,
    backgroundColor,
    width,
    height,
    borderRadius,
    border,
    marginLeft,
    disable,
    handleClick,
    size,
  } = props;

  return (
    <Button
      sx={{
        backgroundColor: backgroundColor || theme.COLORS.BLUE_MAIN,
        color: color || theme.COLORS.WHITE_1,
        width: width,
        height: height,
        borderRadius: borderRadius || "10px",
        border: border,
        marginLeft: marginLeft || "15px",
        disable: disable,
        textTransform: "capitalize",
        fontFamily: theme.FONT_FAMILY.MEDIUM,
        ":hover": {
          bgcolor: theme.COLORS.BLUE_MAIN,
        },
      }}
      size={size ? size : "small"}
      variant="contained"
      onClick={disable ? null : handleClick}
    >
      {title}
    </Button>
  );
}

ButtonApp.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  border: PropTypes.string,
  marginLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disable: PropTypes.bool,
  handleClick: PropTypes.func,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

ButtonApp.defaultProps = {
  color: theme.COLORS.WHITE_1,
  backgroundColor: theme.COLORS.BLUE_MAIN,
  borderRadius: "10px",
  marginLeft: "15px",
  disable: false,
  size: "small",
};
