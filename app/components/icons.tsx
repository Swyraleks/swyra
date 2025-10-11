// app/components/icons.tsx
import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

const common = {
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const IconLock = ({ size = 24, ...rest }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...rest}
  >
    <rect x="4" y="10" width="16" height="10" rx="3" stroke="currentColor" {...common} />
    <path d="M8 10V7a4 4 0 1 1 8 0v3" stroke="currentColor" {...common} />
    <circle cx="12" cy="15" r="1" fill="currentColor" />
  </svg>
);

export const IconBolt = ({ size = 24, ...rest }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...rest}>
    <path
      d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"
      fill="currentColor"
      stroke="currentColor"
      {...common}
    />
  </svg>
);

export const IconCH = ({ size = 24, ...rest }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...rest}>
    <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" {...common} />
    <path d="M12 7v10M7 12h10" stroke="currentColor" {...common} />
  </svg>
);

export const IconRegister = ({ size = 24, ...rest }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...rest}>
    <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" {...common} />
    <path d="M8 9h8M8 13h5" stroke="currentColor" {...common} />
    <path d="m10 17 2 2 5-5" stroke="currentColor" {...common} />
  </svg>
);

export const IconListing = ({ size = 24, ...rest }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...rest}>
    <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" {...common} />
    <circle cx="9" cy="12" r="3" stroke="currentColor" {...common} />
    <path d="M14.5 9h4" stroke="currentColor" {...common} />
  </svg>
);

export const IconShieldCheck = ({ size = 24, ...rest }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...rest}>
    <path
      d="M12 3 5 6v6c0 5 3.5 7.5 7 9 3.5-1.5 7-4 7-9V6l-7-3Z"
      stroke="currentColor"
      {...common}
    />
    <path d="m8.5 12 2.5 2.5L16 9.5" stroke="currentColor" {...common} />
  </svg>
);
