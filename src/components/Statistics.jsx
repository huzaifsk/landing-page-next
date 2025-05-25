import { WobbleCard } from "./ui/wobble-card";

export default function Statistics() {
  return (
    <section
      id="service"
      className="w-full h-full flex items-center justify-center bg-black py-36"
    >
      <div className="flex flex-col items-center justify-center w-full max-w-7xl px-4 space-y-8">
        {/* Section Title */}
        <div className="text-center py-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Our Services
          </h1>
          <p className="mt-2 text-neutral-400 text-base md:text-lg">
            We offer full-stack digital solutions designed to elevate your
            business and empower your product.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
          {/* ✅ Business Automation - Larger (2 columns on large screens) */}
          <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-green-800 min-h-[500px] lg:min-h-[300px]">
            <div className="max-w-sm">
              <h2 className="max-w-sm text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Business Automation
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                Streamline your operations with intelligent automation
                solutions. Whether it's CRM workflows, task automation, or
                AI-powered decision systems, we help businesses save time and
                scale faster.
              </p>
            </div>
          </WobbleCard>

          {/* ✅ UI/UX Design - Smaller (1 column on large screens) */}
          <WobbleCard containerClassName="col-span-1 bg-pink-800 min-h-[500px] lg:min-h-[300px]">
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                UI/UX Design
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                We craft visually stunning and user-centric designs. From
                wireframes to high-fidelity prototypes, we ensure your product
                is intuitive, engaging, and optimized for conversion.
              </p>
            </div>
          </WobbleCard>

          {/* ✅ Mobile App Development */}
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-indigo-800">
            <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Mobile App Development
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Launch high-performance mobile apps on iOS and Android. We
              specialize in cross-platform solutions that deliver seamless
              experiences and native-like performance.
            </p>
          </WobbleCard>

          {/* ✅ Web Development */}
          <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Web Development
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                We build fast, secure, and scalable websites using the latest
                web technologies. From static landing pages to full-stack
                applications, we turn your vision into reality.
              </p>
            </div>
          </WobbleCard>
        </div>
      </div>
    </section>
  );
}
