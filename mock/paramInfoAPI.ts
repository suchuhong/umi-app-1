export default {
  'GET /api/v1/paramInfo': (req: any, res: any) => {
    // 模拟接口响应的数据
    const paramInfoList = [
      { id: 1, paramObj: 'aaa', paramEnName: 'aaa', paramChName: '测试1' },
      { id: 2, paramObj: 'bbb', paramEnName: 'bbb', paramChName: '测试2' },
      { id: 3, paramObj: 'ccc', paramEnName: 'ccc', paramChName: '测试3' },
      { id: 4, paramObj: 'ddd', paramEnName: 'ddd', paramChName: '测试4' },
      { id: 5, paramObj: 'eee', paramEnName: 'eeee', paramChName: '测试5' },
      { id: 6, paramObj: 'fff', paramEnName: 'ffff', paramChName: '测试6' },
      { id: 7, paramObj: 'ggg', paramEnName: 'gggg', paramChName: '测试7' },
      { id: 8, paramObj: 'hhh', paramEnName: 'hhh', paramChName: '测试8' },
      { id: 9, paramObj: 'iii', paramEnName: 'uuuu', paramChName: '测试9' },
    ];

    res.json({
      data: paramInfoList,
    });
  },

  'GET /api/v1/paramInfo/:id': (req: any, res: any) => {
    // 模拟接口响应的数据
    const paramInfo = {
      id: id,
      paramObj: 'iii' + id,
      paramEnName: 'uuuu',
      paramChName: '测试9',
    };
    res.json(paramInfo);
  },

  'POST /api/v1/paramInfo': (req: any, res: any) => {
    // 从请求的数据中获取入参
    const { paramObj, paramEnName, paramChName } = req.body;

    // 模拟接口处理逻辑并返回响应
    const paramInfo = {
      id: Date.now(),
      paramObj,
      paramEnName,
      paramChName,
    };

    res.json(paramInfo);
  },

  'DELETE /api/v1/paramInfo/:id': (req, res) => {
    // 从请求的参数中获取入参
    // const { id } = req.params;

    // 模拟接口处理逻辑并返回响应
    res.json({ success: true });
  },
};
