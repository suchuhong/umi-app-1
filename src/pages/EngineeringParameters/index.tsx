import { Button, Checkbox, Select, Table } from 'antd';
import { useEffect, useState } from 'react';
import OptionSelect from './OptionSelect';

const fetchOptions = async (url, setOptions, setLoading) => {
  setLoading(true);

  try {
    const request = new Request(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const response = await fetch(request);
    const { data, success, errorCode } = await response.json();

    if (success) {
      const { list } = data;
      setOptions(list);
    } else {
      console.error('Error fetching options:', errorCode);
    }
  } catch (error) {
    console.error('Error fetching options:', error);
  }

  setLoading(false);
};

const EngineeringParametersPage = () => {
  const [options1, setOptions1] = useState([]);
  const [options2, setOptions2] = useState([]);
  const [options3, setOptions3] = useState([]);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [options4, setOptions4] = useState([]);

  const [dropdownVisible4, setDropdownVisible4] = useState(false);
  const [selectedFields, setSelectedFields] = useState([]);
  const [tableData, setTableData] = useState([]);

  const handleDropdownVisibleChange4 = (visible) => {
    setDropdownVisible4(visible);
  };

  const filterOption = (inputValue, option) => {
    return option.props.children
      .toLowerCase()
      .includes(inputValue.toLowerCase());
  };

  const handleFieldChange = (values) => {
    setSelectedFields(values);
  };

  const columns = selectedFields.map((field) => ({
    title: field,
    dataIndex: field,
    key: field,
  }));

  useEffect(() => {
    const url1 = '/api/v1/engineering/1';
    fetchOptions(url1, setOptions1, setLoading1);
    const url2 = '/api/v1/engineering/1';
    fetchOptions(url2, setOptions2, setLoading2);
    const url3 = '/api/v1/engineering/1';
    fetchOptions(url3, setOptions3, setLoading3);
    const url4 = '/api/v1/engineering/1';
    fetchOptions(url4, setOptions4, setLoading4);
  }, []);

  const fetchData = async () => {
    try {
      const request = new Request('/api/v1/engineering/2', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const response = await fetch(request);
      const { data } = await response.json();
      const { list } = data;
      // 根据所选字段筛选数据
      const filteredData = list.map((item) => {
        const filteredItem = {};
        selectedFields.forEach((field) => {
          filteredItem[field] = item[field];
        });
        return filteredItem;
      });
      setTableData(filteredData);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleQuery = () => {
    // 执行查询操作，使用选中的选项进行搜索
    console.log('Option 1:', selectedOption1);
    console.log('Option 2:', selectedOption2);
    console.log('Option 3:', selectedOption3);
    // 进行其他查询逻辑...
  };

  useEffect(() => {
    fetchData();
  }, [selectedFields]);

  return (
    <>
      <div>
        <OptionSelect
          loading={loading1}
          options={options1}
          placeholder="Select option 1"
          onChange={setSelectedOption1}
        />

        <OptionSelect
          loading={loading2}
          options={options2}
          placeholder="Select option 2"
          onChange={setSelectedOption2}
        />

        <OptionSelect
          loading={loading3}
          options={options3}
          placeholder="Select option 3"
          onChange={setSelectedOption3}
        />

        <Select
          mode="multiple"
          showArrow
          showSearch
          placeholder="显示字段"
          value={selectedFields}
          onChange={handleFieldChange}
          dropdownVisible={dropdownVisible4}
          maxTagCount={2} // 设置最多显示2个选项
          filterOption={filterOption} // 添加筛选选项函数
          onDropdownVisibleChange={handleDropdownVisibleChange4}
          style={{ width: 200, marginRight: 16 }}
          dropdownRender={(menu) => (
            <div>
              <Checkbox.Group
                options={menu.props.options}
                value={selectedFields}
                onChange={handleFieldChange}
              />
              {menu}
            </div>
          )}
        >
          {options4.map((option) => (
            <Select.Option key={option} value={option}>
              {option}
            </Select.Option>
          ))}
        </Select>
        <Button type="primary" onClick={handleQuery}>
          查询
        </Button>
      </div>
      <div>
        <Table dataSource={tableData} columns={columns} />
      </div>
    </>
  );
};

export default EngineeringParametersPage;
