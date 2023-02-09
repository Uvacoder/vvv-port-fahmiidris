import { motion } from "framer-motion"
import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"

import {
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si"
import { HiExternalLink, HiX } from "react-icons/hi"

import Link from "@/components/small/Link"
import Button from "@/components/small/Button"

import { li, ul } from "@/utils/animation"
import { classNames } from "@/utils/helper"

import { currentTechStack } from "@/data/techs"

import { TechDescType, TechType } from "@/types/tech.type"

const techObject: TechType = {
    react: {
        color: "bg-gray-200 dark:bg-gray-600 rounded-xl",
        more: {
            title: "React.js",
            description: "React.js is the second javascript library (or framework, as some call it) that I've learned. I used to use the vue.js framework, but I prefer react.js",
            link: "https://reactjs.org"
        },
        icon: () => (
            <SiReact className="w-5 h-5 text-blue-500" />
        ),
    },
    nextjs: {
        color: "bg-gray-200 dark:bg-gray-600 rounded-full",
        more: {
            title: "Next.js",
            description: "I discovered next.js, a react.js framework, after researching react.js. It's great; next.js provides a lot more features, notably for routers, SSG, SSR, and other things.",
            link: "https://nextjs.org"
        },
        icon: () => (
            <SiNextdotjs className="w-5 h-5 text-gray-700 dark:text-white" />
        ),
    },
    typescript: {
        color: "bg-gray-200 dark:bg-gray-600 rounded-md",
        more: {
            title: "TypeScript",
            description: "I've been watching a lot of next.js training videos, and I've seen that it's frequently combined with TypeScript. I tried it, and wow! This typescript acts as a rule book for my programming. It appeals to me greatly.",
            link: "https://www.typescriptlang.org"
        },
        icon: () => (
            <SiTypescript className="w-5 h-5 text-blue-500" />
        ),
    },
    tailwindcss: {
        color: "bg-gray-200 dark:bg-gray-600 rounded-xl",
        more: {
            title: "Tailwind CSS",
            description: "I despise pure CSS since it requires so many attributes, rules, and lines of code. It causes me to feel a little nauseous. Then I tried bootstrap, which was initially really useful, but I couldn't get it to work properly. till I've mastered tailwindcss. This is exactly what I'm looking for!",
            link: "https://tailwindcss.com"
        },
        icon: () => (
            <SiTailwindcss className="w-5 h-5 text-blue-400" />
        ),
    },
}

const TechStack: React.FC = () => {
    const [techModalInfo, setTechModalInfo] = useState<TechDescType>({
        title: "",
        description: "",
        link: ""
    })

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = (data: TechDescType) => {
        setTechModalInfo(data)
        setIsOpen(true)
    }

    return (
        <div className="mt-2">
            <motion.div
                className="flex justify-between items-center space-x-2"
                variants={ul}
                initial="hidden"
                animate="visible"
            >
                {currentTechStack.map((tech, i) => (
                    <motion.button type="button" key={i} onClick={() => openModal(techObject[tech]["more"])} className={classNames("flex justify-center items-center p-2", techObject[tech]["color"])} variants={li}>
                        {techObject[tech]["icon"]()}
                    </motion.button>
                ))}
            </motion.div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 backdrop-blur-sm" />
                        </Transition.Child>
                        <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-700 dark:bg-white shadow-xl rounded-2xl">
                                <Dialog.Title as="h3" className="text-lg font-pop font-semibold leading-6 text-blue-500">
                                    {techModalInfo.title}
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm font-semibold text-gray-200 dark:text-gray-800">
                                        {techModalInfo.description}
                                    </p>
                                </div>
                                <div className="mt-4 flex justify-start">
                                    <Button.Link href={techModalInfo.link} isExternal className="space-x-2 hover:ring-offset-gray-700 dark:hover:ring-offset-white">
                                        <span>{techModalInfo.title}</span>
                                        <HiExternalLink className="w-4 h-4" />
                                    </Button.Link>
                                </div>
                                <Button.Icon onClick={closeModal} className="absolute top-[3px] right-[3px] rounded-xl">
                                    <HiX className="w-4 h-4" />
                                </Button.Icon>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}

export default TechStack