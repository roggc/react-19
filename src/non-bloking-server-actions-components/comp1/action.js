"use server";

import Comp1 from "./output";

export default function comp1({ name }) {
  const messagePromise = new Promise((res) =>
    setTimeout(() => res("hello x " + name), 2000)
  );

  return <Comp1 greetingPromise={messagePromise} />;
}
