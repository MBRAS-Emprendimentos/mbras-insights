import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-mbras-pearl to-mbras-cream p-8 text-center">
      <div className="max-w-xl">
        <h1 className="font-luxury text-6xl text-mbras-navy mb-4">404</h1>
        <p className="text-mbras-navy/80 mb-6">
          Página não encontrada. Verifique o endereço ou volte para o início.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-mbras-navy text-mbras-navy font-display font-semibold hover:bg-mbras-navy hover:text-mbras-cream transition"
        >
          Voltar para a Home
        </Link>
      </div>
    </div>
  );
}
