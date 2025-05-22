import { WobbleCard } from "./ui/wobble-card";

export default function Statistics() {
  return (
    <section
      id="stats"
      className="w-full h-full flex items-center justify-center bg-black py-36"
    >
      <div className="flex flex-col items-center justify-center w-full max-w-7xl px-4 space-y-8">
        {/* Section Title */}
        <div className="text-center py-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Our Impact in Numbers
          </h1>
          <p className="mt-2 text-neutral-400 text-base md:text-lg">
            Trusted by clients across the globe — here's what we've achieved
            together.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                120+ Projects Successfully Delivered
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                We help startups and enterprises bring their ideas to life with
                tailored digital solutions. From concept to deployment, we’ve
                got you covered.
              </p>
            </div>
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-indigo-800">
            <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              75+ Happy Clients Worldwide
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Trusted by businesses across 10+ countries. Our commitment to
              quality and support ensures long-lasting client relationships.
            </p>
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                5+ Years of Industry Experience
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                Our team combines design, development, and strategy to deliver
                innovative digital products that scale.
              </p>
            </div>
          </WobbleCard>
        </div>
      </div>
    </section>
  );
}
