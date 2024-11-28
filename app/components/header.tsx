'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Button } from "@/app/components/ui/button"
import { useTranslations } from 'next-intl'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/app/components/ui/navigation-menu"
import { Globe, ChevronDown } from 'lucide-react'

interface HeaderProps {
  lang: string;
}


export default function Header({lang} : HeaderProps) {

  const router = useRouter()
  const [language, setLanguage] = useState(lang)

  useEffect(() => {
    const path = window.location.pathname
    if (path.startsWith('/ar')) {
     setLanguage('AR')
    } else {
      setLanguage('EN')
    }
  }, [])

  const handleLanguageChange = (lang: string, path: string) => {
    setLanguage(lang)
    router.push(path)
  }

 


  const t = useTranslations('MainMenu');

  return (
    <header className="w-full py-4 px-4 bg-background">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            Logo
          </Link>

          {/* Main Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href={`/${lang}/about`} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {t('about')}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href={`/${lang}/contact`} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {t('contact')}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-[100px] justify-between">
                <Globe className="mr-2 h-4 w-4" />
                {language}
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleLanguageChange('EN', '/en')}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange('AR', '/ar')}>
                العربية
              </DropdownMenuItem>
            </DropdownMenuContent>

          </DropdownMenu>

          {/* Login Button */}
          <Button>Login</Button>
        </div>
      </div>
    </header>
  )
}