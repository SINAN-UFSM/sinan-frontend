"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { LogOut, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { APP_NAME, ROUTES } from "@/lib/constants"
import { useAuth } from "@/hooks/use-auth"

export function AppHeader() {
  const router = useRouter()
  const { logout, user } = useAuth()

  async function handleLogout() {
    await logout()
    router.replace(ROUTES.login)
  }

  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-4 sm:px-6">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="lg:hidden" asChild>
          <Link href={ROUTES.dashboard} aria-label="Abrir menu">
            <Menu />
          </Link>
        </Button>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 lg:hidden">
            <Image
              src="/sinan.png"
              alt="SINAN"
              width={32}
              height={30}
              className="h-8 w-auto object-contain"
              priority
            />
            <div>
              <p className="text-sm font-semibold">{APP_NAME}</p>
              <p className="text-xs text-muted-foreground">
                Vigilancia em saude
              </p>
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">
              {user?.name ?? "Usuario"}
            </p>
          </div>
        </div>
      </div>
      <Button type="button" variant="outline" onClick={handleLogout}>
        <LogOut data-icon="inline-start" />
        Sair
      </Button>
    </header>
  )
}
