import { Menu, Transition } from '@headlessui/react';
import { TrashIcon } from '@heroicons/react/24/outline';
import { EllipsisVerticalIcon, PencilIcon } from '@heroicons/react/24/solid';
import { Fragment } from 'react';

export function ActionsButton({ handleDelete, handleEdit }) {
    return (
        <Menu as="div" className="relative w-full h-full flex items-center justify-center">
            <Menu.Button >
                <EllipsisVerticalIcon className='w-8 h-8' />
            </Menu.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute -left-[156px] top-0 w-36 rounded-md overflow-hidden border border-solid border-gray border-collapse bg-black text-white flex flex-col">
                    <Menu.Item>
                        {({ active }) => (
                            <button
                                className={
                                    'py-2 px-4 text-sm border-b border-solid border-gray flex items-center gap-2 focus:outline-none" role="menuitem" tabindex="-1" id="menu-item-2 hover:bg-slate-200 hover:text-slate-700'
                                }
                                onClick={handleEdit}
                            >
                                <PencilIcon className='w-5 h-5' />
                                <span>
                                    Edit
                                </span>
                            </button>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <button
                                className={
                                    'py-2 px-4 text-sm text-left text-white flex items-center gap-2 focus:outline-none" role="menuitem" tabindex="-1" id="menu-item-2 hover:bg-slate-200 hover:text-slate-700'
                                }
                                onClick={handleDelete}
                            >
                                <TrashIcon className='w-5 h-5' />
                                <span>
                                    Remove
                                </span>
                            </button>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}