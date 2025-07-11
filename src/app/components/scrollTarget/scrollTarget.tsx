"use client";
import { useRouter, usePathname } from "next/navigation";
import { ReactNode } from "react";

type ScrollLinkProps = {
  scrollTarget?: string;
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  delayScroll?: boolean;
};

export default function ScrollLink({
  scrollTarget,
  href,
  children,
  className,
  onClick,
  delayScroll = false,
}: ScrollLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (onClick) onClick();

    if (scrollTarget) {
      if (pathname !== "/") {
        router.push(`/#${scrollTarget}`);
      } else {
        const scrollAction = () => {
          const el = document.getElementById(scrollTarget);
          if (el) {
            const yOffset = -window.innerHeight / 2 + el.getBoundingClientRect().height / 2;
            const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        };
        if (delayScroll) {
          setTimeout(scrollAction, 300);
        } else {
          scrollAction();
        }
      }
    } else if (href) {
      router.push(href);
    }
  };

  return (
    <div
      className={className}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter") handleClick(e as unknown as React.MouseEvent<HTMLDivElement>);
      }}
    >
      {children}
    </div>
  );
}
