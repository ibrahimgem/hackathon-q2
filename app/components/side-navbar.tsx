export default function SideNavBar() {
    return (
            <div className="ml-10 pt-10 px-5">
                <ul className="flex flex-col space-y-2">
                    <li>
                        <strong className="block text-xs font-medium uppercase text-gray-400"> Type </strong>

                        <ul className="mt-2 space-y-1">
                            <li>
                                <input type="checkbox" name="type" id="type" />
                                <a
                                    href="#"
                                    className="rounded-lg bg-gray-100 py-2 text-sm font-medium text-gray-700"
                                >
                                    Profile
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="block rounded-lg py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >
                                    Team
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="block rounded-lg py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >
                                    Projects
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="block rounded-lg py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >
                                    Meetings
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="block rounded-lg py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >
                                    Calendar
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <strong className="block text-xs font-medium uppercase text-gray-400"> Support </strong>

                        <ul className="mt-2 space-y-1">
                            <li>
                                <a
                                    href="#"
                                    className="block rounded-lg py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >
                                    Update
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="block rounded-lg py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >
                                    Help
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="block rounded-lg py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >
                                    Settings
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <strong className="block text-xs font-medium uppercase text-gray-400"> Profile </strong>

                        <ul className="mt-2 space-y-1">
                            <li>
                                <a
                                    href="#"
                                    className="block rounded-lg py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >
                                    Details
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="block rounded-lg py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >
                                    Subscription
                                </a>
                            </li>

                            <li>
                                <form action="#">
                                    <button
                                        type="submit"
                                        className="block w-full rounded-lg py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        Logout
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
    )
}