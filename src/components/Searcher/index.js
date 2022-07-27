import React from "react";
import { Input } from "antd";
import "./Searcher.css";

function Searcher ({ searchValue, onChange }) {
    return (
        <Input.Search
            placeholder="Buscar..."
            value={searchValue}
            onChange={onChange}
        />
    );
};

export { Searcher };