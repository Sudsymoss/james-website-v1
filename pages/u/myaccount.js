import Head from 'next/head'
import styles from '../../styles/Admin.module.css'
import Nav from '../../components/nav'
import Footer from '../../components/footer'
import { useState } from "react";
import { useSession, getSession } from "next-auth/react"
import Loader from '../../components/loader'
import * as React from "react";
import toast from "../../components/Toast";


export default function Account() {

  const { data: session, status } = useSession()
  const [formData, setFormData] = useState({})
  const notify = React.useCallback((type, message) => {
    toast({ type, message });
  }, []);
  if (status === "loading") {
    return <Loader />
  }


  if (!session || status != "authenticated") {
    return location.replace("https://suddsy.dev/auth/login")
  }

  async function reFre(e) {
    e.preventDefault()
    document.getElementById("alertcon").style.display = "none";
    document.getElementById("delcon").style.display = "none";
  }

  function confirmProm(e) {
    e.preventDefault()
    if (session.user.canbedeleted === "false") {
      e.preventDefault()
      notify("error", "Account cannot be deleted!");
      notify("info", "If you belive this is a mistake please contact us!")
      return
    } else {
      document.getElementById("delcon").style.display = "flex";
    }
  }
  async function delUser(e) {
    e.preventDefault()
    document.getElementById("delcon").style.display = "none";
    const response = await fetch('/api/deluser', {
      method: 'DELETE',
      body: JSON.stringify(formData)
    })
    location.replace("https://suddsy.dev/")
    return await response.json()
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>My Account | {session.user.name}</title>
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&family=Silkscreen&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Bungee+Spice&family=Roboto+Condensed&display=swap" rel="stylesheet"></link>
      </Head>
      <Nav />
      <main className={styles.main}>
        <h1>My Account</h1>
        <p>Joined: {session.user.joined}</p>
        <p>Email: {session.user.email}</p>
      </main>
      <section className={styles.forms}>
        <form className={styles.pform}>
          <h2>DELETE ACCOUNT</h2>
          <p>By deleting your account, you acknowledge that all of your data linked to this account will be deleted and can NOT be restored. This will have an immediate effect!</p>
          <button type="button" onClick={confirmProm} className={styles.psubmitdel}>delete</button>
        </form>
      </section>
      <div className={styles.alertcon} id="delcon">
        <div id={styles.alert}>
          <h1>Are you sure?</h1>
          <form onSubmit={delUser} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={styles.pform}>
            <p>Select to continue</p>
            <input type="checkbox" id="conf" name="email" value={session.user.email} required className={styles.conf} />
            <button type="submit" className={styles.psubmitdel}>Delete</button>
            <button type='reset' onClick={reFre} className={styles.psubmit}>Cancel</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}