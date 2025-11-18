import React from "react";
import Card from "../../components/Card";
import { callouts } from "../../data";

// const data = {
//   name: "Desk and Office",
//   description: "Work from home accessories",
//   imageSrc:
//     "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-01.jpg",
//   imageAlt:
//     "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
//   href: "#",
// };

export default function index() {
  return (
    <div className="grid grid-cols-3 gap-10 p-10">
      {callouts.map((item) => {
        return <Card props={item} />;
      })}
    </div>
  );
}
