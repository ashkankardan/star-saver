import React, { useState, useEffect } from "react";
import {
  MainContainer,
  DetailRow,
  DetailTitle,
  DetailDescription,
  FavoriteRow,
  FavoriteIcon,
} from "./StarItem.styles";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useFavoriteContext } from "../../contexts/FavoriteContext";

const StarItem = ({ character }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const {
    favoriteState: { favorite },
    favoriteDispatch: { setFavorite },
  } = useFavoriteContext();

  useEffect(() => {
    const findId = (id) => (character) => character.id === id;
    setIsFavorite(!!favorite.find(findId(character.id)));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorite]);

  const handleAddFavorite = () => {
    setFavorite([...favorite, character]);
  };

  const handleRemoveFavorite = () => {
    if (!isFavorite) return;

    const tempFavoritesArr = favorite.slice();
    const objIndex = favorite.indexOf(
      favorite.filter((item) => item.id === character.id)[0]
    );
    tempFavoritesArr.splice(objIndex, 1);
    setFavorite(tempFavoritesArr);
  };

  return (
    <MainContainer
      onClick={isFavorite ? handleRemoveFavorite : handleAddFavorite}
    >
      <FavoriteRow>
        <FavoriteIcon className={isFavorite ? "selected" : undefined}>
          {isFavorite ? <MdOutlineFavorite /> : <MdOutlineFavoriteBorder />}
        </FavoriteIcon>
      </FavoriteRow>
      <DetailRow>
        <DetailTitle>Name:</DetailTitle>
        <DetailDescription>{character.name}</DetailDescription>
      </DetailRow>
      <DetailRow>
        <DetailTitle>Character:</DetailTitle>
        <DetailDescription>{character.character}</DetailDescription>
      </DetailRow>
      <DetailRow>
        <DetailTitle>Eye Color:</DetailTitle>
        <DetailDescription>{character.eyecolor}</DetailDescription>
      </DetailRow>
      <DetailRow>
        <DetailTitle>Hair Color:</DetailTitle>
        <DetailDescription>{character.haircolor}</DetailDescription>
      </DetailRow>
      <DetailRow>
        <DetailTitle>Mass:</DetailTitle>
        <DetailDescription>{character.mass}</DetailDescription>
      </DetailRow>
      <DetailRow>
        <DetailTitle>Phone:</DetailTitle>
        <DetailDescription>{character.phone}</DetailDescription>
      </DetailRow>
      <DetailRow>
        <DetailTitle>Email:</DetailTitle>
        <DetailDescription>{character.email}</DetailDescription>
      </DetailRow>
    </MainContainer>
  );
};

export default StarItem;
