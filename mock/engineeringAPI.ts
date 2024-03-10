const fields = ['111', '222', '333', '1111', '2222', '3333'];

const fieldData = {
  '111': '1',
  '222': '2',
  '333': '3',
  '1111': '4',
  '2222': '5',
  '3333': '6',
};

const fieldDatas = [
  fieldData,
  fieldData,
  fieldData,
  fieldData,
  fieldData,
  fieldData,
  fieldData,
  fieldData,
  fieldData,
  fieldData,
  fieldData,
  fieldData,
  fieldData,
  fieldData,
  fieldData,
];

export default {
  'GET /api/v1/engineering/1': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: fields },
      errorCode: 0,
    });
  },
  'GET /api/v1/engineering/2': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: fieldDatas },
      errorCode: 0,
    });
  },
};
