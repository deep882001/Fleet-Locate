import React, { useEffect, useState } from "react";
import fetchAssets from "./services/fetchAssets";
import AssetTable from "./Components/AssetTable";
import MapView from "./Components/MapView";
import "./styles/App.css";

const App = () => {
  const [assets, setAssets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAssets = async () => {
      try {
        const fetchedAssets = await fetchAssets();
        setAssets(fetchedAssets);
      } catch (err) {
        setError(err.message);
      }
    };

    loadAssets();

    const intervalId = setInterval(() => {
      loadAssets();
    }, 3600000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="app">
      <h1>Asset Locations</h1>
      {error && <p className="error">{error}</p>}
      <AssetTable assets={assets} />
      <MapView assets={assets} />
    </div>
  );
};

export default App;
