import Image from "next/image";
import { useTranslations } from 'next-intl'; 

export default function Contact() {

  const t = useTranslations('MainMenu');
  return (
    <div className="max-w-[1280px] mx-auto flex items-center justify-between">
    <h1>{t('contact')}</h1>
    </div>
  );
}
