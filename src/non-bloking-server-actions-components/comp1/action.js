"use server";

import Output from "./output";

export default function ({ name }) {
  const messagePromise = new Promise((res) =>
    setTimeout(() => res("hello x " + name), 2000)
  );

  return <Output greetingPromise={messagePromise} />;
}
