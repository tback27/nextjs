import Link from "next/link";
import Navbar from '../components/Navbar'

function About(props) {
    /*console.log(props);*/
    return (
        <Navbar>
            <div>
                ABOUT ABOUT ABOUT
                <div>
                    <Link href={{pathname: '/posts/[id]', query: {id: 1}}}>
                        <a> to posts 1 </a>
                    </Link>
                    <Link href={'/posts/2'}>
                        <a> to posts 2 </a>
                    </Link>
                    <Link href={'/posts/3'}>
                        <a> to posts 3 </a>
                    </Link>
                </div>
            </div>
        </Navbar>
    )
}

export default About