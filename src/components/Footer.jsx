import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid gap-6 md:grid-cols-3 text-sm">
        {/* Brand */}
        <div>
          <h3 className="text-base font-semibold text-slate-900">Veridia.io</h3>
          <p className="mt-1 text-slate-600 leading-relaxed text-xs">
            We design, develop, and deliver reliable end-to-end tech solutions.
          </p>
        </div>

        {/* Quick Links + Contact */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide">
              Links
            </h4>
            <ul className="mt-1 space-y-1 text-slate-600">
              <li>
                <Link to="/" className="hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <a href="#openings" className="hover:text-blue-600">
                  Openings
                </a>
              </li>
              <li>
                <Link to="/apply" className="hover:text-blue-600">
                  Apply
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-blue-600">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide">
              Contact
            </h4>
            <ul className="mt-1 space-y-1 text-slate-600">
              <li>hiringteam.veridia.io@gmail.com</li>
              <li>+19 1234567890</li>
              <li>India</li>
            </ul>
          </div>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-start md:items-end justify-between">
          <div className="flex items-center gap-3 text-slate-600">
            <a href="#" aria-label="Twitter" className="hover:text-blue-600">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-600">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-blue-600">
              <Github className="w-4 h-4" />
            </a>
          </div>
          <p className="mt-2 text-[11px] text-slate-500">
            © {new Date().getFullYear()} Veridia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
