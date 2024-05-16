/**
 * v0 by Vercel.
 * @see https://v0.dev/t/nYgCqejAuSE
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "@/components/ui/collapsible";

export default function Questions() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 grid gap-6 md:px-6">
        <div className="space-y-2">
          <h2 className="text-xl font-bold tracking-tighter sm:text-2xl">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed dark:text-gray-400">
            Have a question? Check out our FAQ. Can&apost find the answer
            you&aposre looking for? Contact our support team.
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Collapsible className="rounded-lg border border-gray-500 dark:border-gray-800">
              <CollapsibleTrigger className="flex items-center justify-between w-full p-4">
                <span className="text-base font-medium">
                  What payment methods do you accept?
                </span>
                <ChevronDownIcon className="w-4 h-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4">
                <p className="text-sm leading-loose md:text-base/relaxed dark:text-gray-400">
                  We accept the following payment methods: Visa, Mastercard,
                  American Express, and Discover.
                </p>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible className="rounded-lg border border-gray-500 dark:border-gray-800">
              <CollapsibleTrigger className="flex items-center justify-between w-full p-4">
                <span className="text-base font-medium">
                  Can I cancel my subscription at any time?
                </span>
                <ChevronDownIcon className="w-4 h-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4">
                <p className="text-sm leading-loose md:text-base/relaxed dark:text-gray-400">
                  Yes, you can cancel your subscription at any time. Once
                  canceled, you will still have access to your subscription
                  until the end of the current billing period.
                </p>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible className="rounded-lg border border-gray-500 dark:border-gray-800">
              <CollapsibleTrigger className="flex items-center justify-between w-full p-4">
                <span className="text-base font-medium">
                  Do you offer a free trial of your service?
                </span>
                <ChevronDownIcon className="w-4 h-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4">
                <p className="text-sm leading-loose md:text-base/relaxed dark:text-gray-400">
                  Yes, we offer a 14-day free trial of our service for all new
                  customers. No credit card is required to start the free trial.
                </p>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible className="rounded-lg border border-gray-500 dark:border-gray-800">
              <CollapsibleTrigger className="flex items-center justify-between w-full p-4">
                <span className="text-base font-medium">
                  How do I contact customer support?
                </span>
                <ChevronDownIcon className="w-4 h-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4">
                <p className="text-sm leading-loose md:text-base/relaxed dark:text-gray-400">
                  You can contact our customer support team by emailing
                  support@example.com. Our support hours are Monday to Friday, 9
                  am to 5 pm (EST).
                </p>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChevronDownIcon({ props }: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
