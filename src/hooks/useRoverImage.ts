import useSWR from 'swr';
import IRoverService from '~/interface/Rover';
import RoverImageService from '~/services/RoverImageService';

export const roverImageService: IRoverService = new RoverImageService();

export function useRoverImage(idx: number, reqConfig: RequestInit = {}) {
  const { data, error } = useSWR(`roverInfo:${idx}`, () =>
    roverImageService.fetchByIndex(idx, reqConfig)
  );
  return { image: data, isLoading: !error && !data, isError: error };
}

export function useTotalRoverImageSize() {
  const { data, error } = useSWR(`roverImageSize`, roverImageService.fetchTotalImageSize);
  return { data, isLoading: !error && !data, isError: error };
}
