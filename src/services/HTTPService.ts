import internalErrorMap from '~/constants/internalErrorMap';
import CustomError from '~/interface/CustomError';

async function http<T>(path: string, config: RequestInit): Promise<T> {
  const request = new Request(path, config);
  const response = await fetch(request);

  if (!response.ok) {
    const customError = new CustomError(internalErrorMap.ApiError, 'Non 2XX received from API', {
      status: response.status,
      message: response.statusText,
      request,
    });
    return Promise.reject(customError);
  }
  return response.json();
}

export async function get<T>(path: string, config?: RequestInit): Promise<T> {
  const init = { method: 'get', ...config };
  return await http<T>(path, init);
}
