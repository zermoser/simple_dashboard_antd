import PropTypes from "prop-types";
import { Dropdown } from "./styled";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function DropdownButton(props) {
  const {
    HeaderDropdown = "Header",
    TextDropdown_1 = "Text 1",
    TextDropdown_2 = "Text 2",
    TextDropdown_3 = "Text 3",
    LinkPage_1 = "#path1",
    LinkPage_2 = "#path2",
    LinkPage_3 = "#path3",
  } = props;

  const DropdownFunction = () => (
    <Dropdown>
      <div className="Dropdown">
        <button className="DropdownButton">
          {HeaderDropdown} <ArrowDropDownIcon />
        </button>
        <div className="Dropdown-Content">
          <a href={LinkPage_1}> {TextDropdown_1} </a>
          <a href={LinkPage_2}> {TextDropdown_2} </a>
          <a href={LinkPage_3}> {TextDropdown_3} </a>
        </div>
      </div>
    </Dropdown>
  );

  return (
    <div>
      <DropdownFunction />
    </div>
  );
}

DropdownButton.propTypes = {
  HeaderDropdown: PropTypes.string,
  TextDropdown_1: PropTypes.string,
  TextDropdown_2: PropTypes.string,
  TextDropdown_3: PropTypes.string,
  LinkPage_1: PropTypes.string,
  LinkPage_2: PropTypes.string,
  LinkPage_3: PropTypes.string,
};

DropdownButton.defaultProps = {
  HeaderDropdown: "Header",
  TextDropdown_1: "Text 1",
  TextDropdown_2: "Text 2",
  TextDropdown_3: "Text 3",
  LinkPage_1: "#path1",
  LinkPage_2: "#path2",
  LinkPage_3: "#path3",
};
