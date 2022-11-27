import { useState } from "react";

export default function useComponents() {

    const [isImage, setIsImage] = useState(false)

    return {
        isImage, setIsImage
    }
}