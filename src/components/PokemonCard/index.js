import React from "react";
import { Card } from "antd";
import { StarOutlined } from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";

function PokemonCard () {
    return (
        <Card
            title="Ditto"
            cover={<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png" alt="Ditto"/>}
            extra={<StarOutlined />}
        >
            <Meta description="fire, magic" />
        </Card>
    );
};

export { PokemonCard };