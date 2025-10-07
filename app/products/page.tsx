"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const products = [
  {
    name: 'Financial Management',
    img: '/support.jpg',
    description: 'Comprehensive financial management solutions for organizations, including budgeting, accounting, and reporting.'
  },
  {
    name: 'Academic Management',
    img: '/development.jpg',
    description: 'Streamline academic operations, student records, and performance tracking for educational institutions.'
  },
  {
    name: 'Procurement Management',
    img: '/support.jpg',
    description: 'Automate procurement processes, supplier management, and inventory control.'
  },
  {
    name: 'Human Resource and Payroll Management',
    img: '/development.jpg',
    description: 'Manage employee data, payroll, benefits, and HR processes efficiently.'
  },
  {
    name: 'Health Unit and Hospital Management System',
    img: '/support.jpg',
    description: 'Integrated solutions for hospital administration, patient records, and healthcare workflows.'
  },
  {
    name: 'Property Management',
    img: '/development.jpg',
    description: 'Tools for managing property assets, leases, and maintenance.'
  },
  {
    name: 'Hotel and Catering Management',
    img: '/support.jpg',
    description: 'End-to-end management for hotels and catering services, including reservations and inventory.'
  },
  {
    name: 'Library Management',
    img: '/development.jpg',
    description: 'Automate library operations, cataloging, and member management.'
  },
  {
    name: 'Fleet Management',
    img: '/support.jpg',
    description: 'Monitor and optimize fleet operations, vehicle tracking, and maintenance.'
  },
];

const msProducts = [
  {
    name: 'Microsoft Dynamics Nav',
    img: '/microsoft.jpg',
    description: 'ERP suite for mid-sized organizations with industry-specific features.'
  },
  {
    name: 'Power BI',
    img: '/microsoft.jpg',
    description: 'Business analytics tools for data insights and real-time dashboards.'
  },
  {
    name: 'Microsoft Dynamics CRM',
    img: '/microsoft.jpg',
    description: 'CRM platform to streamline sales, marketing, and service processes.'
  },
];

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState(products[0].name);
  const [selectedMs, setSelectedMs] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#f5f8ff] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mt-8 pt-6 mb-8 text-center">Our Products</h1>
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {products.map((product) => (
            <button
              key={product.name}
              onClick={() => setActiveTab(product.name)}
              className={`px-6 py-2 rounded-full border transition font-semibold ${
                activeTab === product.name
                  ? "bg-blue-600 text-white"
                  : "bg-white border-gray-300 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {product.name}
            </button>
          ))}
        </div>
        {/* Card */}
        {(() => {
          const activeProduct = products.find(p => p.name === activeTab);
          if (!activeProduct) return null;
          return (
            <div className="bg-blue-100 p-10 rounded-2xl shadow-lg text-left flex flex-col md:flex-row items-center gap-10 mb-12">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{activeProduct.name}</h3>
                <p className="text-gray-600 mb-6">{activeProduct.description}</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition">Learn More</button>
              </div>
              <div className="flex-1 flex justify-center">
                <Image src={activeProduct.img} alt={activeProduct.name} width={320} height={220} className="rounded-xl object-cover w-full max-w-[320px] h-auto" />
              </div>
            </div>
          );
        })()}

  <h2 className="text-3xl font-bold mt-16 mb-2 text-center">Microsoft Powered Solutions</h2>
  <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">We deliver smart tools for growth: Dynamics NAV streamlines operations, Power BI turns data into insights, and Dynamics CRM strengthens customer relationships.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {msProducts.map((product, idx) => (
            <div
              key={product.name}
              className="bg-white rounded-xl shadow hover:shadow-lg cursor-pointer p-6 flex flex-col items-center"
              onClick={() => setSelectedMs(idx)}
            >
              <Image src={product.img} alt={product.name} width={260} height={180} className="mb-4 rounded-xl object-cover" />
              <h2 className="text-xl font-semibold mb-2 text-center">{product.name}</h2>
            </div>
          ))}
        </div>
        {selectedMs !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-8 max-w-md w-full relative">
              <button className="absolute top-2 right-2 text-xl" onClick={() => setSelectedMs(null)}>&times;</button>
              <Image src={msProducts[selectedMs].img} alt={msProducts[selectedMs].name} width={360} height={240} className="mb-4 rounded-xl object-cover" />
              <h2 className="text-2xl font-bold mb-2">{msProducts[selectedMs].name}</h2>
              <p className="text-gray-700">{msProducts[selectedMs].description}</p>
            </div>
          </div>
        )}

        {/* ISO Card Section */}
        <div className="bg-black rounded-2xl py-12 px-6 flex flex-col md:flex-row items-center justify-between mt-16">
          <div className="text-white md:w-2/3 mb-8 md:mb-0">
            <h3 className="text-3xl font-bold mb-4">We are a Microsoft Certified Business Solutions Partner</h3>
            <p className="text-lg">Specializing in the customization and roll-out of ICT Solutions Powered by Microsoft Business</p>
          </div>
          <div className="flex gap-8 md:w-1/3 justify-center">
            <div className="bg-white rounded-xl p-6 flex flex-col items-center w-40">
              <Image src="/iso1.png" alt="ISO 1" width={60} height={60} />
              <span className="text-black font-semibold mt-2">ISO 27001</span>
            </div>
            <div className="bg-white rounded-xl p-6 flex flex-col items-center w-40">
              <Image src="/iso2.png" alt="ISO 2" width={60} height={60} />
              <span className="text-black font-semibold mt-2">GDPR</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
