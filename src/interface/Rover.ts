export interface IMetadata {
  id: number
  sol: number
  camera: ICamera
  img_src: string
  earth_date: string
  rover: IRover
}
export interface ICamera {
  id: number
  name: string
  rover_id: number
  full_name: string
}
export interface IRover {
  id: number
  name: string
  landing_date: string
  launch_date: string
  status: string
}

export interface IRoverImage {
  metadata: IMetadata
  images: {
    base64: string
  }
}

abstract class IRoverService {
  abstract fetchLatest(...args: any): Promise<IRoverImage>
  abstract fetchByIndex(...args: any): Promise<IRoverImage>
}

export default IRoverService
