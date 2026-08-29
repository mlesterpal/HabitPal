import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type BackLinkProps = {
  to: string;
  children: ReactNode;
};

const BackLink = ({ to, children }: BackLinkProps) => {
  return (
    <Link
      to={to}
      style={{
        fontSize: 14,
        color: "#6B7AA8",
        display: "inline-block",
        marginBottom: 16,
      }}
    >
      {children}
    </Link>
  );
};

export default BackLink;
