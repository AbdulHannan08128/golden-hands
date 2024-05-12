import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/logo/LOGO-W.png"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none rounded-2xl"
              />
              <Image
                src="/images/logo/LOGO-B.png"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none rounded-2xl"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[600px]">
              <div className="mb-9">
               
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  <span className="text-5xl font-bold text-black dark:text-white mb-6 block">About Us</span>
                Welcome to Golden Hands Clinic, your trusted destination for comprehensive healthcare services in Beehama, Ganderbal. At Golden Hands, we pride ourselves on providing top-notch medical care in general medicine and surgery, catering to the diverse needs of our community. Our dedicated team of experienced healthcare professionals is committed to delivering personalized treatment plans tailored to each patient&apos;s unique needs, ensuring the highest standard of care and comfort. With a focus on excellence and compassion, Golden Hands Clinic is here to guide you on your journey towards optimal health and well-being.
                </p>
              </div>
             
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
