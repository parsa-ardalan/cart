"use client";

import { useEffect } from "react";

export default function App() {

    useEffect(() => {

        setTimeout(() => {

            window.scrollBy({ top: 200, behavior: "smooth" });

        }, 5000);
    }, []);

    return <></>;
}
