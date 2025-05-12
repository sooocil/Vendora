import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const VendoraFooter = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
          <div className="flex items-center flex-col justify-center mb-4 md:mb-0">
            <div className="font-bold text-teal-400 text-6xl   mr-2">
              Véndora
            </div>
            <span className="text-gray-400 text-sm">
              This website was made with Vendora. Create yours today!
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center ">
            <div>
              <h3 className="text-xl font-bold mb-2">
                Launch your e-commerce in minutes
              </h3>
              <p className="text-gray-300 mb-4">
                This website is powered by{" "}
                <strong className="text-teal-400 text-2xl">Véndora</strong>.
                Ready to create your own online store?
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-end">
              <Button className="bg-white text-black hover:bg-gray-200">
                Get Started Now
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-800 my-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Integrations
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Partners
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-800 my-8" />

        <div className="flex flex-col  md:flex-row justify-evenly items-center">
          <div className="flex space-x-4 justify-evenly gap-20">
            <a href="#" className="text-gray-300 hover:text-white">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm mt-8">
          © {new Date().getFullYear()} Vendora. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default VendoraFooter;
