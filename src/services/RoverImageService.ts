import { get } from './HTTPService';
import IRoverService, { IRoverInfo, IRoverInfoSize } from '~/interface/Rover';

export const API_END_POINT = 'https://hiring.hypercore-protocol.org/termrover';

class RoverImageService extends IRoverService {
  async fetchLatest(): Promise<IRoverInfo> {
    const response = await get<IRoverInfo>(API_END_POINT + '/latest');
    return response;
  }

  async fetchByIndex(idx: number, config: RequestInit = {}): Promise<IRoverInfo> {
    const response = await get<IRoverInfo>(API_END_POINT + '/' + idx, config);
    return response;
  }

  async fetchTotalImageSize(){
    const response = await get<IRoverInfoSize>(API_END_POINT + '/', {});
    return response;
  }
}

export default RoverImageService;
