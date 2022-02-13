import React from "react";
import AssetKuning from "../components/Assets/AssetKuning";
import LingkaranKuning from "../components/Assets/LingkaranKuning";
import AssetUngu from "../components/Assets/AssetUngu";
import AssetGame from "../components/Assets/AssetGame";
import AssetBatu from "../components/Assets/AssetBatu";

function LandingPage () {
    return (
        <div className="bg-white no-repeat bg-cover h-screen w-screen font-body relative overflow-hidden">
            <AssetKuning />
            <LingkaranKuning />
            <AssetUngu />
            <AssetGame />
            <AssetBatu />
        </div>
    )
}
export default LandingPage