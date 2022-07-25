import React from "react";
import { Card } from "antd";
import { StarOutlined } from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";

function PokemonCard ({ pokemon }) {
    const abilities = pokemon.abilities.map(
        ability => ability.ability.name
    ).join(', ');

    return (
        <Card
            title={pokemon.name}
            cover={<img src={pokemon.sprites.front_default} alt={pokemon.name}/>}
            extra={<StarOutlined />}
        >
            <Meta description={abilities} />
        </Card>
    );
};

export { PokemonCard };