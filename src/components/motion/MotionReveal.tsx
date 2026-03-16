import {
  type CSSProperties,
  type ElementType,
  type HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

type MotionRevealProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  delay?: number;
  mode?: "load" | "in-view";
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
};

export function MotionReveal({
  as: Component = "div",
  className,
  delay = 0,
  mode = "in-view",
  once = true,
  threshold = 0.16,
  rootMargin = "0px 0px -12% 0px",
  style,
  ...props
}: MotionRevealProps) {
  const elementRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      setIsVisible(true);
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    if (mode === "load") {
      const frameId = window.requestAnimationFrame(() => {
        setIsVisible(true);
      });

      return () => window.cancelAnimationFrame(frameId);
    }

    const node = elementRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            if (!once) {
              setIsVisible(false);
            }

            return;
          }

          setIsVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [mode, once, rootMargin, threshold]);

  const motionStyle = {
    ...style,
    "--motion-delay": `${delay}ms`,
  } as CSSProperties;

  return (
    <Component
      ref={elementRef}
      data-visible={isVisible}
      className={cn(
        "motion-reveal",
        mode === "load" ? "motion-reveal--load" : "motion-reveal--scroll",
        className,
      )}
      style={motionStyle}
      {...props}
    />
  );
}
