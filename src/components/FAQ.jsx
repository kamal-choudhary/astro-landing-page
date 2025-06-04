import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question:
      "What's the Cheaper Home Batteries Program, and how does it help me?",
    answer:
      "This Australian government program starts July 1, 2025, and cuts about 30% off the cost of home solar batteries. It helps you store solar power to use later, lowering your electricity bills and supporting a more stable power grid.",
  },
  {
    question: "How much money will I save with the rebate?",
    answer:
      "In 2025, you get about $372 per kWh of battery storage, up to 50 kWh. For a 10 kWh battery, that's roughly $3,300 off after fees. The discount shrinks each year until the program ends in 2030. Don't turn on the battery before July 1, 2025, to qualify!",
  },
  {
    question:
      "Am I eligible to participate in the Cheaper Home Batteries Program?",
    answer:
      "To be eligible, you must install a solar battery system with a nominal capacity of 5 kWh to 100 kWh, paired with a new or existing solar photovoltaic (PV) system, on or after July 1, 2025. The system must be installed by an accredited installer under Solar Accreditation Australia (SAA) and meet state/territory electrical safety requirements.",
  },
  {
    question: "Is it safe to install a solar battery under this program?",
    answer:
      "Yes, safety is a priority. Installers must be accredited by Solar Accreditation Australia (SAA), and the system should be tested to confirm it can store and discharge energy safely. BatterySolarQuotesTM take the guesswork out of choosing accredited SAA accredited installers, ensuring safe and compliant battery installations.",
  },
  {
    question: "Can I use this rebate with other discounts or loans?",
    answer:
      'The federal government intends for the Cheaper Home Batteries Program to be compatible with existing state and territory schemes, potentially allowing "double-dipping" with other rebates or interest-free loans - meaning its never been cheaper to go solar!',
  },
  {
    question: "How do I get the rebate?",
    answer:
      "Your installer handles the rebate paperwork through the program's certificate system. Use a reputable quote comparison company like BatterySolarQuotesTM to compare quotes, and pick an accredited installer to beat the rush!",
  },
];

export default function FAQ() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Solar Battery Rebate FAQs
          </h2>
          <dl className="mt-16 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure
                key={faq.question}
                as="div"
                className="py-6 first:pt-0 last:pb-0"
              >
                <dt>
                  <DisclosureButton className="group flex w-full cursor-pointer items-start justify-between text-left text-gray-900">
                    <span className="text-base/7 font-semibold">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusIcon
                        aria-hidden="true"
                        className="size-6 group-data-open:hidden"
                      />
                      <MinusIcon
                        aria-hidden="true"
                        className="size-6 group-not-data-open:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
