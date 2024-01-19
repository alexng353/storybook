type Options = {
  colorScheme?:
  | "primary"
  | "secondary"
  | "tertiary"
  | "success"
  | "warn"
  | "error"
  | "info"
  | "DEFAULT";
  variant?: "primary" | "secondary" | "text" | "neutral";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  sizing?: "xs" | "sm" | "md" | "lg" | "xl";
  opacity?:
  | "0"
  | "10"
  | "20"
  | "30"
  | "40"
  | "50"
  | "60"
  | "70"
  | "80"
  | "90"
  | "100";
};

export type PropsOptions<T extends keyof Options> = Pick<Options, T> & {
  className?: string;
};
