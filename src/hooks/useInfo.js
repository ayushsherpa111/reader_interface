import { useState } from "react";

export function useInfo() {
    const [{ title, message }, updateMessage] = useState({
        title: "Start Reading",
        message: "Read the Attack On Titan Manga online now."
    });

    return {
        title,
        message,
        updateMessage
    };
}
