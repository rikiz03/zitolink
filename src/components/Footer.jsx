"use client";

import { Footer } from "flowbite-react";

export default function DefaultFooter() {
  const year = new Date().getFullYear();
  return (
    <Footer container className="flex flex-col items-center py-6">
      <Footer.Copyright
        className="md:mb-4"
        by="Zitolink    |    All Rights Reserved"
        href="#"
        year={year}
      />
      <Footer.LinkGroup className="mt-6">
        <Footer.Link className="px-4" href="#">
          About
        </Footer.Link>
        <Footer.Link className="px-4" href="#">
          Licensing
        </Footer.Link>
        <Footer.Link className="px-4" href="#">
          Support
        </Footer.Link>
        <Footer.Link className="px-4" href="#">
          Contact
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
