import React from 'react';
import Head from "next/head";
import Navbar from "../../components/Navbar";

function oneUser(props) {
    const {name,username,phone,website} = props.oneUser;

    return (
        <Navbar>
            <div>
                <Head>
                    <title> an user </title>
                </Head>
                <main>
                    <div className="d-flex justify-content-center my-4">
                        <div className="card">
                            <div className="card-header bg-dark text-white text-center">
                                <h4> {name} </h4>
                            </div>
                            <div className="card-body">
                                <div><b> username: </b> {username}</div>
                                <div><b> phone: </b> {phone}</div>
                                <div><b> website: </b> {website}</div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </Navbar>
    )
}

export default oneUser;

export async function getServerSideProps(context) {
    let id = context.params.id; /*console.log(id);*/
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`); /*console.log(response);*/
    const oneUser = await response.json(); /*console.log(oneUser);*/

    return {
        props: {oneUser}
    }
}