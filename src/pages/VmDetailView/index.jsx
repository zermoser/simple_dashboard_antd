import { TitlePadding, LayoutScreen, LayoutCardTab } from "./styled";
import VmDetailHeader from "./VmDetailHeader/index";
import VmDetailCharts from "./VmDetailCharts/index";
import VmDetailParameter from "./VmDetailParameter/index";

import { Tabs } from "antd";

export default function VmDetailView() {
  const onChange = (key) => {
    console.log(key);
  };
  
  const items = [
    {
      key: '1',
      tab: 'Infra Usage',
      content: <VmDetailCharts />
    },
    {
      key: '2',
      tab: 'Customer Parameter',
      content: <VmDetailParameter />
    }
  ];

  return (
    <div>
      <LayoutScreen>
        <VmDetailHeader />
        <TitlePadding />
        <LayoutCardTab>
          <Tabs onChange={onChange} type="card">
            {items.map(item => (
              <Tabs key={item.key} tab={item.tab}>
                {item.content}
              </Tabs>
            ))}
          </Tabs>
        </LayoutCardTab>
      </LayoutScreen>
    </div>
  );
}
