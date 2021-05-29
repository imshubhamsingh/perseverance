import useSWR from 'swr'
import { IRoverImage } from '~/interface/Rover'
import RoverImageService from '~/services/RoverImageService'

const roverImageService = new RoverImageService()

interface IRoverImageHook {
  image: IRoverImage | null | undefined,
  isLoading: boolean,
  isError: boolean
}

export function useRoverImage(idx: number) : IRoverImageHook {
  const { data, error } = useSWR(
    `roverImage:${idx}`,
    roverImageService.fetchByIndex.bind(null, idx),
    {
      initialData: null,
    }
  )
  return { image: data, isLoading: !error && !data, isError: error }
}
