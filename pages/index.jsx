import NonDocsLayout from "../components/Layout/Non-Docs";
import Loading from "../components/Loading/Loading";
import React, { useState, useCallback, useEffect } from "react";
import useSWR from "swr";
import Link from "next/link";
import css from "../styles/Home.module.css";

export default function Home() {
  return (
    <NonDocsLayout>
      <article className="sectionsContainer">
        <h1 className={css["page-title"]}>Docenter</h1>
        <p className={css["para-text"]}>
          The Docenter is a service that aims to centralise the documentation access in Hackney. We have multiple
          documentation sources that are scattered across multiple locations and websites. This service aims to remedy
          this problem by providing links to other documentation sources, and centralising the API documentation.
        </p>
        <br />

        <h2 className={css["section-title"]}>Links to Documentation</h2>
        <p>Click any of the links bellow to go to docenter or other documentation sources. </p>
        <ul className={css["doc-box-links"]} >
          <li className={css["doc-source-link-item"]}>
            <Link href={"https://lbhackney-it.github.io/API-Playbook/"}>
              <a>Visit the Hackney's API Playbook</a>
            </Link>
          </li>
          <li className={css["doc-source-link-item"]}>
            <Link href={"https://github.com/LBHackney-IT/lbh-base-api/wiki"}>
              <a>Read the Base API template's Wiki</a>
            </Link>
          </li>
          <li className={css["doc-source-link-item"]}>
            <Link href={"/api-docs"}>
              <a>View the API specifications</a>
            </Link>
          </li>
        </ul>
      </article>
    </NonDocsLayout>
  );
}
