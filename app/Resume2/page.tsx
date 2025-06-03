"use client";

import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        // Redirect to the PDF URL on page load
        window.location.href = "https://media.varietyheaven.in/resume/Ankit Patil Resume .pdf";
    }, []);

    return 
    (
        <main>
            <iframe
                width="100%"
                height="700"
                src="https://media.varietyheaven.in/resume/Ankit Patil Resume .pdf"
                style={{ border: "1px solid black" }}
            ></iframe>
        </main>
    ); // nothing is rendered since we're redirecting
}
