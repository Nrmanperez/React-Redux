import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { useDispatch } from "react-redux";
import "./PokemonList.css";
import { StartButton } from "./StartButton";
import { setFavorite } from "../slices/dataSlice";

export const PokemonCard = ({ name, image, types, id }) => {
  const typesString = types.map((elem) => elem.type.name).join(", ");
  const dispatch = useDispatch();

  const handleOnFavorite = () => {
    dispatch(setFavorite({pokemonId: id}));
  };

  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StartButton isFavorite onClick={handleOnFavorite} />}
    >
      <Meta description={typesString} />
    </Card>
  );
};
