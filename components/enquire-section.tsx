"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { getSiteConfig } from "@/lib/config";
import { useModal } from "@/lib/stores/use-modal-store";
import { cn } from "@/lib/utils";
import { submitForm } from "@/lib/utils/form-submission";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Loader2, PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { PhoneInput } from "./ui/phone-input";
import { useSite } from "@/lib/context/site-context";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z
    .string()
    .email({
      message: "Please enter a valid email address.",
    })
    .optional()
    .or(z.literal("")),
  phone: z
    .string({
      message: "Please enter a valid phone number.",
    })
    .min(10, {
      message: "Please enter a valid phone number.",
    }),
});

type EnquireSectionProps = {
  showFreeVisitButton?: boolean;
  showCallUsButton?: boolean;
  isModal?: boolean;
  onSubmit?: () => void;
  className?: string;
};

export default function EnquireSection({
  showFreeVisitButton = true,
  showCallUsButton = true,
  className,
  isModal = false,
  onSubmit,
}: EnquireSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "" },
    mode: "onChange",
  });

  const router = useRouter();
  const { onOpen } = useModal();
  const { site } = useSite();
  const { enquire, formSubmission } = getSiteConfig(site);

  async function handleSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);
      await submitForm(site || "", {
        name: values.name,
        email: values.email || "",
        phone: values.phone,
      });
      router.push(`${site}/thank-you`);
      onSubmit?.();
    } catch (error) {
      console.error("Form submission error:", error);
      // Show error toast
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <aside
      className={cn(
        "bg-white w-full",
        isModal
          ? "max-h-[90vh] rounded-lg p-6"
          : "max-h-[calc(100vh-4rem)] px-4 py-2",
        className
      )}
    >
      <div className="bg-white pb-2 z-10">
        <h2 className="text-lg font-semibold text-gray-900">{enquire.title}</h2>

        {showCallUsButton && (
          <div
            className="bg-primary rounded-lg py-2 px-4 flex w-full items-center justify-start gap-2 mt-1 cursor-pointer"
            onClick={() => window.open(`tel:${enquire.callUs.phone}`)}
          >
            <div className="flex items-center justify-center rounded-full size-6 bg-white text-primary p-2">
              <PhoneCallIcon className="size-6" />
            </div>
            <div className="flex flex-col items-start text-white">
              <div className="text-sm">{enquire.callUs.title}</div>
              <div className="text-xs font-medium">{enquire.callUs.phone}</div>
            </div>
          </div>
        )}
      </div>

      <div className="space-y-1 flex flex-col gap-1 min-h-[calc(100%-2rem)]">
        <div className="flex-1">
          <Form {...form}>
            <form
              id={formSubmission.crm.formId}
              name={formSubmission.crm.name}
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-4"
              acceptCharset="utf-8"
              encType="multipart/form-data"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter Your Name"
                        {...field}
                        required
                        className={cn(
                          "bg-white border-gray-200",
                          form.formState.errors.name && "border-red-500 !ring-0"
                        )}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-start">
                    <FormControl className="w-full">
                      <PhoneInput
                        defaultCountry="IN"
                        placeholder="Enter Phone Number"
                        {...field}
                        required
                        className={cn(
                          "bg-white border-gray-200",
                          form.formState.errors.phone &&
                            "border-red-500 !ring-0"
                        )}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter Your Email (optional)"
                        {...field}
                        type="email"
                        className="bg-white border-gray-200"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </Form>
        </div>

        {showFreeVisitButton && (
          <div className="flex flex-col gap-3 mt-auto">
            <div className="flex items-center gap-3 bg-gray-100 p-2.5 rounded-lg">
              <div className="relative flex-shrink-0 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]">
                <Image
                  src={enquire.bookFreeVisit.image.src}
                  alt={enquire.bookFreeVisit.image.alt}
                  fill
                  className="rounded-md object-cover"
                  sizes="(max-width: 640px) 60px, 80px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900">
                  {enquire.bookFreeVisit.cta.title}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-2 mt-0.5">
                  {enquire.bookFreeVisit.cta.description}
                </p>
              </div>
            </div>

            <Button
              className="w-full bg-primary relative overflow-hidden h-10"
              onClick={() =>
                onOpen("enquiry", {
                  title: enquire.bookFreeVisit.cta.title,
                  description: enquire.bookFreeVisit.cta.description,
                })
              }
              disabled={isSubmitting}
            >
              <span className="relative z-10 text-sm font-medium">
                Book Free Site Visit
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-600/0 via-primary-600/30 to-primary-600/0"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </Button>
          </div>
        )}
      </div>
    </aside>
  );
}
