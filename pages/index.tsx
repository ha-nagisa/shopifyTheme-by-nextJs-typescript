import type { InferGetStaticPropsType } from "next";
import { getAllProducts } from "@framework/product";
import { getConfig } from "@framework/api/config";
import { Layout } from "@components/common";
import { ProductCard } from "@components/product";
import { Grid, Hero, Marquee } from "@components/ui";
import Image from "next/image";

export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config);

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <section>
        <div className="max-h-750px hidden md:flex items-center justify-center overflow-hidden">
          <Image width={1880} height={1004} src="/images/recycling.jpg" />
        </div>
        <div className="max-h-750px md:hidden flex items-center justify-center overflow-hidden">
          <Image width={800} height={778} src="/images/recycling-sm.jpg" />
        </div>
      </section>
      <section className="px-6 pb-7">
        <h2 className="text-center text-2xl font-bold pt-10 pb-8">
          すべての商品
        </h2>
        <Grid>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Grid>
        <Hero
          headline="About　ReckSHOP"
          description="自分の家で、使っていなかったりあまり使わなくなったものをこのECサイトで売っていこうと考えています。もし気になるものがあればぜひ検討していただけると幸いです。現在は、テスト購入ができる状態で実際には購入できません。"
        />
      </section>
    </>
  );
}

Home.Layout = Layout;
