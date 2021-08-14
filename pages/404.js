import Head from "next/head";

function NotFound() {
    return (
        <div>
            <Head>
                <title> Not Found </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="text-center">
                    <h4> Page not found </h4>
                </div>
            </main>
        </div>
    )
}
export default NotFound;