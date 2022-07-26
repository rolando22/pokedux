import React from "react";
import { useDispatch } from "react-redux";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { StarButton } from "../";
import { setFavorite } from "../../actions";

function PokemonCard ({ pokemon }) {
    const dispatch = useDispatch();
    const types = pokemon.types.map(
        type => type.type.name
    ).join(', ');

    const handleOnFavorite = () => {
        dispatch(setFavorite(pokemon.id));
    };

    return (
        <Card
            title={pokemon.name}
            cover={
                <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                />
            }
            extra={
                <StarButton
                    isFavorite={pokemon.favorite}
                    onClick={handleOnFavorite}
                />
            }
        >
            <Meta description={types} />
        </Card>
    );
};

export { PokemonCard };