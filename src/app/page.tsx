import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="font-sans items-center justify-items-center p-20 pb-20 gap-16 text-center max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-16">What makes us different <br /> makes them stronger</h1>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col gap-6 w-full lg:w-72 min-w-0">
            <div className="flex items-start gap-3">
              <Image
                src="/icon1.svg"
                alt="Feature icon"
                width={46}
                height={46}
                className="flex-shrink-0"
              />
              <div className="text-left min-w-0">
                <span className="text-lg font-bold block pb-1">Real Food</span>
                <p className="text-sm">Wholesome recipes for dogs with real meat and veggies.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Image
                src="/icon2.svg"
                alt="Feature icon"
                width={46}
                height={46}
                className="flex-shrink-0"
              />
              <div className="text-left min-w-0">
                <span className="text-lg font-bold block pb-1">Premium Ingredient</span>
                <p className="text-sm">Elevating pet care with unmatched safety and quality.</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center flex-shrink-0">
            <Image
              src="/heroImg.png"
              alt="Hero image"
              width={350}
              height={350}
              className="rounded-lg max-w-full h-auto"
            />
          </div>
          <div className="flex flex-col gap-6 w-full lg:w-72 min-w-0">
            <div className="flex items-start gap-3">
              <Image
                src="/icon3.svg"
                alt="Feature icon"
                width={46}
                height={46}
                className="flex-shrink-0"
              />
              <div className="text-left min-w-0">
                <span className="text-lg font-bold block pb-1">Made Fresh</span>
                <p className="text-sm">We prioritize maintaining the integrity of whole foods and nutrition.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Image
                src="/icon4.svg"
                alt="Feature icon"
                width={46}
                height={46}
                className="flex-shrink-0"
              />
              <div className="text-left min-w-0">
                <span className="text-lg font-bold block pb-1">Vet Developed</span>
                <p className="text-sm">We raise the bar for dog nutrition, surpassing industry expectations.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-full">
          <button className="mt-12 bg-[#EE6F4B] hover:bg-[#d85a3f] text-white font-bold py-3 px-24 rounded-sm transition-colors cursor-pointer">
            Get your dog&apos;s healthy meal today!
          </button>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2">
              <Image
                src="/icon5.svg"
                alt="Money back guarantee"
                width={14}
                height={14}
              />
              <span className="text-[13px] text-gray-600">30-day money back guarantee</span>
            </div>
            <Image
              src="/payments.svg"
              alt="Payment methods"
              width={220}
              height={40}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#F8F8F8] py-12 px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Nutrition is the foundation for longer, healthier lives in dogs.
            </h2>
            <p className="text-[16px] text-gray-600 leading-relaxed">
              Invest in your dog&apos;s future with our scientifically formulated superfood-powered supplements. Give them the nutrition they deserve and watch them thrive with vitality, energy, and the joy of a longer, healthier life.
            </p>

            <div className="grid grid-cols-1 gap-6">
              <span className="text-md font-bold text-gray-900">Key Points:</span>
              <div className="flex items-center gap-4">
                <span className="text-xl font-bold text-[#EE6F4B] pr-4">97%</span>
                <span className="text-sm text-gray-600">Dogs choose our dog food over leading brands because of its real functional ingredients and delicious flavor.</span>
              </div>
              <div className="border-t border-[#E3E3E8] pt-6">
                <div className="flex items-center gap-4">
                  <span className="text-xl font-bold text-[#EE6F4B] pr-4">84%</span>
                  <span className="text-sm text-gray-600">Our dog food provides superior nutrition and a patented probiotic for optimal nutrient absorption.</span>
                </div>
              </div>
              <div className="border-t border-[#E3E3E8] pt-6">
                <div className="flex items-center gap-4">
                  <span className="text-xl font-bold text-[#EE6F4B] pr-4">92%</span>
                  <span className="text-sm text-gray-600">Our dog food&apos;s high protein and fat digestibility contribute to ideal stool quality.</span>
                </div>
              </div>
            </div>

            <button className="bg-[#EE6F4B] hover:bg-[#d85a3f] text-white font-bold py-3 px-8 rounded-sm transition-colors cursor-pointer">
              Give your furry friend the gift of wholesome nutrition
            </button>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/section2Img.png"
              alt="Section image"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="py-12 px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/section3Img.png"
              alt="Section image"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Improve overall gastrointestinal health for better nutrient absorption
            </h2>
            <p className="text-[16px] text-gray-600 leading-relaxed">
              Through rigorous scientific studies and consultations with veterinarians, we have created a breakthrough formula exclusively tailored to combat the health challenges prevalent in dogs. 
              A staggering 91% of our customers have reported significant improvements in their dogs&apos; health after incorporating our product into their diet.
            </p>
          </div>
        </div>
      </div>

    <div className="py-12 px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Prebiotics nourish the beneficial gut bacteria, supporting digestive health
          </h2>
          <p className="text-[16px] text-gray-600 leading-relaxed">
            Our dog food formula contains carefully selected prebiotics that work in harmony with the gut microbiota, providing the necessary nutrients for the growth and maintenance of beneficial bacteria, ultimately supporting digestive health.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Image
            src="/section4Img.png"
            alt="Section image"
            width={500}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>

    </div>
  );
}
