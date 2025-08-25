import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Schema de validação para registro
const registerSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  company: z.string().optional(),
  phone: z.string().optional(),
  interests: z.array(z.string()).optional(),
  source: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validar dados de entrada
    const validatedData = registerSchema.parse(body);

    // TODO: Implementar lógica de registro
    // - Salvar no banco de dados
    // - Enviar email de confirmação
    // - Integrar com CRM
    // - Adicionar à lista de newsletter

    console.log("Dados de registro validados:", validatedData);

    // Simular processamento
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Resposta de sucesso
    return NextResponse.json(
      {
        success: true,
        message: "Registro realizado com sucesso!",
        data: {
          id: Math.random().toString(36).substring(7),
          email: validatedData.email,
          registeredAt: new Date().toISOString(),
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Erro no registro:", error);

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

export async function GET() {
  return NextResponse.json({
    message: "API de registro MBRAS Insights",
    endpoints: {
      POST: "/api/register - Registrar novo usuário",
    },
  });
}
