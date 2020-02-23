import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-2/3">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Farm+ : Informed Farming
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Providing farmers with actionable information in order to help them make proper farming decisions
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg" color='green'>Subscribe</Button>
          </p>
        </div>
        
      </div>
    </section>
    
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Data collection and Analysis</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
           We are creating geo-zones in agricultural active areas. Then we use sensors and satellite data to collect data of the specific zones. After that we analyse the data and come up with actionable information to help farmers make proper decisions.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            USSD Subscription
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            The farmers within a specific geo-zone subscribe to a specialised SMS service that sends push notifications to farmers with proper information that they can act on.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Additional Services
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            We also provide extra services like Farm input delivery and farmer seminars in order to enable the farmers do better and be better.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your shamba?</h3>
      <p className="mt-8 text-xl font-light">
        
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section>
  </Layout>
);
