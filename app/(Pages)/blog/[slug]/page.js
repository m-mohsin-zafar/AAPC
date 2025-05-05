import Head from "next/head";
import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
import Topper from "./components/topper";
import "../../../../public/css/home.css";
import "../../../../public/css/blog-details.css";
import parse from 'html-react-parser'

// const BLOG_URL = "https://azark-blog-backend.onrender.com/api/posts/title/";
const BLOG_URL = "https://public-api.wordpress.com/rest/v1.1/sites/azarkblog.wordpress.com/posts/slug:$";
const fields = 'author,date,content,featured_image,title'



// IGNORE METADATA FOR NOW
export async function generateMetadata({ params }) {
  const ID = params["slug"];
  const res = await fetch(`${BLOG_URL}${ID}/?${fields}`);
  const json = await res.json();
  const post = json;
  const titleParsed = parse(post.title)

  return {
    title: "AAPC | " + titleParsed || "",
    description:
      "AAPC operates in seamless collaboration with the NYC Department of Buildings (DOB) and other pertinent entities throughout the architectural process demonstrating a meticulous commitment to not only adhere to regulations but also navigate them with precision when intervening in established spaces",
    keywords:
      post?.keywords || "Architecture, AAPC, Building, Design, Drafting",
    alternates: {
      canonical: `https://aapc.nyc/blog/${params.slug}`,
    },
  };
}

const BlogSingle = async ({ params }) => {
  // console.log('this is params', params)
  const ID = params['slug'];
  // console.log('test hello')

  let post;
  try {
    const res = await fetch(`${BLOG_URL}${ID}?fields=${fields}`);
    // console.log('res', res)
    // console.log('hi')
    const json = await res.json();
    post = json;
  } catch (e) {
    if (e.data) {
      return { status: e.status, data: e.data };
    }
  }

  const titleParsed = parse(post.title)
  const featuredPic = post.featured_image

  // change post content to jsx here?

  return (
    <>
      <head>
        <meta property="og:title" content={"AAPC | " + titleParsed} />
        <meta property="og:image" content={`${featuredPic}`} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"
        />
      </head>

      <div>
        <Navbar />
        <Topper post={post} />
        <div className="flex-container" style={{ position: "relative", borderTop: "none" }}>
          <div className="flex-item-left"></div>
          <div className="flex-item-right">
            <div
              id="the-text"
              className="about-text hotels"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BlogSingle;
