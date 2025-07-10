import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    quickLinks: [
      { name: "Home", href: "#" },
      { name: "Browse Cars", href: "/cars" },
      { name: "List Your Car", href: "/cars" },
    ],
    resources: [
      { name: "Help Center", href: "https://www.abhaybansal.in" },
      { name: "Terms of Service", href: "https://www.abhaybansal.in" },
      { name: "Privacy Policy", href: "https://www.abhaybansal.in" },
    ],
    contact: [
      { name: "CHANDIGARH UNIVERSITY", href: "https://www.abhaybansal.in" },
      { name: "Mohali, Punjab", href: "https://www.abhaybansal.in" },
      { name: "+91 79733446163", href: "tel:+917973446163" },
      {
        name: "bansalabhay00@gmail.com",
        href: "mailto:bansalabhay00@gmail.com",
      },
    ],
  };

  const socialMedia = [
    {
      icon: assets.facebook_logo,
      alt: "Github",
      href: "https://github.com/Targter",
    },
    {
      icon: assets.instagram_logo,
      alt: "Instagram",
      href: "https://www.instagram.com/_abhay__bansal_/",
    },
    {
      icon: assets.twitter_logo,
      alt: "Twitter",
      href: "https://x.com/abcheckk/",
    },
    {
      icon: assets.gmail_logo,
      alt: "Email",
      href: "mailto:bansalabhay00@gmail.com",
    },
  ];

  return (
    <footer className="pb-8 px-6 md:px-16 lg:px-24 xl:px-32 max-h-[400px] border-t-2 pt-8 ">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto "
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-200 text-center md:text-left">
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <img
              src={assets.Logo}
              alt="Premium Car Rentals"
              className="h-21 mb-4"
            />
            <p className="text-gray-600 mb-6 max-w-xs">
              Premium car rental service with a wide selection of luxury and
              everyday vehicles for all your driving needs.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              {socialMedia.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all"
                >
                  <img src={social.icon} alt={social.alt} className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links Sections */}
          {Object.entries(footerLinks).map(([section, links], index) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center md:items-start"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4 uppercase">
                {section.split(/(?=[A-Z])/).join(" ")}
              </h3>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 text-gray-500 mb-11"
        >
          <p>© {currentYear} Luxury Car Rentals. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Sitemap
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
