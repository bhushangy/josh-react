import { getNavLinks } from "@/helpers/web-base-helpers";
import Link from "next/link";
import { cache } from "react";

const cachedNavLinks = cache(getNavLinks);

async function NavLinks({ header }) {
  let navLinks = await cachedNavLinks();

  // Only show the first 4 links in the header.
  navLinks = header ? navLinks.slice(0, 4) : navLinks;

  return (
    <>
      {navLinks.map(({ slug, label, href, type }) => (
        <li key={slug}>
          <Link href={href} className={header ? `header-nav-link ${type}` : ""}>
            {label}
          </Link>
        </li>
      ))}
    </>
  );
}

export default NavLinks;
