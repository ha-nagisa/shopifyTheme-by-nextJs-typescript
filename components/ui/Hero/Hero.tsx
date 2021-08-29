import { FC } from "react";
import s from "./Hero.module.css";
import Link from "next/link";
import { Container } from "@components/ui";

interface Props {
  headline: string;
  description: string;
}

const Hero: FC<Props> = ({ headline, description }) => {
  return (
    <div className="bg-black">
      <Container>
        <div className={s.root}>
          <h2 className={s.headline}>{headline}</h2>
          <div className="flex-1 max-w-4xl">
            <p className={s.description}>{description}</p>
            <a
              href="https://nagisa-profile.com/works/shopify-theme"
              className={s.link}
            >
              もっと見る
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
