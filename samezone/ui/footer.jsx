"use client";
import {
  FaCcMastercard,
  FaCcVisa,
  FaFacebook,
  FaFacebookMessenger,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcDiscover } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa6";
import { FaCcApplePay } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function () {
  return (
    <div className="flex gap-8 bg-secondary-color px-20 py-10 text-middle-color">
      <div className="flex w-1/2 flex-col gap-8">
        <div className="flex flex-wrap  gap-4">
          <div>
            <p className="text-lg font-bold text-white">Customer service</p>
            <ul>
              <li>Help Center</li>
              <li>Transaction Services Agreement for</li>
              <li>non-EU/UK Consumers</li>
              <li>Terms and Conditions for EU/EEA/UK</li>
              <li>Consumers (Transactions)</li>
              <li>Take our feedback survey</li>
            </ul>
          </div>
          <div>
            <p className="text-lg font-bold text-white">Shopping with us</p>
            <ul>
              <li>Making payments</li>
              <li>Delivery options</li>
              <li>Buyer Protection</li>
            </ul>
          </div>
          <div>
            <p className="text-lg font-bold text-white">Collaborate with us</p>
            <ul>
              <li>Partnerships</li>
              <li>Affiliate program</li>
              <li>DS Center</li>
              <li>Seller Log In</li>
              <li>中国卖家入驻</li>
              <li>Non-Chinese Seller Registration</li>
            </ul>
          </div>
        </div>
        <div>
          <p className="text-lg font-bold text-white">Help</p>
          <ul className="flex flex-row flex-wrap ">
            <li className="pr-1">Help Center</li>
            <li className="pr-1">Disputes & Reports,</li>
            <li className="pr-1">Buyer Protection,</li>
            <li className="pr-1">Report IPR infringement,</li>
            <li className="pr-1">Regulated Information,</li>
            <li className="pr-1">Integrity Compliance,</li>
            <li className="pr-1">Transparency Center,</li>
            <li>Submit report (non-registered users)</li>
          </ul>
        </div>
        <div>
          <p className="text-lg font-bold text-white">Browse by Category</p>
          <ul className="flex flex-row flex-wrap ">
            <li className="pr-1">All Popular,</li>
            <li className="pr-1">Product,</li>
            <li className="pr-1">Promotion,</li>
            <li className="pr-1">Low Price,</li>
            <li className="pr-1">Great Value,</li>
            <li className="pr-1">Reviews</li>
          </ul>
        </div>
      </div>
      <div className="flex w-1/2 flex-col gap-8">
        <div className="flex flex-wrap gap-4">
          <div>
            <p className="text-lg font-bold text-white">Pay with</p>
            <ul className="flex gap-4 flex-wrap">
              <IconContext.Provider value={{ size: "3rem", color: "--middle-color" }}>
                <li>
                  <FaCcVisa />
                </li>
                <li>
                  <FaCcMastercard />
                </li>
                <li>
                  <SiAmericanexpress />
                </li>
                <li>
                  <FaCcDiscover />
                </li>
                <li>
                  <FaCcPaypal />
                </li>
                <li>
                  <FaGooglePay />
                </li>
                <li>
                  <FaCcApplePay />
                </li>
              </IconContext.Provider>
            </ul>
          </div>
          <div>
            <p className="text-lg font-bold text-white">Stay connected</p>
            <ul className="flex gap-4 flex-wrap">
              <IconContext.Provider value={{ size: "3rem", color: "--middle-color" }}>
                <li>
                  <FaFacebook />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaFacebookMessenger />
                </li>
                <li>
                  <FaWhatsapp />
                </li>
              </IconContext.Provider>
            </ul>
          </div>
        </div>
        <div>
          <p className="text-lg font-bold text-white">Samezone Multi-Language Sites</p>
          <ul className="flex flex-row flex-wrap ">
            <li className="pr-1">Russian,</li>
            <li className="pr-1">Portuguese,</li>
            <li className="pr-1">Spanish,</li>
            <li className="pr-1">French,</li>
            <li className="pr-1">German,</li>
            <li className="pr-1">Italian,</li>
            <li className="pr-1">Dutch,</li>
            <li className="pr-1">Turkish,</li>
            <li className="pr-1">Japanese,</li>
            <li className="pr-1">Korean,</li>
            <li className="pr-1">Thai,</li>
            <li className="pr-1">Vietnamese,</li>
            <li className="pr-1">Arabic,</li>
            <li className="pr-1">Hebrew,</li>
            <li>Polish</li>
          </ul>
        </div>
        <div>
          <p className="text-lg font-bold text-white">Samezone Group</p>
          <ul className="flex flex-row flex-wrap ">
            <li className="pr-1">Samezone Group Website,</li>
            <li className="pr-1">SameZoneExpress,</li>
            <li className="pr-1">SameZonemama,</li>
            <li className="pr-1">SameZonepay,</li>
            <li className="pr-1">Fliggy,</li>
            <li className="pr-1">Samezone Cloud,</li>
            <li className="pr-1">Samezone International,</li>
            <li className="pr-1">SameZoneTelecom,</li>
            <li className="pr-1">DingTalk,</li>
            <li className="pr-1">Juhuasuan,</li>
            <li className="pr-1">Taobao Marketplace,</li>
            <li className="pr-1">Tmall,</li>
            <li className="pr-1">Taobao Global,</li>
            <li className="pr-1">SameZoneOS,</li>
            <li>1688</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
