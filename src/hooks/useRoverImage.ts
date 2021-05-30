import useSWR from 'swr';
import IRoverService from '~/interface/Rover';
import RoverImageService from '~/services/RoverImageService';

const roverImageService: IRoverService = new RoverImageService();

export function useRoverImage(idx: number) {
  let controller;
  if(process.browser){
    controller = new AbortController()
  }
  const { data, error } = useSWR(
    `roverImage:${idx}`,
    roverImageService.fetchByIndex.bind(null, idx, {signal: controller?.signal}),
    {
      initialData: null,
    }
  );
  return { image: data, isLoading: !error && !data, isError: error, controller };
}

export function useTotalRoverImageSize() {
  const { data, error } = useSWR(`roverImageSize`, roverImageService.fetchTotalImageSize, {
    initialData: null,
  });
  return { data, isLoading: !error && !data, isError: error };
}
