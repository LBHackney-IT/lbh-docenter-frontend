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
        <p>
          The Docenter is a service that aims to centralise the documentation access in Hackney. We have multiple
          documentation sources that are scattered across multiple locations and websites. This service aims to remedy
          this problem by providing links to other documentation sources, and centralising the API documentation.
        </p>
        <br />

        <ul>
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
