import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
        <div className="w-full max-w-5xl space-y-16 text-left">
          <header className="space-y-4">
            <p className="uppercase tracking-widest text-xs text-mbras-teal-600">Blueprint</p>
            <h1 className="font-luxury text-3xl md:text-5xl leading-tight text-foreground">
              MBRAS Conecta
            </h1>
            <div className="h-[2px] w-24 bg-mbras-gold-500 rounded-full" />
            <p className="text-muted-foreground max-w-3xl">
              Ecossistema premium de conteúdo e relacionamento, transformando conexões em inteligência e inteligência em negócios confidenciais.
            </p>
          </header>

          <section className="space-y-6">
            <h2 className="font-display text-xl md:text-2xl text-foreground">1. Conceito Central</h2>
            <p className="text-base text-foreground/90">
              MBRAS Conecta: ecossistema premium de conteúdo e relacionamento, transformando <strong>conexões</strong> em <strong>inteligência</strong> e <strong>inteligência</strong> em <strong>negócios confidenciais</strong>.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-white/60 dark:bg-white/5 border border-border p-5 shadow-luxury">
                <h3 className="font-semibold text-foreground">Exclusividade</h3>
                <p className="text-sm text-muted-foreground">Acesso restrito a bastidores e convidados‑chave.</p>
              </div>
              <div className="rounded-xl bg-white/60 dark:bg-white/5 border border-border p-5 shadow-luxury">
                <h3 className="font-semibold text-foreground">Inteligência Acionável</h3>
                <p className="text-sm text-muted-foreground">Análise sem ruído.</p>
              </div>
              <div className="rounded-xl bg-white/60 dark:bg-white/5 border border-border p-5 shadow-luxury">
                <h3 className="font-semibold text-foreground">Conexão Estratégica</h3>
                <p className="text-sm text-muted-foreground">Trusted circles que geram pipeline off‑market.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl md:text-2xl text-foreground">Estrutura MBRAS Conecta</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-white/60 dark:bg-white/5 border border-border p-5 shadow-luxury space-y-2">
                <h3 className="font-semibold text-foreground">Podcast – “MBRAS Conecta: O Podcast”</h3>
                <p className="text-sm text-foreground/90">Conversas Chatham House.</p>
              </div>
              <div className="rounded-xl bg-white/60 dark:bg-white/5 border border-border p-5 shadow-luxury space-y-2">
                <h3 className="font-semibold text-foreground">Vídeos – “MBRAS Conecta: Insights”</h3>
                <p className="text-sm text-foreground/90">Mini-documentários (5–8min).</p>
              </div>
              <div className="rounded-xl bg-white/60 dark:bg-white/5 border border-border p-5 shadow-luxury space-y-2">
                <h3 className="font-semibold text-foreground">Eventos – “MBRAS Conecta: Experience”</h3>
                <p className="text-sm text-foreground/90">20–50 convidados exclusivos.</p>              </div>
              <div className="rounded-xl bg-white/60 dark:bg-white/5 border border-border p-5 shadow-luxury space-y-2">
                <h3 className="font-semibold text-foreground">Newsletter – “MBRAS Conecta: Weekly Brief”</h3>
                <p className="text-sm text-foreground/90">One-pager curado, minimalista.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <Image aria-hidden src="/window.svg" alt="" width={20} height={20} />
              <h2 className="font-display text-xl md:text-2xl text-foreground">Orquestração 360°</h2>
            </div>
            <ul className="list-disc pl-5 text-sm text-foreground/90 space-y-1">
              <li>Podcast → Newsletter.</li>
              <li>Vídeos → Eventos.</li>
              <li>Eventos → Podcasts/Vídeos.</li>
              <li>Newsletter → CRM.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl md:text-2xl text-foreground">Métricas de Sucesso</h2>
            <ul className="list-disc pl-5 text-sm text-foreground/90 space-y-1">
              <li>audiência UHNWI/C-levels.</li>
              <li>citações espontâneas mídia premium/ano.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl md:text-2xl text-foreground">6. Roadmap de Implementação</h2>
            <ul className="list-disc pl-5 text-sm text-foreground/90 space-y-1">
              <li>0–3m: Podcast + Newsletter (MVP).</li>
              <li>3–6m: Vídeos + 1º Evento.</li>
              <li>6–12m: Ciclo 360° consolidado + expansão internacional.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <p className="text-sm text-foreground/90">
              O MBRAS Conecta se posiciona como hub premium de inteligência e relacionamento do real estate de luxo em SP, inspirando-se em benchmarks globais, mas adaptado à confidencialidade e curadoria exclusiva da MBRAS.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <Image aria-hidden src="/file.svg" alt="" width={20} height={20} />
              <h2 className="font-display text-xl md:text-2xl text-foreground">Notas Explicativas</h2>
            </div>
            <div className="space-y-3 text-sm text-foreground/90">
              <div>
                <p className="font-semibold">Regra de Chatham House</p>
                <p>
                  Utilizada em fóruns e think tanks globais, permite que os participantes falem livremente e compartilhem informações sensíveis. O conteúdo (insights, visões, aprendizados) pode ser usado, mas a identidade de quem disse algo específico deve permanecer confidencial. Isso transmite exclusividade e confiança, criando um espaço seguro para discussões estratégicas.
                </p>
              </div>
              <div>
                <p className="font-semibold">Trusted Circles</p>
                <p>
                  Conceito de círculos de confiança formados por UHNWI, C-levels e gestores, nos quais a informação circula de forma controlada, reforçando a credibilidade e fortalecendo as relações de longo prazo.
                </p>
              </div>
              <div>
                <p className="font-semibold">Pipeline Off-Market</p>
                <p>
                  Oportunidades de negócios não publicamente listadas, acessíveis apenas por meio de relacionamentos estratégicos e curadoria discreta. Esse elemento é central para o posicionamento premium da MBRAS.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
