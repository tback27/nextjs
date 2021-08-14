import {useRouter} from "next/router";
import Image from "next/image";
import Navbar from "../../components/Navbar";

function PostsId () {
    const router = useRouter();
    const productId = router.query.id;

    function toDeepIn() {
        router.push('/home')
    }

    return  (
        <Navbar>
            <div>
                <div className="postsID">
                    <Image width="50" height="50" src="/vercel.svg" alt="Error"/>
                </div>
                <h1>This is post {productId}</h1>

                <div onClick={toDeepIn} className="text">
                    to deep in
                </div>
            </div>
        </Navbar>
    )

}
export default PostsId