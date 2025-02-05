
import { Logo } from "./_components/Logo";
import { EmailForm } from "./_components/EmailForm";
import { CroatiaAnimatedPin } from "./_components/CroatiaAnimatedPin";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 py-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center ">

        <Logo className="h-[32px] w-[240px] sm:h-[40px] sm:w-[300px]"/>
       
  
    <h1 className="mt-4 text-2xl sm:text-4xl uppercase font-saira font-bold max-w-[20em] text-center text-pretty">Unleashing Croatia&apos;s Ultimate Sim Racing Destination</h1>

    <CroatiaAnimatedPin/>
        <EmailForm />
       
      </main>
    </div>
  );
}
