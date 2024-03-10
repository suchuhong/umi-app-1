import request from 'umi-request';

export async function fetchParamInfoList() {
  try {
    const response = await request('/api/v1/paramInfo');
    console.log('response ==== ', response);
    return response;
  } catch (error) {
    console.error(error);
    throw error; // 或者进行其他错误处理
  }
}

export async function addParamInfo(paramInfo: ParamInfo) {
  return request('/api/v1/paramInfo', {
    method: 'POST',
    data: paramInfo,
  });
}

export async function fetchParamInfoById(id: number) {
  return request(`/api/v1/paramInfo/${id}`, {
    method: 'GET',
  });
}

export async function deleteParam(id: number) {
  return request(`/api/v1/paramInfo/${id}`, {
    method: 'DELETE',
  });
}
