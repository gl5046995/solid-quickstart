import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
<!--       <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a> -->
      <Counter />
      <p>
        Visit{" "}
        <a href="https://index.html" target="_blank">
          slogin
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
