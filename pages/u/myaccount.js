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
  if(status === "authenticated"){
    return(
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
        <p>Joined: {session.user.joined}</p>
      </main>
      <section className={styles.forms}>
        <form onSubmit={delUser} className={styles.pform} onChange={(e) => setFormData({ ...formData, email: e.target.value })}>
          <h2>DELETE ACCOUNT</h2>
          <label for="conf">Confirm</label>
          <input type="checkbox" id="conf" name="email" value={session.user.email} required className={styles.conf}/>
          <button type="submit" className={styles.psubmitdel}>delete</button>
        </form>
      </section>
      <div id={styles.alert}>
            <h1>!!ALERT!!</h1>
            <p>This account can not be deleted!</p>
            <h3>If you beleive this is a error please contact us!</h3>
            <form onSubmit={reFre}>
            <button className={styles.psubmit} type="submit">Dismiss</button>
            </form>
        </div>
      <Footer/>
    </div>
    )
  }

  async function reFre(e){
    e.preventDefault()
    document.getElementById("Admin_alert__Lgg_p").style.visibility = "hidden";
  }
  async function delUser(e){
    console.log(formData)
    if(session.user.canbedeleted === "false"){
      e.preventDefault()
      document.getElementById("Admin_alert__Lgg_p").style.visibility = "visible";
      return
    }
    e.preventDefault()
    const response = await fetch('/api/deluser',{
      method: 'DELETE',
      body: JSON.stringify(formData)
    })
    location.replace("https://suddsy.dev/")
    return await response.json()
  }

  return (
    location.replace("https://suddsy.dev/")
  )
}

