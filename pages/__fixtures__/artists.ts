import { Artist } from "../models";

const artistData: Artist[] = [
    {
        fullName: "Toby Fitch",
        imgUrl: "/static/images/forest_bg.jpg",
        websiteUrl: "https://tobyfitch.com/",
    },
    {
        fullName: "Ray Ramirez",
        imgUrl: "/static/images/raymond_ramirez_bird.JPG",
        websiteUrl: "https://www.ray-ramirez.com",
    },
    {
        fullName: "Julian Moiwai",
        imgUrl: "/static/images/julian_moiwai_forest.jpg",
        websiteUrl: "https://www.julianmoiwai.com/",
        isInverse: true,
    },
];

export default artistData;
