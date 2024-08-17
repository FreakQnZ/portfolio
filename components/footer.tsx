"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconBrandLinkedin,
    IconHome,
    IconBrandGmail,
    IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

const Footer = () => {

    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/",
        },

        // {
        //     title: "Products",
        //     icon: (
        //         <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        //     ),
        //     href: "#",
        // },
        {
            title: "Linkedin",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/in/anuraag-srivatsa/",
        },

        // {
        //     title: "Twitter",
        //     icon: (
        //         <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        //     ),
        //     href: "#",
        // },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/FreakQnZ",
        },
        {
            title: "Mail",
            icon: (
                <IconBrandGmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "",
        },
    ];
    return (
        <div className="flex items-center justify-center w-full bg-slate-950 p-20">
            <FloatingDock
                // mobileClassName="translate-y-20" // only for demo, remove for production
                items={links}
            />
        </div>
    );
}

export default Footer