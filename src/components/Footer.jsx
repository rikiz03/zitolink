'use client';

import { Footer } from 'flowbite-react';

export default function DefaultFooter() {
  const year = new Date().getFullYear();
  return (
    <Footer container>
      <Footer.Copyright
        by="Zitolink | All Rights Reserved"
        href="#"
        year={year}
      />
      <Footer.LinkGroup>
        <Footer.Link href="#">
          About
        </Footer.Link>
        <Footer.Link href="#">
          Privacy Policy
        </Footer.Link>
        <Footer.Link href="#">
          Licensing
        </Footer.Link>
        <Footer.Link href="#">
          Contact
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  )
}
