import type { ReactNode } from "react";

export interface FooterLink {
  label: string;
  href: string;
  icon: ReactNode;
}

export interface FooterAction {
  label: string;
  href: string;
  icon?: ReactNode;
}

export interface FooterProps {
  title: string;
  action: FooterAction;
  socialTitle: string;
  socialLinks: FooterLink[];
  copyright: string;
}
