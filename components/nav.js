import React from 'react';
import Link from 'next/link';

const Nav = () => (
    <nav>
        <ul>
            <li>
                <Link href="/">
                    <a>Apocalyso</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </li>
        </ul>
    </nav>
);

export default Nav;
