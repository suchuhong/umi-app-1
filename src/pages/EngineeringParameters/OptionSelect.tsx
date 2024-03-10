import { Select } from 'antd';

const OptionSelect = ({ loading, options, placeholder, onChange }) => (
  <Select
    loading={loading}
    placeholder={placeholder}
    onChange={onChange}
    style={{ width: 200, marginRight: 16 }}
  >
    {options.length > 0 &&
      options.map((option, index) => (
        <Select.Option key={index} value={option}>
          {option}
        </Select.Option>
      ))}
  </Select>
);

export default OptionSelect;
