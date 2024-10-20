import { StaticImageData } from "next/image";

type cardType = {
    blogno: number;
    topicName: string;
    imageType: StaticImageData;
    description: string;
    link: string;
}
export default cardType;