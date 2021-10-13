/**
 * TODO: (Client basics)
 * - DOM and rendering
 * - React basics (create a greeter input component):
 *      JSX (TSX)
 *      States
 *      Props
 *      Rendering
 *      Callbacks
 *      React events
 * - React class component and functional component
 *
 * TODO: (Client-Server app):
 * - Creat the app structure:
 *      List of Pokemons (names only)
 *      Paging bar
 *      Search bar
 * - Create an api object to help us talk to the server
 */

import React, { Component } from "react";
import { Greeter } from "./pages/Greeter";
// import { Counters } from "./pages/Counters";

export default class App extends Component {
  render() {
    return <Greeter />;
  }
}
