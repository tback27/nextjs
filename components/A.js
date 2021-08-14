import Link from 'next/link';
import style from '/styles/a.module.scss';

export default function A({href, text, key}) {
    return (
        <Link href={href} key={key}>
            <a className={style.myLink}> {text} </a>
        </Link>
    )
}