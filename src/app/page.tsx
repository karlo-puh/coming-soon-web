
import { Logo } from "./_components/Logo";
import { EmailForm } from "./_components/EmailForm";
import { CroatiaAnimatedPin } from "./_components/CroatiaAnimatedPin";

export default async function Home() {

  return (
    <div className="items-center justify-items-center min-h-screen p-8 py-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center ">

        <Logo className="h-[32px] w-[240px] sm:h-[40px] sm:w-[300px]"/>
       
  
    <div className="mt-4 flex flex-col items-center gap-3 text-center">
      <h1 className="font-saira text-[clamp(2rem,7vw,4.5rem)] font-semibold italic uppercase leading-[0.95] max-w-[16em] text-pretty">
        Croatia&apos;s First Professional Sim Racing Arena
      </h1>
      <p className="font-saira text-sm font-semibold uppercase tracking-[0.2em] text-red-500 sm:text-base">
        Opening September 2026
      </p>
    </div>

    <CroatiaAnimatedPin/>
        <EmailForm />
       
      </main>
    </div>
  );
}
