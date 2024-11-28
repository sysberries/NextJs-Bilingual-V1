import Image from "next/image";
import { useTranslations } from 'next-intl'; 

export default function About() {

  const t = useTranslations('MainMenu');
  return (
    <div className="max-w-[1280px] mx-auto flex items-center justify-between">
    <h1>{t('about')}</h1>
    </div>
  );
}
