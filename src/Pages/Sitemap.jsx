import { useEffect, useState } from "react";
import Sitemap from "../Assets/sitemap.xml";

export default function SitemapPage() {

    return (

        <iframe src={Sitemap} title="MathSense Sitemap" style={{ width: "100%", height: "500px", border: "none" }}/>

    );

}