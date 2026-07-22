import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookX } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ScrollReveal from "./ScrollReveal";
import AlumniCard from "./cards/AlumniCard";
import { alumni, BATCHES } from "@/data/alumni";

const STORAGE_KEY = "literary-alumni-batch";

const Alumni = () => {
  const [batch, setBatch] = useState<string>(() => {
    if (typeof window === "undefined") return BATCHES[0];
    const saved = window.sessionStorage.getItem(STORAGE_KEY);
    return saved && BATCHES.includes(saved as (typeof BATCHES)[number])
      ? saved
      : BATCHES[0];
  });

  useEffect(() => {
    window.sessionStorage.setItem(STORAGE_KEY, batch);
  }, [batch]);

  const filtered = useMemo(
    () => alumni.filter((a) => a.batch === batch),
    [batch]
  );

  return (
    <section id="alumni" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-6">
              Our Alumni
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Meet the distinguished members who have been a part of our Literary
              Society and continue to make us proud.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <Select value={batch} onValueChange={setBatch}>
            <SelectTrigger
              className="w-[220px] font-body bg-card border-border rounded-lg shadow-sm hover:border-sepia/40 transition-colors"
              aria-label="Select batch"
            >
              <SelectValue placeholder="Select Batch" />
            </SelectTrigger>
            <SelectContent className="font-body bg-card border-border rounded-lg">
              {BATCHES.map((b) => (
                <SelectItem key={b} value={b}>
                  {b}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <p className="font-body text-sm text-muted-foreground">
            {batch}{" "}
            <span className="text-sepia font-medium">
              ({filtered.length} {filtered.length === 1 ? "Alumnus" : "Alumni"})
            </span>
          </p>
        </div>

        <div className="max-w-5xl mx-auto min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={batch}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {filtered.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filtered.map((member) => (
                    <AlumniCard key={member.id} member={member} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center py-16">
                  <div className="bg-parchment p-5 rounded-full mb-4">
                    <BookX className="w-10 h-10 text-sepia" />
                  </div>
                  <p className="font-body text-muted-foreground">
                    No alumni records available for this batch.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Alumni;
