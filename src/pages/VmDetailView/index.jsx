import { TitlePadding, LayoutScreen, LayoutCardTab } from "./styled";
import VmDetailHeader from "./VmDetailHeader/index";
import VmDetailCharts from "./VmDetailCharts/index";
import VmDetailParameter from "./VmDetailParameter/index";
import { Tabs } from "antd";

const App = () => {
  const items = [
    {
      key: '1',
      label: 'Infra Usage',
      children: <VmDetailCharts />
    },
    {
      key: '2',
      label: 'Customer Parameter',
      children: <VmDetailParameter />
    }
  ];

  return (
    <div>
      <LayoutScreen>
        <VmDetailHeader />
        <TitlePadding />
        <LayoutCardTab>
          <Tabs type="card" defaultActiveKey="1" items={items} />
        </LayoutCardTab>
      </LayoutScreen>
    </div>
  );
};

export default App;
