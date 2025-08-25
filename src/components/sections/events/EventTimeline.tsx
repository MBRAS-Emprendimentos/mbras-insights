"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  TrendingUp,
  Building,
  Users,
  Award,
} from "lucide-react";
import { useState } from "react";

const events = [
  {
    id: 1,
    date: "2024-03-15",
    title: "Lançamento do Relatório Trimestral",
    description:
      "Análise completa do mercado imobiliário do primeiro trimestre de 2024.",
    type: "report",
    icon: TrendingUp,
    location: "São Paulo",
    status: "completed",
  },
  {
    id: 2,
    date: "2024-04-22",
    title: "Summit Imobiliário MBRAS",
    description:
      "Evento presencial com os principais players do mercado imobiliário brasileiro.",
    type: "event",
    icon: Users,
    location: "Rio de Janeiro",
    status: "completed",
  },
  {
    id: 3,
    date: "2024-05-10",
    title: "Webinar: Tendências do Mercado",
    description:
      "Apresentação das principais tendências identificadas nos últimos meses.",
    type: "webinar",
    icon: Building,
    location: "Online",
    status: "completed",
  },
  {
    id: 4,
    date: "2024-06-18",
    title: "Relatório Especial: Fundos Imobiliários",
    description:
      "Análise detalhada do desempenho dos FIIs no primeiro semestre.",
    type: "report",
    icon: Award,
    location: "Digital",
    status: "upcoming",
  },
  {
    id: 5,
    date: "2024-07-25",
    title: "Conferência Anual MBRAS",
    description:
      "O maior evento do ano com palestrantes internacionais e networking premium.",
    type: "conference",
    icon: Calendar,
    location: "São Paulo",
    status: "upcoming",
  },
  {
    id: 6,
    date: "2024-08-30",
    title: "Workshop: Investimentos Imobiliários",
    description:
      "Capacitação intensiva sobre estratégias de investimento no setor.",
    type: "workshop",
    icon: TrendingUp,
    location: "Brasília",
    status: "upcoming",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const getEventTypeColor = (type: string) => {
  switch (type) {
    case "report":
      return "from-mbras-navy to-mbras-teal";
    case "event":
      return "from-mbras-teal to-mbras-gold";
    case "webinar":
      return "from-mbras-gold to-mbras-navy";
    case "conference":
      return "from-mbras-navy to-mbras-gold";
    case "workshop":
      return "from-mbras-teal to-mbras-navy";
    default:
      return "from-mbras-navy to-mbras-teal";
  }
};

export function EventTimeline() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate().toString().padStart(2, "0"),
      month: date.toLocaleString("pt-BR", { month: "short" }),
      year: date.getFullYear(),
    };
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-mbras-gold via-mbras-teal to-mbras-navy opacity-30" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-8"
      >
        {events.map((event, index) => {
          const isCompleted = event.status === "completed";
          const isSelected = selectedEvent === event.id;
          const dateFormatted = formatDate(event.date);

          return (
            <motion.div
              key={event.id}
              variants={itemVariants}
              onClick={() => setSelectedEvent(isSelected ? null : event.id)}
              className="relative flex items-start gap-6 cursor-pointer group"
            >
              {/* Timeline Node */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                className={`relative flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${getEventTypeColor(event.type)} p-0.5 shadow-lg z-10`}
              >
                <div
                  className={`flex items-center justify-center w-full h-full rounded-full ${isCompleted ? "bg-white/90" : "bg-white"} transition-all duration-300`}
                >
                  <event.icon
                    className={`w-6 h-6 ${isCompleted ? "text-mbras-navy" : "text-mbras-teal"}`}
                  />
                </div>

                {/* Pulse effect for upcoming events */}
                {!isCompleted && (
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${getEventTypeColor(event.type)} opacity-30`}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.1, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                )}
              </motion.div>

              {/* Event Card */}
              <motion.div whileHover={{ x: 8 }} className="flex-1 min-h-0">
                <div
                  className={`relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 transition-all duration-300 ${isSelected ? "shadow-2xl bg-white/20" : "hover:bg-white/15 hover:shadow-xl"}`}
                >
                  {/* Date Badge */}
                  <div className="absolute -top-3 right-4">
                    <div
                      className={`bg-gradient-to-br ${getEventTypeColor(event.type)} text-white px-4 py-2 rounded-lg shadow-lg text-sm font-display font-semibold`}
                    >
                      <div className="text-center">
                        <div className="text-lg leading-none">
                          {dateFormatted.day}
                        </div>
                        <div className="text-xs uppercase">
                          {dateFormatted.month}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pr-16">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${isCompleted ? "bg-green-500/20 text-green-300" : "bg-amber-500/20 text-amber-300"}`}
                      >
                        {isCompleted ? "Concluído" : "Próximo"}
                      </span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-mbras-cream transition-colors duration-300">
                      {event.title}
                    </h3>

                    <p className="text-white/80 leading-relaxed mb-4">
                      {event.description}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-white/60">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{dateFormatted.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isSelected ? "auto" : 0,
                      opacity: isSelected ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-white/20 mt-4 pt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/80">
                        <div>
                          <strong className="text-white">Tipo:</strong>{" "}
                          {event.type}
                        </div>
                        <div>
                          <strong className="text-white">Status:</strong>{" "}
                          {event.status === "completed"
                            ? "Concluído"
                            : "Em breve"}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Hover gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${getEventTypeColor(event.type)} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl pointer-events-none`}
                  />
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-12 text-center"
      >
        <p className="text-white/60 text-sm">
          Clique nos eventos para mais detalhes
        </p>
      </motion.div>
    </div>
  );
}
