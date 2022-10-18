import Head from 'next/head'
import styles from '../../styles/Admin.module.css'
import Nav from '../../components/nav'
import Footer from '../../components/footer'
import { useState } from "react";
import { useSession, getSession } from "next-auth/react"
import Loader from '../../components/loader'

export default function Roles() {

  const { data: session, status } = useSession()
  const [formData, setFormData] = useState({})
  if (status === "loading") {
    return <Loader/>
  }

  
  if(!session || status != "authenticated"){
    return location.replace("https://suddsy.dev/auth/login")
  } 
  async function delUser(e){
    console.log(formData)
    e.preventDefault()
    const response = await fetch('/api/deluser',{
      method: 'DELETE',
      body: JSON.stringify(formData)
    })
    location.replace("https://suddsy.dev/")
    return await response.json()
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>My Account</title>
        <meta charset="UTF-8"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&family=Silkscreen&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Bungee+Spice&family=Roboto+Condensed&display=swap" rel="stylesheet"></link>
      </Head>
      <Nav/>
      <main className={styles.main}>
        <h1>My Account</h1>
      </main>
      <section className={styles.projects}>
        <form onSubmit={delUser} className={styles.pform} onChange={(e) => setFormData({ ...formData, email: e.target.value })}>
          <h2>DELETE ACCOUNT</h2>
          <label for="conf">Confirm</label>
          <input type="checkbox" id="conf" name="email" value={session.user.email} required className={styles.conf}/>
          <button type="submit" className={styles.psubmitdel}>delete</button>
        </form>
      </section>
      <Footer/>
    </div>
  )
}