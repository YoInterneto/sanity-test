import { useLoaderData } from "@remix-run/react";
import { getPage } from "~/utils/sanity";

export const loader = async ({ params }) => {
  let result;

  if(params.slug && params.slug !== ''){
    result = await getPage(params.slug);
    //result = params.slug;
  }
  else{
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
      Page
    </section>
  );
}
