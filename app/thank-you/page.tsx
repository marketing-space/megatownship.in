"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, Home } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getSiteConfig } from "@/lib/config";
import { useSite } from "@/lib/context/site-context";
import { GoogleTagManager } from "@next/third-parties/google";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const successIconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

const rippleVariants = {
  animate: (i: number) => ({
    scale: [1, 2],
    opacity: [0.5, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      delay: i * 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

export default function ThankYouPage() {
  const router = useRouter();
  const { site } = useSite();
  const { contact, gtmId } = getSiteConfig(site);
  // Add countdown state
  const [countdown, setCountdown] = useState(10);

  // Add redirect effect
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push(`/${site}/#home`);
    }, countdown * 1000);

    // Cleanup timer
    return () => clearTimeout(redirectTimer);
  }, [countdown, router, site]);

  // Add countdown effect
  useEffect(() => {
    const countdownTimer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdownTimer);
  }, [countdown]);

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gray-50/50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center text-center max-w-lg w-full bg-white rounded-xl shadow-lg p-8"
      >
        {/* Success Icon with Enhanced Ripples */}
        <div className="relative mb-8">
          <div className="relative w-24 h-24">
            {[...Array(3)].map((_, index) => (
              <motion.div
                key={index}
                custom={index}
                animate="animate"
                variants={rippleVariants}
                className="absolute inset-0 rounded-full bg-primary/20"
                style={{
                  width: "100%",
                  height: "100%",
                  left: "0%",
                  top: "0%",
                }}
              />
            ))}
            <motion.div
              variants={successIconVariants}
              className="absolute inset-0 rounded-full bg-primary/10 flex items-center justify-center"
            >
              <CheckCircle className="w-12 h-12 text-primary" />
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <motion.div variants={itemVariants} className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">Thank You</h2>
          <p className="text-gray-600">
            Our team will contact you shortly to assist you further.
          </p>

          {/* Add countdown text */}
          <motion.p
            className="text-sm text-muted-foreground mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Redirecting to home page in {countdown} seconds...
          </motion.p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 justify-center mt-8"
        >
          <Button
            className="gap-2 group relative overflow-hidden"
            onClick={() => router.push(`/${site}/#home`)}
          >
            <motion.div
              className="absolute inset-0 bg-primary/10"
              initial={false}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <Home className="w-4 h-4 relative" />
            <span className="relative">Back to Home</span>
          </Button>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="w-full h-1 bg-gray-100 rounded-full mt-6 overflow-hidden"
          variants={itemVariants}
        >
          <motion.div
            className="h-full bg-primary"
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: countdown, ease: "linear" }}
          />
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={itemVariants}
          className="mt-8 p-6 bg-primary/5 rounded-lg w-full"
        >
          <motion.p
            className="text-sm text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            For immediate assistance, contact us at
          </motion.p>
          <motion.a
            href={`tel:${contact.phone}`}
            className="text-lg font-semibold text-primary hover:text-primary/90"
          >
            {contact.phone}
          </motion.a>
        </motion.div>
      </motion.div>
      <GoogleTagManager gtmId={gtmId} />
    </main>
  );
}
