import { gql } from "@apollo/client";
import Link from "next/link";
import style from "../styles/header.module.css";

export default function Header({ siteTitle, siteDescription, menuItems }) {
  return (
    <header className={style.header}>
      <div className={`container ${style.container}`}>
        <Link href="/" className={style.brand}>
          <h2 className={style.siteTitle}>{siteTitle}</h2>
          <p className={style.siteDescription}>{siteDescription}</p>
        </Link>

        <nav className={style.nav}>
          <ul>
            {(Array.isArray(menuItems) ? menuItems : []).map((item) => {
              const getHref = (url) => {
                try {
                  const base = process.env.NEXT_PUBLIC_SITE_URL || "/";
                  return new URL(url, base).pathname;
                } catch (e) {
                  return url;
                }
              };

              return (
                <li key={item.url}>
                  <Link href={getHref(item.url)}>{item.label}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

Header.fragments = {
  entry: gql`
    fragment HeaderFragment on RootQuery {
      generalSettings {
        title
        description
      }
      menus(where: { location: PRIMARY }) {
        nodes {
          menuItems {
            nodes {
              label
              url
            }
          }
        }
      }
    }
  `,
};
