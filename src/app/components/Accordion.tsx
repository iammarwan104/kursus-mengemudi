"use client";
import { Accordion, Flowbite } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";

export default function Accordion() {
  const customTheme: CustomFlowbiteTheme = {
    accordion: {
      root: {
        base: "divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700",
        flush: {
          off: "rounded-lg border",
          on: "border-b",
        },
      },
      content: {
        base: "p-5 first:rounded-t-lg last:rounded-b-lg dark:bg-gray-900",
      },
      title: {
        arrow: {
          base: "h-6 w-6 shrink-0",
          open: {
            off: "",
            on: "rotate-180",
          },
        },
        base: "flex w-full items-center justify-between p-5 text-left font-medium text-gray-500 first:rounded-t-lg last:rounded-b-lg dark:text-gray-400",
        flush: {
          off: "hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800",
          on: "bg-transparent dark:bg-transparent",
        },
        heading: "",
        open: {
          off: "",
          on: "bg-gray-100 text-gray-900 dark:bg-green-800 dark:text-white",
        },
      },
    },
  };
  return (
    <>
      <Flowbite theme={{ theme: customTheme }}>
        <Accordion>
          <Accordion.Panel>
            <Accordion.Title>What is Flowbite?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out this guide to learn how to&nbsp;
                <a
                  href="https://flowbite.com/docs/getting-started/introduction/"
                  className="text-cyan-600 hover:underline dark:text-cyan-500">
                  get started&nbsp;
                </a>
                and start developing websites even faster with components on top
                of Tailwind CSS.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Is there a Figma file available?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is first conceptualized and designed using the Figma
                software so everything you see in the library has a design
                equivalent in our Figma file.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out the
                <a
                  href="https://flowbite.com/figma/"
                  className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Figma design system
                </a>
                based on the utility classes from Tailwind CSS and components
                from Flowbite.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              What are the differences between Flowbite and Tailwind UI?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The main difference is that the core components from Flowbite
                are open source under the MIT license, whereas Tailwind UI is a
                paid product. Another difference is that Flowbite relies on
                smaller and standalone components, whereas Tailwind UI offers
                sections of pages.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                However, we actually recommend using both Flowbite, Flowbite
                Pro, and even Tailwind UI as there is no technical reason
                stopping you from using the best of two worlds.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Learn more about these technologies:
              </p>
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li>
                  <a
                    href="https://flowbite.com/pro/"
                    className="text-cyan-600 hover:underline dark:text-cyan-500">
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    className="text-cyan-600 hover:underline dark:text-cyan-500">
                    Tailwind UI
                  </a>
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </Flowbite>
    </>
  );
}
