import React from "react"
import Head from "next/head"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css'
import '../components/User'
import User from "../components/User";

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Github Users</title>
            </Head>
            <main>
                <ul>
                <User></User>
                <User></User>
                <User></User>
                <User></User>
                <User></User>
                <User></User>
                <User></User>
                <User></User>
                <User></User>
                <User></User>
                <User></User>
                <User></User>
                <User></User>
                </ul>
            </main>
        </div>
    )
}