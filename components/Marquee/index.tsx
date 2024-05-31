import Marquee from "react-fast-marquee";

import { useTheme } from 'nextra-theme-docs';
import { useEffect, useState } from "react";

type TechLogos = {
    id: number;
    logo: string;
    darkLogo: string;
};

const techlogos: TechLogos[] = [
    {
        id: 0,
        logo: "/techlogos/macos.png",
        darkLogo: "/techlogos/macos_dark.png",
    },
    {
        id: 1,
        logo: "/techlogos/ios.png",
        darkLogo: "/techlogos/ios_dark.png",
    },
    {
        id: 2,
        logo: "/techlogos/windows.png",
        darkLogo: "/techlogos/windows_dark.png",
    },
    {
        id: 3,
        logo: "/techlogos/android.png",
        darkLogo: "/techlogos/android_dark.png",
    },
    {
        id: 4,
        logo: "/techlogos/Linux.png",
        darkLogo: "/techlogos/Linux_dark.png",
    },
    {
        id: 4,
        logo: "/techlogos/Linux.png",
        darkLogo: "/techlogos/Linux_dark.png",
    },
    {
        id: 4,
        logo: "/techlogos/Linux.png",
        darkLogo: "/techlogos/Linux_dark.png",
    },
    {
        id: 4,
        logo: "/techlogos/Linux.png",
        darkLogo: "/techlogos/Linux_dark.png",
    },
    {
        id: 4,
        logo: "/techlogos/Linux.png",
        darkLogo: "/techlogos/Linux_dark.png",
    },
    {
        id: 4,
        logo: "/techlogos/Linux.png",
        darkLogo: "/techlogos/Linux_dark.png",
    },
    {
        id: 4,
        logo: "/techlogos/Linux.png",
        darkLogo: "/techlogos/Linux_dark.png",
    },
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
            <div className="my-0">
                <Marquee
                    gradientColor={isDark ? "black" : "white"}
                    speed={50}
                    >
                    {techlogos.map((item, index) => (
                        <div className="opacity-30 mx-8 hover:opacity-100 transition h-36">
                            <img
                                src={isDark ? item.logo : item.darkLogo}
                                className="h-36 lg:h-36 inline-block max-w-none"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    )
}