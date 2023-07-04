import { useLoaderData } from "@remix-run/react";
import { getPage } from "~/utils/sanity";

import components from "../utils/components";
import React from "react";

export const loader = async ({ params }) => {
  let result;

  if (params.slug && params.slug !== '') {
    result = await getPage(params.slug);
    //result = params.slug;
  }
  else {
    result = await getPosts();
  }

  return result;
};

export default function PostRoute() {
  const page = useLoaderData();
  console.log(page)

  // const SpecificStory = components[props.storyType];
  // return <SpecificStory story={props.story} />;

  return (
    <section className="page">
      {
        page.body.map((component) => {
          return React.createElement(components[component._type], {
            key: component._key,
            component
          });
        })
      }
    </section>
  );
}
