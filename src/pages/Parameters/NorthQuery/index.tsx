import { useRequest } from 'umi';
import SearchTable from './SearchTable';
import { fetchParamInfoList } from './services/paramInfoSrv';
const NorthQueryPage: React.FC = () => {
  // const [tableColumns, setTableColumns] = useState([]);

  const {
    data: paramInfoList, // data 为接口返回的字段 paramInfoList 为别名
    loading,
    error,
    // run,
  } = useRequest(fetchParamInfoList);

  // const handleDelete = async (id: number) => {
  //   await deleteParam(id);
  //   run();
  // };

  // useEffect(() => {
  //   // 根据接口返回的列表数据动态生成表格的列配置
  //   if (paramInfoList && paramInfoList.length > 0) {
  //     const columns = [
  //       { title: 'ID', dataIndex: 'id', key: 'id' },
  //       ...Object.keys(paramInfoList[0]).map((key) => ({
  //         title: key,
  //         dataIndex: key,
  //         key: key,
  //       })),
  //       {
  //         title: 'Actions',
  //         dataIndex: 'actions',
  //         key: 'actions',
  //         render: (text, record) => (
  //           <button type="submit" onClick={() => handleDelete(record.id)}>
  //             Delete
  //           </button>
  //         ),
  //       },
  //     ];

  //     setTableColumns(columns);
  //   }
  // }, [paramInfoList]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div>
        <SearchTable data={paramInfoList} />
      </div>

      {/* <div>
        <Table
          dataSource={paramInfoList}
          columns={tableColumns}
          pagination={{ defaultPageSize: 5 }} // 分页配置
        />
      </div> */}
    </>
  );
};

export default NorthQueryPage;
