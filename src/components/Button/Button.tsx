import clsx from "clsx";
import React, { MouseEventHandler } from "react";
import { tv } from "tailwind-variants";
import { PropsOptions } from "../../types/PropsOptions";

const buttonStyle = tv({
  slots: {
    button: "",
  },
  variants: {
    variant: {
      primary: {
        button: "PUT TAILWIND STYLES HERE",
      },
      secondary: {
        button: "",
      },
      text: {
        button: "",
      },
      neutral: {
        button: "",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type LinkComponentType = React.ComponentType<{
  href: string;
  children: React.ReactNode;
  [key: string]: unknown;
}>;

function Button({
  children,
  linkAs,
  href,
  onClick,
  variant,
  className,
}: {
  children: React.ReactNode;
  linkAs?: LinkComponentType;
  href: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & PropsOptions<"variant">): React.JSX.Element {
  const styles = buttonStyle({ variant });

  if (href) {
    const LinkComponent = linkAs ?? "a";
    return (
      <LinkComponent className={clsx(styles.button, className)} href={href}>
        {children}
      </LinkComponent>
    );
  }

  return (
    <button className={clsx(styles.button, className)} onClick={onClick}>
      {children}
    </button>
  );
}

export { Button };
export type { LinkComponentType };
