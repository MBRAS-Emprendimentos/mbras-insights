'use client'

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import {
  User,
  Mail,
  Building,
  Briefcase,
  Phone,
  CheckCircle,
  ArrowRight,
  Loader2
} from 'lucide-react'
import toast from 'react-hot-toast'

const registrationSchema = z.object({
  fullName: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  company: z.string().min(2, 'Empresa deve ter pelo menos 2 caracteres'),
  position: z.string().min(2, 'Cargo deve ter pelo menos 2 caracteres'),
  phone: z.string().optional(),
  interests: z.array(z.string()).min(1, 'Selecione pelo menos um interesse'),
  acceptTerms: z.boolean().refine(val => val === true, 'Você deve aceitar os termos')
})

type RegistrationFormData = z.infer<typeof registrationSchema>

const interestOptions = [
  { id: 'market-analysis', label: 'Análise de Mercado' },
  { id: 'investment-trends', label: 'Tendências de Investimento' },
  { id: 'property-valuation', label: 'Avaliação de Propriedades' },
  { id: 'market-reports', label: 'Relatórios de Mercado' },
  { id: 'fiis', label: 'Fundos Imobiliários (FIIs)' },
  { id: 'commercial-properties', label: 'Imóveis Comerciais' }
]

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
}

export function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      interests: []
    }
  })

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      console.log('Registration data:', data)
      setIsSuccess(true)
      toast.success('Cadastro realizado com sucesso!')
      reset()
    } catch {
      toast.error('Erro no cadastro. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.2 }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 text-green-600 mb-6"
        >
          <CheckCircle className="w-10 h-10" />
        </motion.div>

        <h3 className="text-2xl font-display font-bold text-mbras-navy mb-4">
          Cadastro Realizado!
        </h3>

        <p className="text-mbras-navy/80 mb-6 max-w-md mx-auto">
          Obrigado pelo seu interesse! Em breve você receberá nossos insights exclusivos.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsSuccess(false)}
          className="px-6 py-3 bg-mbras-navy text-white rounded-lg font-semibold hover:bg-mbras-navy/90 transition-colors"
        >
          Novo Cadastro
        </motion.button>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-2xl mx-auto"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          {/* Personal Information */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-display font-bold text-mbras-navy mb-6">
              Informações Pessoais
            </h3>

            {/* Full Name */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-mbras-navy mb-2">
                <User className="w-4 h-4" />
                Nome Completo
              </label>
              <input
                {...register('fullName')}
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-mbras-navy/20 focus:border-mbras-gold focus:ring-2 focus:ring-mbras-gold/20 bg-white/50 text-mbras-navy placeholder-mbras-navy/60 transition-all duration-200"
                placeholder="Seu nome completo"
              />
              {errors.fullName && (
                <p className="text-red-600 text-sm mt-1">{errors.fullName.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-mbras-navy mb-2">
                <Mail className="w-4 h-4" />
                E-mail
              </label>
              <input
                {...register('email')}
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-mbras-navy/20 focus:border-mbras-gold focus:ring-2 focus:ring-mbras-gold/20 bg-white/50 text-mbras-navy placeholder-mbras-navy/60 transition-all duration-200"
                placeholder="seu@email.com"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Company & Position Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-mbras-navy mb-2">
                  <Building className="w-4 h-4" />
                  Empresa
                </label>
                <input
                  {...register('company')}
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-mbras-navy/20 focus:border-mbras-gold focus:ring-2 focus:ring-mbras-gold/20 bg-white/50 text-mbras-navy placeholder-mbras-navy/60 transition-all duration-200"
                  placeholder="Sua empresa"
                />
                {errors.company && (
                  <p className="text-red-600 text-sm mt-1">{errors.company.message}</p>
                )}
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-mbras-navy mb-2">
                  <Briefcase className="w-4 h-4" />
                  Cargo
                </label>
                <input
                  {...register('position')}
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-mbras-navy/20 focus:border-mbras-gold focus:ring-2 focus:ring-mbras-gold/20 bg-white/50 text-mbras-navy placeholder-mbras-navy/60 transition-all duration-200"
                  placeholder="Seu cargo"
                />
                {errors.position && (
                  <p className="text-red-600 text-sm mt-1">{errors.position.message}</p>
                )}
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-mbras-navy mb-2">
                <Phone className="w-4 h-4" />
                Telefone (opcional)
              </label>
              <input
                {...register('phone')}
                type="tel"
                className="w-full px-4 py-3 rounded-lg border border-mbras-navy/20 focus:border-mbras-gold focus:ring-2 focus:ring-mbras-gold/20 bg-white/50 text-mbras-navy placeholder-mbras-navy/60 transition-all duration-200"
                placeholder="(11) 99999-9999"
              />
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div variants={itemVariants} className="mt-8">
            <h3 className="text-xl font-display font-bold text-mbras-navy mb-6">
              Áreas de Interesse
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {interestOptions.map((interest) => (
                <label
                  key={interest.id}
                  className="flex items-center gap-3 p-4 rounded-lg border border-mbras-navy/20 bg-white/30 hover:bg-white/50 cursor-pointer transition-all duration-200"
                >
                  <input
                    {...register('interests')}
                    type="checkbox"
                    value={interest.id}
                    className="w-5 h-5 rounded border-mbras-navy/30 text-mbras-gold focus:ring-mbras-gold focus:ring-2"
                  />
                  <span className="text-mbras-navy font-medium">
                    {interest.label}
                  </span>
                </label>
              ))}
            </div>
            {errors.interests && (
              <p className="text-red-600 text-sm mt-2">{errors.interests.message}</p>
            )}
          </motion.div>

          {/* Terms */}
          <motion.div variants={itemVariants} className="mt-8">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                {...register('acceptTerms')}
                type="checkbox"
                className="mt-1 w-5 h-5 rounded border-mbras-navy/30 text-mbras-gold focus:ring-mbras-gold focus:ring-2"
              />
              <span className="text-sm text-mbras-navy">
                Concordo com os{' '}
                <a href="#" className="text-mbras-navy hover:underline font-semibold underline">
                  termos de uso
                </a>{' '}
                e{' '}
                <a href="#" className="text-mbras-navy hover:underline font-semibold underline">
                  política de privacidade
                </a>
              </span>
            </label>
            {errors.acceptTerms && (
              <p className="text-red-600 text-sm mt-2">{errors.acceptTerms.message}</p>
            )}
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={itemVariants} className="mt-8">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="w-full bg-mbras-navy text-white py-4 rounded-lg font-display font-bold text-lg hover:bg-mbras-navy/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processando...
                </>
              ) : (
                <>
                  Cadastrar-se
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </motion.div>
        </div>
      </form>
    </motion.div>
  )
}
