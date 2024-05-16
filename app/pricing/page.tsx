import Image from "next/image";

const monthFeatures = [
  "Create your own custom boxes",
  "Get meal recipes",
  "Get free shipping",
];
const quarterFeatures = [
  "Create your own custom boxes",
  "Get meal recipes",
  "Get free shipping",
];
const yearFeatures = [
  "Create your own custom boxes",
  "Get meal recipes",
  "Get free shipping",
  "Suggest recipes on our blog",
  "Get custom weight loss program",
];

export default function Pricing() {
  return (
    <div className="bg-gray-900 bg-opacity-0">
      <div className="px-6 pt-12 lg:px-8 lg:pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-semibold leading-6 text-black">
            Pricing
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-gray-800 md:text-3xl">
            The right price for you, whoever you are
          </p>
          <p className="mx-auto mt-3 max-w-4xl text-lg text-black sm:mt-5 sm:text-xl">
            Whether you are just getting started or you are looking to stay with
            us, we have the right plan for you.
          </p>
        </div>
      </div>
      <div className="mt-16 bg-white bg-opacity-0 pb-12 lg:mt-20 lg:pb-20">
        <div className="relative z-0">
          <div className="absolute inset-0 h-5/6 bg-gray-900 bg-opacity-0 lg:h-2/3" />
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-7">
              <div className="mx-auto max-w-md lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:mx-0 lg:max-w-none">
                <div className="flex h-full flex-col overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-l-lg">
                  <div className="flex flex-1 flex-col">
                    <div className="bg-white  px-6 py-10">
                      <div>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="flex items-start px-3 text-6xl md:text-5xl tracking-tight text-gray-900">
                            <span className="mr-2 mt-2 text-3xl font-medium tracking-tight">
                              $
                            </span>
                            <span className="font-bold">19</span>
                          </span>
                          <span className="text-2xl md:text-lg font-medium text-gray-500">
                            /month
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between border-t-2 border-gray-100 bg-gray-50 p-6 sm:p-10 lg:p-6 xl:p-10">
                      <ul role="list" className="space-y-4">
                        {monthFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <Image
                                className="flex-shrink-0 text-green-500"
                                aria-hidden="true"
                                src="/myCheckIcon.svg"
                                alt="check icon"
                                height={24}
                                width={24}
                              />
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                          <a
                            href="#"
                            className="block w-full rounded-lg border border-transparent bg-white px-6 py-3 text-center text-base font-medium text-indigo-600 hover:bg-gray-50"
                            aria-describedby="tier-hobby"
                          >
                            Start your trial
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-10 max-w-lg lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4 lg:mx-0 lg:mt-0 lg:max-w-none">
                <div className="relative z-10 rounded-lg shadow-xl">
                  <div
                    className="pointer-events-none absolute inset-0 rounded-lg border-2 border-indigo-600"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 top-0 translate-y-px transform">
                    <div className="flex -translate-y-1/2 transform justify-center">
                      <span className="inline-flex rounded-full bg-indigo-600 px-4 py-1 text-base font-semibold text-white">
                        Best Deal
                      </span>
                    </div>
                  </div>
                  <div className="rounded-t-lg bg-white px-6 pb-10 pt-12">
                    <div>
                      <div className="mt-4 flex items-center justify-center">
                        <span className="flex items-start px-3 text-8xl md:text-6xl tracking-tight text-gray-900 sm:text-6xl">
                          <span className="mr-2 mt-2 text-3xl font-medium tracking-tight">
                            $
                          </span>
                          <span className="font-bold">99</span>
                        </span>
                        <span className="text-2xl font-medium text-gray-500">
                          /year
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-b-lg border-t-2 border-gray-100 bg-gray-50 px-6 pb-8 pt-10 sm:px-10 sm:py-10">
                    <ul role="list" className="space-y-4">
                      {yearFeatures.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <Image
                              className="flex-shrink-0 text-green-500"
                              aria-hidden="true"
                              src="/myCheckIcon"
                              alt="check icon"
                              height={24}
                              width={24}
                            />
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-10">
                      <div className="rounded-lg shadow-md">
                        <a
                          href="#"
                          className="block w-full rounded-lg border border-transparent bg-indigo-600 px-6 py-4 text-center text-xl font-medium leading-6 text-white hover:bg-indigo-700"
                          aria-describedby="tier-growth"
                        >
                          Start your trial
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-10 max-w-md lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3 lg:m-0 lg:max-w-none">
                <div className="flex h-full flex-col overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-r-lg">
                  <div className="flex flex-1 flex-col">
                    <div className="bg-white px-6 py-10">
                      <div>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="flex items-start px-3 text-6xl md:text-5xl tracking-tight text-gray-900">
                            <span className="mr-2 mt-2 text-3xl font-medium tracking-tight">
                              $
                            </span>
                            <span className="font-bold">49</span>
                          </span>
                          <span className="text-2xl md:text-lg font-medium text-gray-500">
                            /quarter
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between border-t-2 border-gray-100 bg-gray-50 p-6 sm:p-10 lg:p-6 xl:p-10">
                      <ul role="list" className="space-y-4">
                        {quarterFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <Image
                                className="flex-shrink-0 text-green-500"
                                aria-hidden="true"
                                src="/myCheckIcon"
                                alt="check icon"
                                height={24}
                                width={24}
                              />
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                          <a
                            href="#"
                            className="block w-full rounded-lg border border-transparent bg-white px-6 py-3 text-center text-base font-medium text-indigo-600 hover:bg-gray-50"
                            aria-describedby="tier-scale"
                          >
                            Start your trial
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
