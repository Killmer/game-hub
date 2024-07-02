import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) <Spinner />;
  if (error) throw error;

  const description = game ? game.description_raw : "";

  return (
    <>
      <Heading>{game?.name}</Heading>
      <ExpandableText>{description}</ExpandableText>
    </>
  );
};

export default GameDetailPage;
