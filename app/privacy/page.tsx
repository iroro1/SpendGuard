"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

const PrivacyPolicy: NextPage = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 200 ? setScroll(true) : setScroll(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Privacy Policy - SpendGuard</title>
        <meta name="description" content="Privacy Policy for SpendGuard" />
      </Head>
      <Header scroll={scroll} />
      <div className="min-h-[calc(100vh-280px)] mx-auto px-4 py-8 pt-[80px] max-w-5xl">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          Welcome to SpendGuard. We are committed to protecting your personal
          information and your right to privacy. If you have any questions or
          concerns about our policy or our practices with regards to your
          personal information, please contact us.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          We do not collect any personal information about you.
          {/* We collect personal information that you voluntarily provide to us
          when you register on the application, express an interest in obtaining
          information about us or our products and services, when you
          participate in activities on the application, or otherwise when you
          contact us. */}
        </p>

        {/* <h3 className="text-xl font-semibold mb-4">
          Personal Information Provided by You
        </h3>
        <p className="mb-4">
          The personal information that we collect depends on the context of
          your interactions with us and the application, the choices you make,
          and the products and features you use. The personal information we
          collect may include the following:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Name and Contact Data</li>
          <li>Credentials</li>
          <li>Financial Data</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          2. How We Use Your Information
        </h2>
        <p className="mb-4">
          We use personal information collected via our application for a
          variety of business purposes described below. We process your personal
          information for these purposes in reliance on our legitimate business
          interests, in order to enter into or perform a contract with you, with
          your consent, and/or for compliance with our legal obligations.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>To facilitate account creation and login processes</li>
          <li>To manage user accounts</li>
          <li>To send administrative information to you</li>
          <li>To fulfill and manage your orders</li>
          <li>To respond to legal requests and prevent harm</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          3. Will Your Information Be Shared with Anyone?
        </h2>
        <p className="mb-4">
          We only share information with your consent, to comply with laws, to
          provide you with services, to protect your rights, or to fulfill
          business obligations.
        </p>
        <p className="mb-4">
          We may process or share your data that we hold based on the following
          legal basis:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Consent: We may process your data if you have given us specific
            consent to use your personal information for a specific purpose.
          </li>
          <li>
            Legitimate Interests: We may process your data when it is reasonably
            necessary to achieve our legitimate business interests.
          </li>
          <li>
            Performance of a Contract: Where we have entered into a contract
            with you, we may process your personal information to fulfill the
            terms of our contract.
          </li>
          <li>
            Legal Obligations: We may disclose your information where we are
            legally required to do so to comply with applicable law,
            governmental requests, a judicial proceeding, court order, or legal
            process.
          </li>
        </ul> */}

        {/* <h2 className="text-2xl font-semibold mb-4">
          4. How Long Do We Keep Your Information?
        </h2>
        <p className="mb-4">
          We will only keep your personal information for as long as it is
          necessary for the purposes set out in this privacy notice unless a
          longer retention period is required or permitted by law.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          5. How Do We Keep Your Information Safe?
        </h2>
        <p className="mb-4">
          We have implemented appropriate technical and organizational security
          measures designed to protect the security of any personal information
          we process. However, please also remember that we cannot guarantee
          that the internet itself is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          6. What Are Your Privacy Rights?
        </h2>
        <p className="mb-4">
          In some regions, you have rights that allow you greater access to and
          control over your personal information. You may review, change, or
          terminate your account at any time.
        </p> */}

        {/* <h2 className="text-2xl font-semibold mb-4">
          7. Updates to This Policy
        </h2>
        <p className="mb-4">
          We may update this privacy policy from time to time in order to
          reflect changes to our practices or for other operational, legal, or
          regulatory reasons.
        </p> */}

        <h2 className="text-2xl font-semibold mb-4">2. Contact Us</h2>
        <p className="mb-4">
          If you have questions or comments about this policy, you may email us
          at support@spendguard.com.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
