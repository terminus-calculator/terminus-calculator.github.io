// meta.config.ts

import { Metadata } from "next";
import { isDevelopment } from "./lib/utils";

const siteTitle = "Terminus Calculator (BO6) - Save 5K Points";
const siteTitleTemplate = "Terminus Calculator (BO6)";
const siteDescription = "Free Terminus Calculator for Black Ops 6 Zombies. Instantly solve the Easter Egg math puzzle and save 5000 points/essence. Skip BEAM SMASHER cost with this simple calculator for Terminus map. Fast, accurate and free to use.";

export const siteUrl = isDevelopment() ? "http://localhost:3000" : "https://terminus-calculator.github.io";

export const metaConfig: Metadata = {
    title: {
        default: siteTitle,
        template: `%s | ${siteTitleTemplate}`,
    },
    description: siteDescription,
    keywords: "terminus calculator, bo6 calculator, black ops 6 zombies, easter egg solver, save 5k points terminus, beam smasher calculator, terminus puzzle solver, bo6 terminus math",
    verification: {
        google: 'lTwaQTJ2H6vMNYMUd9ooaLxzvssiGoQEuoRdsOYNX8g',
    },
    openGraph: {
        title: siteTitle,
        description: siteDescription,
        url: `${siteUrl}/`,
        siteName: siteTitle,
        images: [
            {
                url: `${siteUrl}/logo.svg`,
                width: 512,
                height: 512,
                alt: siteTitle,
            },
        ],
        type: 'website',
    },
    icons: {
        icon: [
            { url: '/favicon.ico' },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
            { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
            { url: "/favicon-128x128.png", sizes: "128x128", type: "image/png" },
            { url: "/favicon-256x256.png", sizes: "256x256", type: "image/png" },
        ],
        apple: "/apple-touch-icon.png",
    },
    manifest: `${siteUrl}/site.webmanifest`,
};

export function getAboutMetaConfig(): Metadata {
    const title = "About Terminus Calculator";
    const description = "Terms of service and usage conditions for Terminus Calculator (BO6)"
    return {
        title: title,
        description: description,
        alternates: {
            canonical: `${siteUrl}/about`,
        },
        openGraph: {
            title: `${title} | ${siteTitleTemplate}`,
            description: description,
            url: `${siteUrl}/about`,
            siteName: siteTitle,
            images: [
                {
                    url: `${siteUrl}/logo.svg`,
                    width: 512,
                    height: 512,
                    alt: siteTitle,
                },
            ],
            type: 'website',
        }
    }
}

export function getTermsMetaConfig(): Metadata {
    const title = "Terms of Service";
    const description = "Terms of service and usage conditions for Terminus Calculator (BO6)"
    return {
        title: title,
        description: description,
        alternates: {
            canonical: `${siteUrl}/terms`,
        },
        openGraph: {
            title: `${title} | ${siteTitleTemplate}`,
            description: description,
            url: `${siteUrl}/terms`,
            siteName: siteTitle,
            images: [
                {
                    url: `${siteUrl}/logo.svg`,
                    width: 512,
                    height: 512,
                    alt: siteTitle,
                },
            ],
            type: 'website',
        }
    }
}

export function getPrivacyMetaConfig(): Metadata {
    const title = "Privacy Policy";
    const description = "Privacy policy and data collection practices for Terminus Calculator (BO6)"
    return {
        title: title,
        description: description,
        alternates: {
            canonical: `${siteUrl}/privacy`,
        },
        openGraph: {
            title: `${title} | ${siteTitleTemplate}`,
            description: description,
            url: `${siteUrl}/privacy`,
            siteName: siteTitle,
            images: [
                {
                    url: `${siteUrl}/logo.svg`,
                    width: 512,
                    height: 512,
                    alt: siteTitle,
                },
            ],
            type: 'website',
        }
    }
}
