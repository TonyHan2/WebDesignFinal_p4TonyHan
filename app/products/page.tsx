"use client";

import { Card, CardHeader, CardBody } from "@heroui/card";
import { addToast } from "@heroui/toast";
import { Accordion, AccordionItem } from "@heroui/react";
import { Image } from "@heroui/image";

import { title } from "@/components/primitives";

export default function PricingPage() {
  const thisDoesNothingToast = () => {
    addToast({
      title: "Hey!",
      description:
        "This button does nothing. But you can make it do something!",
      color: "danger",
    });
  };

  return (
    <div>
      <h1 className={title()}>Products</h1>

      <p>Pick from a range of quality products:</p>

      <section className="mt-20">
        {/*<h2 className="text-center text-4xl font-bold">Example Plans</h2>*/}
        <div className="flex justify-center gap-8 mt-20">
          {/* plan 1 */}
          <Card className="p-6 w-1/3">
            <CardHeader>
              <div className="text-3xl text-center w-full font-extrabold text-secondary">
                Portal Gun {/*<span className="text-sm">/mo</span>*/}
              </div>
            </CardHeader>
            <CardBody>
              <Image
                alt="img1"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOat7qpRXNKjoyHphaA32xF8jQrJgX4JBc6lMh5I9LPw&s=10"
                width={600}
              />
              <br />
              <ul className="list-disc pl-5 text-xl">
                <li>Instant Transmission</li>
                <li>Long Distances</li>
                <li>Fun Colors</li>
                <li>Moon Dust Included</li>
              </ul>
            </CardBody>
            {/* 
            <CardFooter className="justify-center">
              <Button
                color="secondary"
                radius="full"
                onPress={() => {
                  thisDoesNothingToast();
                }}
              >
                Sign Up
              </Button>
            </CardFooter>
            */}
          </Card>

          {/* plan 2 */}
          <Card className="p-6 w-1/3">
            <CardHeader>
              <div className="text-3xl text-center w-full font-extrabold text-secondary">
                Master Sword {/*<span className="text-sm">/mo</span>*/}
              </div>
            </CardHeader>
            <CardBody>
              <Image
                alt="img2"
                src="data:image/jpeg;base64,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"
                width={600}
              />
              <br />
              <ul className="list-disc pl-5 text-xl">
                <li>Repels Evil</li>
                <li>Seals Darkness</li>
                <li>Breaks Magical Barriers</li>
                <li>Attack at a Safe Range</li>
              </ul>
            </CardBody>
            {/* 
            <CardFooter className="justify-center">
              <Button
                color="secondary"
                radius="full"
                onPress={() => {
                  thisDoesNothingToast();
                }}
              >
                Sign Up
              </Button>
            </CardFooter>
            */}
          </Card>

          {/* plan 3 */}
          <Card className="p-6 w-1/3">
            <CardHeader>
              <div className="text-3xl text-center w-full font-extrabold text-secondary">
                Cardboard Box {/*<span className="text-sm">/mo</span>*/}
              </div>
            </CardHeader>
            <CardBody>
              <Image
                alt="img3"
                src="https://static.wikia.nocookie.net/metalgear/images/7/7c/THEBOX.jpg/revision/latest?cb=20050831142709"
                width={600}
              />
              <br />
              <ul className="list-disc pl-5 text-xl">
                <li>Unrivled Stealth</li>
                <li>Cost Effective</li>
                <li>Recyclable</li>
                <li>Bullet Proof (???)</li>
              </ul>
            </CardBody>
            {/* 
            <CardFooter className="justify-center">
              <Button
                color="secondary"
                radius="full"
                onPress={() => {
                  thisDoesNothingToast();
                }}
              >
                Sign Up
              </Button>
            </CardFooter>
            */}
          </Card>
        </div>
      </section>

      <section className="my-40">
        <h2 className="text-center text-4xl font-bold">FAQ</h2>
        <Accordion>
          <AccordionItem
            key={1}
            title="What if I try to get something refunded?"
          >
            You&apos;d be the first!
          </AccordionItem>
          <AccordionItem key={2} title="Future Plans?">
            We have planned to release a new model of Up-n-Atomizer for many
            years, but have experienced significant delays.
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
