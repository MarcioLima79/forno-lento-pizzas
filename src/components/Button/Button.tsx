import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import "./Button.css";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "inverted";
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
};

type ButtonAsButtonProps = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & {
    as?: "button";
  };

type ButtonAsAnchorProps = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className"> & {
    as: "a";
  };

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

function Button({
  variant = "primary",
  icon,
  className,
  children,
  as,
  ...rest
}: ButtonProps) {
  const classNames = ["button", `button--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {children}
      {icon ? <span className="button__icon">{icon}</span> : null}
    </>
  );

  if (as === "a") {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;

    return (
      <a className={classNames} {...anchorProps}>
        {content}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button className={classNames} {...buttonProps}>
      {content}
    </button>
  );
}

export default Button;