interface Person {
  name: string;
}

type SingleType<T> = T extends any[] ? number[][number] : T;

type Type1 = number[][number];

interface Person {
  name: string;
}

type CustomArray = {
  [index: number]: string;
};

const items: CustomArray = ["1", "2", "3"];

export default function Home() {
  return <div>Hello World</div>;
}
