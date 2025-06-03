"use client";

import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        // Redirect to the PDF URL on page load
        window.location.href = "https://media.varietyheaven.in/resume/Ankit Patil Resume .pdf";
    }, []);

    return null
}
