import Marquee from "react-fast-marquee";

import { useTheme } from 'nextra-theme-docs';
import { useEffect, useState } from "react";
import Link from "next/link";

type TechLogos = {
    id: number;
    logo: string;
    url: string;
};

const techlogos: TechLogos[] = [
    {
        id: 0,
        logo: "/companies/Amazon.svg",
        url:"https://www.amazon.com"
    },
    {
        id: 1,
        logo: "/companies/Anthropic.svg",
        url:"https://www.anthropic.com"
    },
    {
        id: 2,
        logo: "/companies/bytedance.svg",
        url:"https://www.bytedance.com"
    },
    {
        id: 3,
        logo: "/companies/google.svg",
        url:"https://www.google.com"
    },
    {
        id: 4,
        logo: "/companies/Microsoft.svg",
        url:"https://www.microsoft.com"
    },
    {
        id: 5,
        logo: "/companies/NVIDIA.svg",
        url:"https://www.nvidia.com"
    },
    {
        id: 6,
        logo: "/companies/OpenAI.svg",
        url:"https://www.openai.com"
    },
    {
        id: 7,
        logo: "/companies/Scale.svg",
        url:"https://www.scale.com"
    },
    {
        id: 8,
        logo: "/companies/MISTRAL.svg",
        url:"https://mistral.ai/"
    }
];


export default function MarqueeList() {
    // const config = useConfig();

    const { theme } = useTheme()

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        console.log("theme", theme);
        setIsDark(theme === "dark");
    }, [theme]);

    return (
        <div>
            <div className="my-10">
                <Marquee
                    gradientColor={isDark ? "black" : "white"}
                    speed={30}
                    >
                    {techlogos.map((item, index) => (
                        <Link className="opacity-30 mx-16 hover:opacity-100 transition h-max" href={item.url} key={index} target="_blank">
                            <img
                                src={item.logo}
                                className={`h-6 lg:h-6 inline-block max-w-none ${isDark ? "" : "filter invert"}`}
                            />
                        </Link>
                    ))}
                </Marquee>
            </div>
        </div>
    )
}