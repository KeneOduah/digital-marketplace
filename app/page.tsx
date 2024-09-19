
import { ProductRow } from "./components/ProductRow";
export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
      <div className="max-w-3xl mx-auto text-2xl sm:text-5xl lg:text-6xl font-semibold text-center">
        <h1>Find the best Tailwind</h1>
        <h1>Templates & Icons</h1>
        <p className="lg: text-lg text-muted-foreground mx-auto mt-5 w-[90%] font-normal text-base">
           Discover a curated collection of premium Tailwind CSS icons and templates designed
           to elevate your web projects.
        </p>
      </div>
      <ProductRow category="newest" />
      <ProductRow category="templates" />
      <ProductRow category="icons" />
      <ProductRow category="uikits" />
    </section>
  );
}
