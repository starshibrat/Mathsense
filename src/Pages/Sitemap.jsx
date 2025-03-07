import { useEffect, useState } from "react";
import Sitemap from "../Assets/sitemap.xml";

export default function SitemapPage() {

    // const [xmlData, setXmlData] = useState("");

    // useEffect(() => {
    //     fetch(Sitemap)
    //         .then((resp) => resp.text())
    //         .then((data) => setXmlData(data))
    //         .catch((err) => 
    //             console.error("Error fetching XML: ", err)
    //         )
    // }, []);

    return (
        // <pre style={{ WhiteSpace: "pre-wrap", wordBreak: "break-word" }}>
        //     {xmlData}
        // </pre>
        <iframe src={Sitemap} title="MathSense Sitemap" style={{ width: "100%", height: "500px", border: "none" }}/>

    );

}