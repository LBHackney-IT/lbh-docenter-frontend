import NonDocsLayout from "../components/Layout/Non-Docs";
import Loading from "../components/Loading/Loading";
import React, { useState, useCallback, useEffect } from "react";
import useSWR from "swr";
import Link from "next/link";

export default function Home() {
  return (
    <NonDocsLayout>
      <article className="sectionsContainer">
        <p>
          Description text of this service. Description text of this service. Description text of this service.
          Description text of this service. Description text of this service. Description text of this service.{" "}
          Description text of this service. Description text of this service. Description text of this service.{" "}
        </p>
        <br />

        <Link href={"/api-docs"}>
          <a>API Docs, well the link could be fancier</a>
        </Link>
      </article>
    </NonDocsLayout>
  );
}
