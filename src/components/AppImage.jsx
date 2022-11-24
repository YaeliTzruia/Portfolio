import { Image } from "@chakra-ui/react";

export default function AppImage({ className, image, alt, ...otherProps }) {



    return (
        <Image className={className} {...otherProps} src={image} alt={alt} display="block" objectFit="cover" />
    )
}