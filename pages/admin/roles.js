import Head from "next/head";
import styles from "../../styles/Admin.module.css";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import { useState } from "react";
import { PrismaClient } from "@prisma/client";
import { useRef } from "react";
const prisma = new PrismaClient();
import { useSession } from "next-auth/react";
import Loader from "../../components/loader";

export default function Roles({ dataa }) {
  const { data: session, status } = useSession();
  const [formData, setFormData] = useState({});
  const [users, setProjects] = useState(dataa);
  const form = useRef(null);
  if (status === "loading") {
    return <Loader />;
  }

  if ((session && session.user.role !== "admin") || !session) {
    return <p>Access Denied!</p>;
  }

  async function updateRole(e) {
    e.preventDefault();
    const response = await fetch("/api/roles", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    location.reload();
    return await response.json();
  }
  async function delUser(e) {
    e.preventDefault();
    const response = await fetch("/api/deluser", {
      method: "DELETE",
      body: JSON.stringify(formData),
    });
    location.reload();
    return await response.json();
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Admin Project Manager</title>
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans&family=Silkscreen&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bungee+Spice&family=Roboto+Condensed&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Nav />
      <main className={styles.main}>
        <h1>Role Manager</h1>
        <p>
          Accessing as user: {session.user.name} | Role: {session.user.role}
        </p>
      </main>
      <section className={styles.projects}>
        <div className={styles.gridbody}>
          <div className={styles.gridcontainer}>
            {users.map((item) => (
              <>
                <div className={styles.gridform}>
                  <div className={styles.griditem} key={item.id}>
                    Name: {item.name} | Email: {item.email} | Role: {item.role}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <form onSubmit={updateRole} className={styles.pform} ref={form}>
          <h2>Role update</h2>
          <select
            name="user"
            className={styles.ptitle}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          >
            <option value="" selected disabled>
              --select user--
            </option>
            {users.map((item) => (
              <>
                <option value={item.email}>{item.name}</option>
              </>
            ))}
          </select>
          <select
            name="role"
            className={styles.ptitle}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            required
          >
            <option value="" selected disabled>
              --select role--
            </option>
            <option value="admin">Admin</option>
            <option value="pleb">Pleb</option>
            <option value="default">Default</option>
          </select>
          <button type="submit" className={styles.psubmit}>
            Update Role
          </button>
        </form>
        <form onSubmit={delUser} className={styles.pform} ref={form}>
          <h2>⚠ DELETE USER ⚠</h2>
          <select
            name="user"
            className={styles.ptitle}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          >
            <option value="" selected disabled>
              --select user--
            </option>
            {users.map((item) => (
              <>
                <option value={item.email}>{item.name}</option>
              </>
            ))}
          </select>
          <button type="submit" className={styles.psubmitdel}>
            ⚠DELETE USER⚠
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const projects = await prisma.user.findMany();
  return {
    props: {
      dataa: JSON.parse(JSON.stringify(projects)),
    },
  };
}
