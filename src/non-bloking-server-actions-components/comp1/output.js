"use client";

import Counter from "../../pure-client-components/counter";
import Wrapper from "../../wrapper";

export default function ({ greetingPromise }) {
  return (
    <>
      <div>
        <Wrapper>{greetingPromise}</Wrapper>
      </div>
      <Counter />
    </>
  );
}
