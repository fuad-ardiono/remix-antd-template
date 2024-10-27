import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, LinkDescriptor } from "@remix-run/node";
import "./tailwind.css";
import './antd.min.css';
import React from "react";
import { StyleProvider } from '@ant-design/cssinjs'
import {Button} from "antd";

export const links: LinksFunction = () => {
    const links: LinkDescriptor[] = [
        {
            rel: "preconnect",
            href: "https://fonts.googleapis.com"
        },
        {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: "anonymous",
        },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
        },
    ];
    return links;
};

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <Meta />
            <Links />
        </head>
        <body>
            <StyleProvider hashPriority="high">
                {children}
                <ScrollRestoration />
                <Scripts />
            </StyleProvider>
        </body>
        </html>
    );
}

interface DefaultLayoutProps {
    children: React.ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <>
            <Button type={'primary'}>Hello</Button>
            { children }
        </>
    )
}

export default function App() {
    return (
        <>
            <DefaultLayout>
                <Outlet/>
            </DefaultLayout>
        </>
    );
}
