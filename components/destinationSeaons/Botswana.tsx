import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun, Cloud, CloudRain, CloudSun, Wind, Droplets, Thermometer,
  Eye, Star, Camera, Bird, Zap
} from "lucide-react";

const months = [
  { short: "Jan", season: 0 },
  { short: "Fév", season: 0 },
  { short: "Mar", season: 1 },
  { short: "Avr", season: 1 },
  { short: "Mai", season: 2 },
  { short: "Juin", season: 2 },
  { short: "Juil", season: 2 },
  { short: "Aoû", season: 3 },
  { short: "Sep", season: 3 },
  { short: "Oct", season: 3 },
  { short: "Nov", season: 0 },
  { short: "Déc", season: 0 },
];

const seasons = [
  {
    id: 0,
    period: "Nov — Janv",
    title: "Saison verte",
    icon: CloudSun,
    tempHigh: "36°C",
    tempLow: "18°C",
    rain: "Modérées",
    humidity: "Haute",
    crowd: "Faible",
    rating: 3,
    ratingLabel: "Bien",
    weatherLabel: "Nuageux & chaud",
    skyIcon: CloudSun,
    bgGradient: "from-emerald-900/80 to-teal-800/60",
    accentColor: "#4ade80",
    tempBar: 85,
    rainLevel: 3,
    highlights: ["500+ espèces d'oiseaux", "Végétation luxuriante", "Naissances animales", "Prix réduits"],
    highlightIcons: [Bird, Eye, Star, Zap],
    text: "Paysages verdoyants, naissances dans les troupeaux, lumière photographique magnifique. Moins de visiteurs, tarifs plus attractifs.",
  },
  {
    id: 1,
    period: "Fév — Avril",
    title: "Saison des pluies",
    icon: CloudRain,
    tempHigh: "38°C",
    tempLow: "20°C",
    rain: "Abondantes",
    humidity: "Très haute",
    crowd: "Très faible",
    rating: 2,
    ratingLabel: "Spécifique",
    weatherLabel: "Pluvieux & humide",
    skyIcon: CloudRain,
    bgGradient: "from-slate-800/90 to-blue-900/70",
    accentColor: "#60a5fa",
    tempBar: 92,
    rainLevel: 5,
    highlights: ["Migration zèbres", "Flamants roses", "Faune juvénile", "Pans inondés"],
    highlightIcons: [Eye, Bird, Star, Droplets],
    text: "Les Makgadikgadi Pans se remplissent d'eau, attirant flamants roses et zèbres. Bébés animaux abondants. Chaleur intense.",
  },
  {
    id: 2,
    period: "Mai — Juillet",
    title: "Début saison sèche",
    icon: CloudSun,
    tempHigh: "28°C",
    tempLow: "8°C",
    rain: "Rares",
    humidity: "Basse",
    crowd: "Modérée",
    rating: 4,
    ratingLabel: "Excellent",
    weatherLabel: "Doux & ensoleillé",
    skyIcon: CloudSun,
    bgGradient: "from-amber-900/70 to-orange-800/50",
    accentColor: "#fbbf24",
    tempBar: 55,
    rainLevel: 1,
    highlights: ["Okavango en crue", "Premiers mokoros", "Safari 4x4", "Températures douces"],
    highlightIcons: [Droplets, Eye, Star, Thermometer],
    text: "Les eaux de l'Okavango commencent à monter. Excellent pour les safaris 4x4 et les premières activités de mokoro. Températures très agréables.",
  },
  {
    id: 3,
    period: "Août — Octobre",
    title: "Meilleure saison safari",
    icon: Sun,
    tempHigh: "32°C",
    tempLow: "10°C",
    rain: "Nulles",
    humidity: "Très basse",
    crowd: "Haute",
    rating: 5,
    ratingLabel: "Exceptionnel",
    weatherLabel: "Ensoleillé & sec",
    skyIcon: Sun,
    bgGradient: "from-amber-800/80 to-yellow-700/50",
    accentColor: "#f59e0b",
    tempBar: 68,
    rainLevel: 0,
    highlights: ["Delta au maximum", "Grands prédateurs", "Lions & guépards", "Lycaons visibles"],
    highlightIcons: [Star, Eye, Camera, Zap],
    text: "La saison la plus prisée. Les animaux se concentrent aux points d'eau, la végétation est clairsemée. Réservez très en avance.",
    featured: true,
  },
];

