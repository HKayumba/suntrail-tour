import Link from "next/link";
import { Compass, Home, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-background px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mx-auto grid size-16 place-items-center rounded-full border bg-card text-card-foreground">
          <Compass className="size-8" aria-hidden="true" />
        </div>
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Page introuvable
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          Cette piste ne mene nulle part.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
          La page demandee n&apos;existe pas encore ou a change d&apos;adresse.
          Revenez a l&apos;accueil ou contactez Suntrail pour preparer votre
          prochain voyage.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/" className={cn(buttonVariants(), "gap-2")}>
            <Home className="size-4" aria-hidden="true" />
            Accueil
          </Link>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
          >
            <Mail className="size-4" aria-hidden="true" />
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}
