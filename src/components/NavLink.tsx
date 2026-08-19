"use client";

import Link from "next/link";
import { forwardRef, type ComponentProps } from "react";
import { cn } from "@/lib/utils";

type NavLinkProps = ComponentProps<typeof Link> & {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  to?: string;
};

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, pendingClassName, to, href, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        href={href ?? to ?? "/"}
        className={cn(className, activeClassName)}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
