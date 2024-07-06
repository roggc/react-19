"use client";

export default function NoBlokingAction({ children, ...props }) {
  return children(props);
}
