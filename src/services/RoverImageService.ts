import { get } from './HTTPService'
import IRoverService, { IRoverImage } from '~/interface/Rover'

const API_END_POINT = 'https://hiring.hypercore-protocol.org/termrover'

class RoverImageService extends IRoverService {
  async fetchLatest(): Promise<IRoverImage> {
    const response = await get<IRoverImage>(API_END_POINT + '/latest')
    return response
  }

  async fetchByIndex(idx: number): Promise<IRoverImage> {
    const response = await get<IRoverImage>(API_END_POINT + '/' + idx)
    return response
  }
}

export default RoverImageService
