import PropTypes from "prop-types";
import { Table } from "antd";

export default function Tables({ columns, data, rowSelection }) {
  return (
    <div>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={data}
        pagination={true}
        rowSelection={rowSelection}
      />
    </div>
  );
}

Tables.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      dataIndex: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      render: PropTypes.func,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  rowSelection: PropTypes.shape({
    onChange: PropTypes.func,
    getCheckboxProps: PropTypes.func,
    selectedRowKeys: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  }),
};
