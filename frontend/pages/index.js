import React from "react"
import Head from "next/head"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css'
import '../components/Users'
import Users from "../components/Users";

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Github Users</title>
            </Head>
            <main>
                <Users></Users>
            </main>
        </div>
    )
}