import React from "react";
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import * as ReactDOMClient from 'react-dom/client';
import App from "./App";


const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
