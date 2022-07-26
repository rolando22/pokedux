import React from "react";
import { Input } from "antd";
import "./Searcher.css";

function Searcher () {
    return (
        <Input.Search placeholder="Buscar..." />
    );
};

export { Searcher };