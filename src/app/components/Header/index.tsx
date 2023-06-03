'use client'
import react                from 'react';
import { Fragment }         from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon }  from '@heroicons/react/20/solid'
import { useRouter }         from "next/navigation";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Header = () => {
    const router = useRouter();
    return (
        <div className="fixed bg-white text-blue-800 px-10 py-1 top-0 left-0 w-full">
            <div className="flex items-center justify-between py-2 text-5x1">
                <div className="font-bold text-blue-900 text-xl cursor-pointer"><a href="/dashboard">The Project</a><span
                    className="text-pink-600 uppercase cursor-pointer"><a href="/dashboard">mom</a></span>
                </div>
                <div className="flex items-center text-gray-500">
                    <span className="material-icons-outlined p-2 text-2xl">search</span>
                    <span className="material-icons-outlined p-2 text-2xl">notifications</span>

                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                Hey, Juana!
                                <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-100 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-neutral-100 shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="py-1 ">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/"
                                                className={classNames(
                                                    active ? ' text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Sign Out
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>

                </div>
            </div>
        </div>
    );
};

export default Header;