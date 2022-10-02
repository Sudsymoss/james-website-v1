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

export default function Projectman({ dataa }) {
  const { data: session, status } = useSession()
  const [formData, setFormData] = useState({})
  const [projects, setProjects] = useState(dataa)
  const form = useRef(null)
  if (status === "loading") {
    return <Loader />
  }
  if (session && session.user.role !== "admin" || !session) {
    return <p>Access Denied!</p>
  }

  async function savePost(e) {
    form.current.reset()
    e.preventDefault()
    setProjects([...projects, formData])
    const response = await fetch('/api/projects', {
      method: 'POST',
      body: JSON.stringify(formData)
    })
    return await response.json()
  }
  async function delPost(e) {
    e.preventDefault()
    const response = await fetch('/api/del', {
      method: 'DELETE',
      body: JSON.stringify(formData)
    })
    location.reload()
    return await response.json()
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Admin Project Manager</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&family=Silkscreen&display=swap" rel="stylesheet" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <h1>Project Manager</h1>
        <p>Accessing as user: {session.user.name} | Role: {session.user.role}</p>
      </main>
      <section className={styles.projects}>
        <div className={styles.gridbody}>
          <div className={styles.gridcontainer}>
            {projects.map(item => (
              <><div className={styles.gridform}><Link href={item.name || ""} key={item.id}><div className={styles.griditem} key={item.id}>{item.title}</div></Link><p>Last Updated: {item.updatedAt || "null"}</p></div></>
            ))}
          </div>
        </div>
        <div className={styles.forms}>
        <form onSubmit={savePost} className={styles.pform} ref={form}>
          <h2>New Project</h2>
          <input
            type="text"
            placeholder="Project title"
            name="title"
            required
            maxLength="15"
            className={styles.ptitle}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Project name"
            name="name"
            required
            pattern="[^\s]+"
            className={styles.pname}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Project description"
            name="description"
            className={styles.pdec}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
          <button type="submit" className={styles.psubmit}>New Project</button>
        </form>
        <form onSubmit={delPost} className={styles.pform}>
          <h2>Delete Project</h2>
          <select id="cars" name="cars" onChange={(e) => setFormData({ ...formData, title: e.target.value })} className={styles.ptitle}>
            <option value="" selected disabled>--select project--</option>
            {projects.map(item => (
              <><option value={item.title} >{item.title}</option></>
            ))}
          </select>
          <button type="submit" className={styles.psubmitdel}>Delete project</button>
          <p>(Reload may be required to update project list)</p>
        </form>
        </div>
      </section>
      <Footer />
    </div>
  )
}


export async function getServerSideProps() {
  const projects = await prisma.project.findMany()
  return {
    props: {
      dataa: JSON.parse(JSON.stringify(projects))
    }
  }
}