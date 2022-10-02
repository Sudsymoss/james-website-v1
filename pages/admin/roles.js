import Head from 'next/head'
import styles from '../../styles/Admin.module.css'
import Nav from '../../components/nav'
import Footer from '../../components/footer'
import Link from 'next/link'
import { useState } from "react";
import { PrismaClient } from "@prisma/client";
import { useRef } from 'react'
const prisma = new PrismaClient
import { useSession, getSession } from "next-auth/react"
import Loader from '../../components/loader'

export default function Roles({dataa}) {

  const { data: session, status } = useSession()
  const [formData, setFormData] = useState({})
  const [users, setProjects] = useState(dataa)
  const form = useRef(null)
  if (status === "loading") {
    return <Loader/>
  }

  
  if(session && session.user.role !== "admin" || !session){
    return <p>Access Denied!</p>
  } 

  async function updateRole(e) {
    form.current.reset()
    const response = await fetch('/api/roles', {
      method: 'POST',
      body: JSON.stringify(formData)
    })

    return await response.json()
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Admin Project Manager</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&family=Silkscreen&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Bungee+Spice&family=Roboto+Condensed&display=swap" rel="stylesheet"></link>
      </Head>
      <Nav/>
      <main className={styles.main}>
        <h1>Role Manager</h1>
        <p>Accessing as user: {session.user.name} | Role: {session.user.role}</p>
      </main>
      <section className={styles.projects}>
        <div className={styles.gridbody}>
        <div className={styles.gridcontainer}>
          {users.map(item => (
            <><div className={styles.gridform}><div className={styles.griditem} key={item.id}>Name: {item.name} | Email: {item.email} | Role: {item.role}</div></div></>
          ))}
        </div>
        </div>
        <form onSubmit={updateRole} className={styles.pform} ref={form}>
          <h2>Role update</h2>
          <input
            type="text"
            placeholder="Email"
            name="useremail"
            required
            className={styles.ptitle}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="New role"
            name="role"
            required
            pattern="[^\s]+"
            className={styles.pname}
            onChange={(e) =>
              setFormData({ ...formData, role: e.target.value })
            }
          />
          <button type="submit" className={styles.psubmit}>Update Role</button>
        </form>
      </section>
      <Footer/>
    </div>
  )
}


export async function getServerSideProps() {
  const projects = await prisma.user.findMany()
  return {
    props: {
      dataa: JSON.parse(JSON.stringify(projects))
    }
  }
}