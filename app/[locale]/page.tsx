import Image from "next/image";
import { useTranslations } from 'next-intl'; 

export default function Home() {

  const t = useTranslations('Home');

  return (
    <div className="max-w-[1280px] mx-auto flex items-center justify-between">
    <h1>{t('title')}</h1>
    </div>
  );
}
