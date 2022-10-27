import { getProviders, signIn, useSession, signOut } from "next-auth/react";
export default function auth(){
    const { data: session, status } = useSession();
    if (status === "loading"){
      return <p>Loading...</p>
    }
    if (status === "authenticated"){
      return location.replace("/auth/logout")
    }
    if (status === "unauthenticated"){
        return location.replace("/auth/login")
    }
}