import { TitlePadding, LayoutScreen, LayoutCardTab } from "./styled";
import VmDetailHeader from "./VmDetailHeader/index";
import VmDetailCharts from "./VmDetailCharts/index";
import VmDetailParameter from "./VmDetailParameter/index";

import { Tabs } from "antd";
const { TabPane } = Tabs;

export default function VmDetailView() {
  const onChange = () => {};

  const VMPage = () => (
    <LayoutCardTab>
      <Tabs onChange={onChange} type="card">
        <TabPane tab="Infra Usage" key="1">
          <VmDetailCharts />
        </TabPane>
        <TabPane tab="Customer Parameter" key="2">
          <VmDetailParameter />
        </TabPane>
      </Tabs>
    </LayoutCardTab>
  );

  return (
    <div>
      <LayoutScreen>
        <VmDetailHeader />
        <TitlePadding />
        <VMPage />
      </LayoutScreen>
    </div>
  );
}
