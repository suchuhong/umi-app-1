import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Table } from 'antd';
import { useState } from 'react';

function SearchTable({ data }) {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    console.log('Performing search for:', searchText);
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) => {
      if (searchedColumn === dataIndex && record[dataIndex]) {
        return record[dataIndex]
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase());
      }
      return false;
    },
  });

  const columns = Object.keys(data[0]).map((key, index) => ({
    title: key,
    dataIndex: key,
    key: index,
    ...getColumnSearchProps(key),
  }));

  // const columns = Object.keys(data[0]).map((item) => ({
  //   title: item.key,
  //   dataIndex: item.key,
  //   key: item.id, // 使用列表项的唯一标识符作为 key
  //   ...getColumnSearchProps(item.key),
  // }));

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ defaultPageSize: 5 }} // 分页配置
    />
  );
}

export default SearchTable;
