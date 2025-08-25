import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Schema de validação para newsletter
const newsletterSchema = z.object({
  email: z.string().email("Email inválido"),
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").optional(),
  preferences: z
    .object({
      marketAnalysis: z.boolean().default(true),
      weeklyReports: z.boolean().default(true),
      eventUpdates: z.boolean().default(false),
      premiumInsights: z.boolean().default(false),
    })
    .optional(),
  source: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validar dados de entrada
    const validatedData = newsletterSchema.parse(body);

    // TODO: Implementar lógica de newsletter
    // - Verificar se email já existe
    // - Salvar no banco de dados
    // - Integrar com provedor de email (Mailchimp, SendGrid, etc.)
    // - Enviar email de confirmação
    // - Segmentar por preferências

    console.log("Dados de newsletter validados:", validatedData);

    // Simular processamento
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Verificar se é um email duplicado (simulado)
    if (validatedData.email === "test@duplicate.com") {
      return NextResponse.json(
        {
          success: false,
          message: "Este email já está cadastrado em nossa newsletter",
        },
        { status: 409 },
      );
    }

    // Resposta de sucesso
    return NextResponse.json(
      {
        success: true,
        message: "Cadastro na newsletter realizado com sucesso!",
        data: {
          id: Math.random().toString(36).substring(7),
          email: validatedData.email,
          status: "pending_confirmation",
          subscribedAt: new Date().toISOString(),
          preferences: validatedData.preferences || {
            marketAnalysis: true,
            weeklyReports: true,
            eventUpdates: false,
            premiumInsights: false,
          },
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Erro no cadastro da newsletter:", error);

    // Erro de validação
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Dados inválidos",
          errors: error.issues.map((err) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        },
        { status: 400 },
      );
    }

    // Erro interno
    return NextResponse.json(
      {
        success: false,
        message: "Erro interno do servidor",
      },
      { status: 500 },
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        {
          success: false,
          message: "Email é obrigatório para descadastro",
        },
        { status: 400 },
      );
    }

    // Validar email
    const emailSchema = z.string().email();
    const validatedEmail = emailSchema.parse(email);

    // TODO: Implementar lógica de descadastro
    // - Remover do banco de dados
    // - Atualizar status no provedor de email
    // - Log da ação

    console.log("Descadastro da newsletter:", validatedEmail);

    // Simular processamento
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      message: "Email removido da newsletter com sucesso",
      data: {
        email: validatedEmail,
        unsubscribedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("Erro no descadastro da newsletter:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Email inválido",
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Erro interno do servidor",
      },
      { status: 500 },
    );
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  if (email) {
    // Buscar status de um email específico
    try {
      const emailSchema = z.string().email();
      const validatedEmail = emailSchema.parse(email);

      // TODO: Buscar no banco de dados
      // Simulação de resposta
      return NextResponse.json({
        success: true,
        data: {
          email: validatedEmail,
          subscribed: true,
          subscribedAt: "2024-01-15T10:30:00Z",
          preferences: {
            marketAnalysis: true,
            weeklyReports: true,
            eventUpdates: false,
            premiumInsights: true,
          },
        },
      });
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Email inválido",
        },
        { status: 400 },
      );
    }
  }

  // Informações gerais da API
  return NextResponse.json({
    message: "API de Newsletter MBRAS Insights",
    endpoints: {
      POST: "/api/newsletter - Cadastrar email na newsletter",
      DELETE: "/api/newsletter?email=user@email.com - Descadastrar email",
      GET: "/api/newsletter?email=user@email.com - Consultar status do email",
    },
    preferences: {
      marketAnalysis: "Análises de mercado semanais",
      weeklyReports: "Relatórios semanais consolidados",
      eventUpdates: "Atualizações de eventos e webinars",
      premiumInsights: "Insights premium exclusivos",
    },
  });
}
