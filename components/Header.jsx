import Link from "next/link";

export function Header() {
    return (
        <header className='p-4'>
            <div className="flex items-center justify-between h-full">
                <Link href="/" className="flex items-center">
                    <img src="Free_Sample_By_Wix.jpg" alt="Trinity-logo" className="h-12" />
                </Link>
                <nav className="flex items-center justify-end h-full">
                    <ul className='flex space-x-6 pr-4'>
                        <li>
                            <Link href="/about" className="font-bold hover:text-purple-500 hover:underline">
                                about
                            </Link>
                        </li>
                        <li>
                            <Link href="/corporate" className="font-bold hover:text-purple-500 hover:underline">
                                corporate
                            </Link>
                        </li>
                        <li>
                            <Link href="/service" className="font-bold hover:text-purple-500 hover:underline">
                                service
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="font-bold hover:text-purple-500 hover:underline">
                                contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}