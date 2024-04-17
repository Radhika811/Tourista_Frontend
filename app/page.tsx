'use client'
import axiosInstance from "@/axiosInstance"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import useAuthStore from "./store/authStore"
import Image from 'next/image';

export default function Home() {
  const auth_url = process.env.GOOGLE_AUTH_URL || ""
  const authStore = useAuthStore()
  const [loading, setLoading] = useState(true);
  const router = useRouter()

  useEffect(() => {
    console.log(loading)
    axiosInstance.get('/auth/data')
      .then(response => {
        console.log("Response", response.data)
        if (response.status === 200) {
          const newUser = {
            isAuthenticated: true,
            userId: response.data.id,
            emailAdd: response.data.email,
            picture: response.data.picture,
            firstName: response.data.first_name,
            lastName: response.data.last_name,
            token: response.data.token
          }
          if (response.data.isOnboarded)
            console.log("New User", newUser)
          authStore.setUser(newUser)
          if (response.data.isOnboarded) {
            router.push("/dashboard")
          } else {
            router.push("/onboarding")
          }
        } else {
          setLoading(false)
        }
      })
      .catch(error => {
        console.error("Error fetching user data:", error)
        setLoading(false)
      })
  }, [])

  return loading ? (
    <div className="mr-4">
        Loading
    </div>
  ) : (
    <main className="flex flex-row items-center justify-center w-full h-full">
      <div className="text-center">
        {/* add space before the button */}
        <div className="mt-10"></div>
          <Button><Link href={auth_url}>Sign in</Link></Button>
        </div>
    </main>
  );
}
