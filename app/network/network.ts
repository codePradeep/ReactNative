import axios from 'axios';


const instance = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
instance.defaults.headers.common.Authorization = `Basic QVh3b0RCYV91Uk9EYU9HQ2ZJc3VTTllBcEF3R0UxVTZfTzN5NWVkU251WlRadHBMQlVaUUFMenZGZTRheDMwd0xDaEVEaDdjUXg3Y1JrbjA6RUVaczBpbmtqQ2VoWVhkNGZtRzRIWW5YeE52bUVfdUhkbVdaXzM1dXpfUGVpUDdab1JyU3BMUmduU195U1Rob2RXS19ZMElETVQzclJHdzg=`;


export function sendGetRequest(url: string) {
  return instance
    .get(url)
    .then((response: any) => {
      return handleResponse(response.data);
    })
    .catch((err: any) => {
      if (err.response === undefined) {
        throw new Error('something went wrong');
      }
      // return handleError(err.response.data);
      return 'error';
    })
    .finally(() => {
      // hide loader
      // dispatch(toggleLoader());
    });
}

export function sendPostRequest(url: any, body: any) {

  return instance
    .post(url, body)
    .then((response: any) => {
      return handleResponse(response);
    })
    .catch((err: any) => {
      console.log(err);
      if (err.response === undefined) {
        throw new Error('something went wrong');
      }
      return handleError(err.response);
    })
    .finally(() => {
      // hide loader
      //   dispatch(toggleLoader());
    });
}

export function sendPutRequest<T>(url: any, body: any): any {

  return instance
    .put(url, body)
    .then((response: any) => handleResponse(response.data))
    .catch((err: any) => {
      if (err.response === undefined) {
        throw new Error('something went wrong');
      }
      return handleError(err.response.data);
    })
    .finally(() => {
      // hide loader
      //   dispatch(toggleLoader());
    });
}

export function sendPatchRequest<T>(url: any): any {
  // instance.defaults.headers.common.Authorization = token();
  return instance
    .patch(url)
    .then((response: any) => handleResponse(response.data))
    .catch((err: any) => {
      if (err.response === undefined) {
        throw new Error('something went wrong');
      }
      // return handleError(err.response.data);

      return 'error';
    })
    .finally(() => {
      // hide loader
      //   dispatch(toggleLoader());
    });
}

export function deleteRequest<T>(url: any, body: any): any {
  //instance.defaults.headers.common.Authorization = token();
  console.log(url, body);
  return instance
    .delete(url, {
      // headers: {
      //     Authorization: token(),
      // },
      data: body,
    })
    .then((response: any) => handleResponse(response.data))
    .catch((err: any) => {
      if (err.response === undefined) {
        throw new Error('something went wrong');
      }
      console.log(err.response.data);
      return handleError(err.response.data);
    })
    .finally(() => {
      // hide loader
      //   dispatch(toggleLoader());
    });
}

function handleResponse<T>(data: any) {
  // let res: IApiResponse<T> = {
  //     isSuccess: true,
  //     errors: undefined,
  //     data: data as T,
  // };
  return data;
}

function handleError<T>(data: any) {
  // let res: IApiResponse<T> = {
  //     isSuccess: false,
  //     errors: data,
  //     data: undefined,
  // };
  return data;
}
