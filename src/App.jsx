// import { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion/index";
import ModalTest from "./components/custom-modal-popup/modal-test";
import TabTest from "./components/custom-tabs/tab-test";
import FeatureFlags from "./components/feature-flag";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-button";
import QrCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color/index";
import ScrollIndicator from "./components/scroll-indicator";
import ScrollToSection from "./components/scroll-to-section";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
import SearchAutocomplete from "./components/search-autocomplete-with-api";
import StarRating from "./components/star-rating";
import TicTacToe from "./components/tic-tac-toe";
import TreeView from "./components/tree-view";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnClickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";
// import menus from "./components/tree-view/data";

function App() {
  return (
    <div className="App">
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={5} /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
      {/* <LoadMoreData /> */}
      {/* <TreeView menus={menus} /> */}
      {/* <QrCodeGenerator /> */}
      {/* <LightDarkMode /> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <TabTest /> */}
      {/* <ModalTest /> */}
      {/* <GithubProfileFinder /> */}
      {/* <SearchAutocomplete /> */}
      {/* <TicTacToe /> */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}
      {/* <UseFetchHookTest/> */}
      {/* <UseOnClickOutsideTest /> */}
      {/* <UseWindowResizeTest /> */}
      {/* <ScrollToTopAndBottom /> */}
      <ScrollToSection />
    </div>
  );
}

export default App;
