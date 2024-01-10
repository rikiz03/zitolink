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
        <Footer.Link className="px-4" href="#about">
          About
        </Footer.Link>
        <Footer.Link className="px-4" href="mailto:zitolink19@gmail.com">
          Licensing
        </Footer.Link>
        <Footer.Link className="px-4" href="mailto:zitolink19@gmail.com">
          Support
        </Footer.Link>
        <Footer.Link className="px-4" href="mailto:zitolink19@gmail.com">
          Contact
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
