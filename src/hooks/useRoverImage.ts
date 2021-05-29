import useSWR from 'swr';
import IRoverService from '~/interface/Rover';
import RoverImageService from '~/services/RoverImageService';

const roverImageService: IRoverService = new RoverImageService();

export function useRoverImage(idx: number) {
  const { data, error } = useSWR(
    `roverImage:${idx}`,
    roverImageService.fetchByIndex.bind(null, idx),
    {
      initialData: null,
    }
  );
  return { image: data, isLoading: !error && !data, isError: error };
}

export function useRoverImageRange(from: number, to: number) {
  const { data, error } = useSWR(
    `roverImageRange`,
    roverImageService.fetchByRange.bind(roverImageService, from, to),
    {
      initialData: null,
    }
  );
  return { images: data, isLoading: !error && !data, isError: error };
}
