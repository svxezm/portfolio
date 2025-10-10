import html2canvas from "html2canvas";
import { useState, useEffect } from "react";

export function useScreenshot() {
    const [base64, setBase64] = useState<string>("");

    useEffect(() => {
        const screenshotTarget = document.getElementById("main-content")!;

        html2canvas(screenshotTarget).then((canvas) => {
            const base64Image = canvas.toDataURL("image/png");
            setBase64(base64Image);
        })
    }, []);

    return base64;
}
