import React from 'react'
import MainBlog from './MainBlog';

export const metadata = {
    title: "AAPC | Blog Posts",
    description:
        "AAPC operates in seamless collaboration with the NYC Department of Buildings (DOB) and other pertinent entities throughout the architectural process demonstrating a meticulous commitment to not only adhere to regulations but also navigate them with precision when intervening in established spaces",
    keywords: "Architecture, AAPC, Building, Design, Drafting",
    alternates: {
        canonical: "https://aapc.nyc/blog",
    },
};
function page() {
    return (
        <div>
            <MainBlog />
        </div>
    )
}

export default page