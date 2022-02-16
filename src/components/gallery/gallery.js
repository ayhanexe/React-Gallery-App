import React from 'react'
import Button from "../button/button";

export default function Gallery() {
    const data = [
        "https://i.ytimg.com/vi/um2cow5hy7M/sddefault.jpg",
        "https://yt3.ggpht.com/ytc/AKedOLRK4clA76Ad7z8DxVjp6nxeHS2OdqRr-W0kSHhN=s900-c-k-c0x00ffffff-no-rj"
    ]
    return (data.map((image, index) => {
        return <Button imageUrl={image} key={`${image}-${index}`} />
    })
    )
}
