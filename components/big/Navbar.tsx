import Link from "next/link"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { forwardRef } from "react"

import { Disclosure } from "@headlessui/react"
import { HiX, HiMenu } from "react-icons/hi"

import ApplicationMark from "../small/ApplicationMark"
import ApplicationLogo from "../small/ApplicationLogo"

const ThemeSwitcherDesktop = dynamic(() => import("../small/ThemeSwitcherDesktop"), { ssr: false })
const ThemeSwitcherMobile = dynamic(() => import("../small/ThemeSwitcherMobile"), { ssr: false })

import { classNames } from "@/utils/helper"

import { NavbarLinkType, LinksType } from "@/types/components/navbar.type"

const Navbar: React.FC = () => {
    const links: LinksType[] = [
        {
            text: "Home",
            url: "/",
        }, {
            text: "Experiences",
            url: "/experiences",
        }, {
            text: "Projects",
            url: "/projects",
        }, {
            text: "About",
            url: "/about",
        },
    ]

    return (
        <Disclosure as="nav" className="bg-gray-700 dark:bg-gray-800 fixed top-0 inset-x-0 z-50">
            {({ open }) => (
                <>
                    <div className="container">
                        <div className="relative flex items-center justify-center sm:justify-between h-16">

                            {/* Theme Switcher Button */}
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <ThemeSwitcherMobile />
                            </div>

                            {/* Left Menu Navigation */}
                            <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                                <Link href="/">
                                    <a className="flex-shrink-0 flex items-center">
                                        <ApplicationMark className="hidden lg:block h-8 w-auto" color="white" />
                                        <ApplicationLogo className="block lg:hidden h-8 w-auto" />
                                    </a>
                                </Link>

                                {/* Main Menu Navigration */}
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-1">
                                        {links.map((link, i) => (
                                            <NavbarLink key={i} href={link.url}>
                                                {link.text}
                                            </NavbarLink>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Menu Navigation */}
                            <div className="hidden sm:flex items-center justify-end">
                                <div className="hidden sm:block">
                                    <div className="flex space-x-1">
                                        <ThemeSwitcherDesktop />
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Menu Button */}
                            <div className="absolute inset-y-0 right-0 flex items-center space-x-1 sm:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-lg text-white bg-gray-600 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-900 duration-150 ease-in-out">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <HiX className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <HiMenu className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    {/* Dropdown Menu Mobile Mode */}
                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-4 pt-2 pb-5 space-y-1 sm:hidden">
                            {links.map((link, i) => (
                                <Disclosure.Button as={ResponsiveNavbarLink} key={i} href={link.url}>
                                    {link.text}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

const NavbarLink: React.FC<NavbarLinkType> = ({ href, children, ...props }) => {
    const { asPath } = useRouter()

    return (
        <Link href={href}>
            <a
                className={classNames(
                    "inline-flex justify-center items-center text-white",
                    asPath === href && "bg-gray-600 dark:bg-gray-700",
                    "px-4 py-2 rounded-lg text-xs font-semibold hover:bg-gray-600 dark:hover:bg-gray-700 duration-100 ease-in-out"
                )}
                {...props}
            >
                {children}
            </a>
        </Link>
    )
}

const ResponsiveNavbarLink = forwardRef<HTMLAnchorElement, NavbarLinkType>(({ href, children, ...props }, ref) => {
    const { asPath } = useRouter()

    return (
        <Link href={href} passHref>
            <a
                href={href}
                className={classNames(
                    "block text-white",
                    asPath === href && "bg-gray-600 dark:bg-gray-700",
                    "px-4 py-2 rounded-lg text-xs font-semibold hover:bg-gray-600 dark:hover:bg-gray-700 duration-100 ease-in-out"
                )}
                ref={ref}
                {...props}
            >
                {children}
            </a>
        </Link>
    )
})

ResponsiveNavbarLink.displayName = "ResponsiveNavbarLink"

export default Navbar