const RainDots = ({ level }: { level: number }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((i) => (
      <Droplets
        key={i}
        className={`w-4 h-4 transition-all duration-300 ${i <= level ? "text-white opacity-100" : "text-white/20 opacity-40"}`}
      />
    ))}
  </div>
);

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${i <= rating ? "text-white fill-white" : "text-white/20"}`}
      />
    ))}
  </div>
);

export default function Bostwana() {
  const [activeSeason, setActiveSeason] = useState(3);
  const season = seasons[activeSeason];
  const WeatherIcon = season.skyIcon;

  return (
    <div>
      <div className="mx-auto">
        <div className="w-full h-px bg-border mb-16" />

        {/* Month Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-12 gap-1 mb-6"
        >
          {months.map((m, i) => (
            <button
              key={m.short}
              onClick={() => setActiveSeason(m.season)}
              style={m.season === activeSeason ? { backgroundColor: "#BA6827" } : undefined}
              className={`relative py-2.5 text-[10px] font-body font-bold uppercase tracking-wider rounded-sm transition-all duration-300 cursor-pointer ${
                m.season === activeSeason
                  ? "bg-[#BA6827] text-white shadow-md"
                  : "bg-card border border-border/60 text-muted-foreground hover:bg-muted"
              }`}
            >
              {m.short}
              {/* Active underline */}
              {m.season === activeSeason && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#BA6827]" />
              )}
            </button>
          ))}
        </motion.div>

        {/* Weather Widget */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSeason}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45 }}
            className="relative overflow-hidden rounded-sm bg-secondary text-secondary-foreground"
          >
            {/* Subtle bg gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${season.bgGradient} pointer-events-none`} />

            {season.featured && (
              <div className="absolute top-4 right-4 z-10 px-3 py-1.5 text-[9px] font-body font-bold uppercase tracking-[0.2em] bg-[#BA6827] text-white rounded-sm">
                ★ Top safari
              </div>
            )}

            <div className="relative z-10 grid md:grid-cols-[1.2fr_1fr_1fr] gap-0">

              {/* LEFT — Main weather display */}
              <div className="p-8 md:p-10 flex flex-col justify-between border-r border-white">
                <div>
                  <p className="text-[10px] font-body font-semibold uppercase tracking-[0.22em] text-white">
                    {season.period}
                  </p>
                  <div className="mt-4 flex items-start gap-4">
                    <WeatherIcon
                      className="w-14 h-14 md:w-16 md:h-16 mt-1 flex-shrink-0"
                      style={{ color: season.accentColor }}
                    />
                    <div>
                      <p className="font-display text-5xl md:text-6xl font-light text-white leading-none">
                        {season.tempHigh}
                      </p>
                      <p className="mt-1 font-body text-sm text-white">
                        min {season.tempLow}
                      </p>
                    </div>
                  </div>
                  <p className="mt-5 font-display text-2xl font-light text-white">
                    {season.title}
                  </p>
                  <p className="mt-1 font-body text-xs text-white">
                    {season.weatherLabel}
                  </p>
                </div>

                {/* Rating */}
                <div className="mt-8 pt-6 border-t border-secondary-foreground/10">
                  <p className="text-[9px] font-body font-semibold uppercase tracking-[0.2em] text-white mb-2">
                    Période safari
                  </p>
                  <div className="flex items-center gap-3">
                    <StarRating rating={season.rating} />
                    <span className="font-body text-md font-semibold" style={{ color: season.accentColor }}>
                      {season.ratingLabel}
                    </span>
                  </div>
                </div>
              </div>

              {/* MIDDLE — Climate metrics */}
              <div className="p-8 md:p-10 border-r border-secondary-foreground/10">
                <p className="text-[9px] font-body font-semibold uppercase tracking-[0.22em] text-white mb-6">
                  Conditions
                </p>

                {/* Temp bar */}
                <div className="mb-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="flex items-center gap-1.5 text-md font-body text-white">
                      <Thermometer className="w-5 h-5" />
                      Température
                    </span>
                    <span className="text-md font-body font-semibold text-white">{season.tempHigh}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${season.tempBar}%` }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: season.accentColor }}
                    />
                  </div>
                </div>

                {/* Rain */}
                <div className="mb-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="flex items-center gap-1.5 text-md font-body text-white">
                      <CloudRain className="w-5 h-5" />
                      Précipitations
                    </span>
                    <span className="text-md font-body font-semibold text-white">{season.rain}</span>
                  </div>
                  <RainDots level={season.rainLevel} />
                </div>

                {/* Humidity */}
                <div className="mb-5">
                  <div className="flex justify-between items-center mb-1">
                    <span className="flex items-center gap-1.5 text-md font-body text-white">
                      <Droplets className="w-5 h-5" />
                      Humidité
                    </span>
                    <span className="text-md font-body font-semibold text-white">{season.humidity}</span>
                  </div>
                </div>

                {/* Crowd */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-1">
                    <span className="flex items-center gap-1.5 text-md font-body text-white">
                      <Eye className="w-5 h-5" />
                      Fréquentation
                    </span>
                    <span className="text-md font-body font-semibold text-white">{season.crowd}</span>
                  </div>
                </div>

                {/* Wind */}
                <div className="pt-5 border-t border-secondary-foreground/10">
                  <div className="flex items-center gap-1.5">
                    <Wind className="w-5 h-5 text-white" />
                    <span className="text-[12px] font-body text-white">
                      {season.id === 0 || season.id === 1 ? "Vents chauds du nord" : "Vents froids nocturnes"}
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT — Highlights + description */}
              <div className="p-8 md:p-10 flex flex-col">
                <p className="text-[9px] font-body font-semibold uppercase tracking-[0.22em] text-white mb-6">
                  À ne pas manquer
                </p>

                <div className="space-y-3 flex-1">
                  {season.highlights.map((h, i) => {
                    const Icon = season.highlightIcons[i];
                    return (
                      <div key={h} className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${season.accentColor}20` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: season.accentColor }} />
                        </div>
                        <p className="text-sm text-white">{h}</p>
                      </div>
                    );
                  })}
                </div>

                <p className="mt-8 pt-5 border-t border-secondary-foreground/10 font-body text-xs leading-[1.8] text-white">
                  {season.text}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Season quick-select labels below the widget */}
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
          {seasons.map((s, i) => {
            const Icon = s.icon;
            return (
              <button
                key={s.id}
                onClick={() => setActiveSeason(i)}
                className={`flex items-center gap-2.5 p-3 rounded-sm border transition-all duration-300 cursor-pointer text-left ${
                  activeSeason === i
                    ? "border-primary/40 bg-primary/5"
                    : "border-border/60 bg-card hover:bg-muted"
                }`}
              >
                <Icon
                  className="w-13 h-13 flex-shrink-0"
                  style={{ color: activeSeason === i ? s.accentColor : undefined }}
                />
                <div>
                  <span className={`text-[20px] font-bold uppercase tracking-[0.12em] ${activeSeason === i ? "text-primary" : "text-muted-foreground"}`}>
                    {s.period}
                  </span>
                  <p className="text-[10px] font-body text-muted-foreground">{s.title}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
