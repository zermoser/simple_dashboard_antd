import PropTypes from 'prop-types';
import {
  TitlePadding,
  ItemListMini,
  ItemList,
  MiniCard,
  Card,
  LayoutPageInfraUsage,
  StyleText1,
  StyleText2,
  StyleText3,
  LayoutCard,
  Line,
  AddMediaCard,
  AddMediaHeader,
} from "./styled";

const CardVM_Detail = ({ data }) => {
  return (
    <div>
      {data?.map((item, index) => (
        <div key={index}>
          <ItemList>
            <div>{item?.title}</div>
            <StyleText1>
              <div>{item?.detail}</div>
            </StyleText1>
          </ItemList>
        </div>
      ))}
    </div>
  );
};

CardVM_Detail.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      detail: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const CardVM_DetailMini = ({ dataMini }) => {
  return (
    <div>
      {dataMini?.map((item, index) => (
        <div key={index}>
          <ItemListMini>
            <StyleText2>
              <div>{item?.title}</div>
            </StyleText2>
            <TitlePadding />
            <StyleText3>
              <div>{item?.detail}</div>
            </StyleText3>
          </ItemListMini>
        </div>
      ))}
    </div>
  );
};

CardVM_DetailMini.propTypes = {
  dataMini: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      detail: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default function VmDetailHeader() {
  return (
    <div>
      <LayoutPageInfraUsage>
        <LayoutCard>
          <Card>
            <AddMediaHeader>
              <CardVM_Detail
                data={[
                  { title: "Infra Name :", detail: "Cluster Number4" },
                  { title: "Network IP :", detail: "291.44.456.78" },
                  { title: "IP Address :", detail: "80.127.345.789" },
                  { title: "External :", detail: "80.127.345.789" },
                ]}
              />
              <Line />
              <CardVM_Detail
                data={[
                  { title: "OS", detail: "Mac os Catalina" },
                  { title: "CPU", detail: "4 Cores" },
                  { title: "Memory", detail: "4 Gigabyte" },
                  { title: "Disk", detail: "256 Gigabyte" },
                ]}
              />
            </AddMediaHeader>
          </Card>

          <div style={{ marginLeft: "1em" }} />

          <AddMediaCard>
            <MiniCard>
              <CardVM_DetailMini
                dataMini={[
                  { title: "Memory", detail: "4 Cores" },
                  { title: "Usage : ", detail: "50 %" },
                ]}
              />
            </MiniCard>
            <div style={{ marginLeft: "1em" }} />
            <MiniCard>
              <CardVM_DetailMini
                dataMini={[
                  { title: "Disk", detail: "4 Bytes" },
                  { title: "Usage : ", detail: "50 %" },
                ]}
              />
            </MiniCard>
          </AddMediaCard>
        </LayoutCard>
      </LayoutPageInfraUsage>
    </div>
  );
}
