import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Email from "./icon/Email";
import FacebookIcon from "./icon/Facebook";
import Instagram from "./icon/Instagram";
import LinkedinIcon from "./icon/Linkedin";
import Phone from "./icon/Phone";
import TwitterIcon from "./icon/Twitter";
import Whatsapp from "./icon/Whatsapp";

const quicklinks = [
  { text: "Ship A Parcel" },
  { text: "Track Your Parcel" },
  { text: "Sign in" },
  { text: "Help Center" },
];

const socialAcct = [
  {
    icon: <FacebookIcon />,
    href: "https://www.facebook.com/yheancarh_logistics",
  },
  { icon: <TwitterIcon />, href: "https://twitter.com/yheancarh_logistics" },
  {
    icon: <Instagram />,
    href: "https://www.instagram.com/yheancarh_logistics/",
  },
  {
    icon: <LinkedinIcon />,
    href: "https://www.linkedin.com/in/yheancarh_logistics",
  },
];

const contacts = [
  {
    icon: <Whatsapp />,
    href: "https://wa.me/09034469703",
    text: "09090646602",
  },
  {
    icon: <Email />,
    href: "mailto:oladipoolayinka7@gmail.com",
    text: "oladipoolayinka7@gmail.com",
  },
  { icon: <Phone />, href: "tel:09090646602", text: "09090646602" },
];

const Footer: FC = () => {
  return (
    <footer className="py-8 ">
      <div className="max-w-screen-lg container p-5 md:p-8 mx-auto md:flex md:flex-wrap md:justify-around">
        <div className="mb-5 lg:mb-0 w-full sm:w-1/2 lg:w-1/4">
          <div className="w-60">
            <div className="mb-3">
              <p className="font-bold text-xl leading-7">Yinka Does Delivery</p>
              <p className="text-sm capitalize text-pry-light">
                19, Adenike Crescent, Off Quarry Rd, Oniyanrin, Agbeloba,
                Abeokuta., Nigeria
              </p>
            </div>
            <Link href="https://logistix.africa">
              <Image
                alt="logistix logo"
                src="/logistix-logo.jpg"
                height={61}
                width={128}
              />
            </Link>
          </div>
        </div>
        <div className="mb-5 lg:mb-0 w-full sm:w-1/2 lg:w-1/4">
          <p className="fs-16-24">Quick Links</p>
          <ul>
            {quicklinks.map((link, index) => (
              <li key={`${link.text}-${index}`} className="my-3 text-sm">
                <Link href="/">{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-5 md:mb-0 w-full sm:w-1/2 lg:w-1/4">
          <p className="fs-16-24">Social Accounts</p>
          <ul>
            {socialAcct.map((acct, index) => (
              <li key={`${acct.href}-${index}`} className="my-3">
                <Link className=" align-center" href={acct.href}>
                  {acct.icon}
                  <span className="ml-2 text-sm">yheancarh_logistics</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-5 md:mb-0 w-full sm:w-1/2 lg:w-1/4">
          <p className="fs-16-24">Contact</p>
          <ul>
            {contacts.map((contact, index) => (
              <li key={`${contact}-${index}`} className="my-3">
                <Link className="align-center" href={contact.href}>
                  {contact.icon}
                  <span className="ml-3 text-sm">{contact.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
