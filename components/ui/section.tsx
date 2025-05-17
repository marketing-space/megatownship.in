import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
  button?: {
    text?: string;
    icon?: React.ReactNode;
    onClick?: () => void;
  };
}

const Section = forwardRef<HTMLDivElement, SectionProps>(
  (
    {
      id,
      children,
      title,
      subtitle,
      className,
      button,
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn("py-4 px-4 lg:px-10 bg-white", className)}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-8 mb-8">
          <div className="flex flex-col items-start">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {title}
            </h2>
            {subtitle && (
              <>
                <div className="my-1 w-24 h-1 rounded-full bg-primary"></div>
                <p className="text-sm text-gray-600 max-w-2xl">{subtitle}</p>
              </>
            )}
          </div>
          {button && (
            <Button onClick={button.onClick} className="w-full sm:w-auto">
              {button.icon}
              <span className="text-sm sm:text-base">{button.text}</span>
            </Button>
          )}
        </div>
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";
export { Section };
