import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailers, isLoading, error } = useTrailers(gameId);
  if (isLoading) return null;

  if (error) throw error;

  const firstTrailer = trailers?.results[0];
  console.log(trailers);
  if (!firstTrailer) return null;

  return (
    <video
      src={firstTrailer.data[480]}
      poster={firstTrailer.preview}
      controls
    />
  );
};

export default GameTrailer;
