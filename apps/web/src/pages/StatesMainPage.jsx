import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const stateImages = {
  'Alabama': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Birmingham%2C_Alabama.jpg/960px-Birmingham%2C_Alabama.jpg',
  'Alaska': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Wonder_Lake_and_Denali.jpg/960px-Wonder_Lake_and_Denali.jpg',
  'Arizona': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Canyon_River_Tree_%28165872763%29.jpeg/960px-Canyon_River_Tree_%28165872763%29.jpeg',
  'Arkansas': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Steamy_Entrance_Springs_on_Cold_Night_in_Hot_Springs_National_Park.jpg/960px-Steamy_Entrance_Springs_on_Cold_Night_in_Hot_Springs_National_Park.jpg',
  'California': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Golden_Gate_Bridge_as_seen_from_Battery_East.jpg/960px-Golden_Gate_Bridge_as_seen_from_Battery_East.jpg',
  'Colorado': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rocky_Mountain_National_Park_in_September_2011_-_Glacier_Gorge_from_Bear_Lake.JPG/960px-Rocky_Mountain_National_Park_in_September_2011_-_Glacier_Gorge_from_Bear_Lake.JPG',
  'Connecticut': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Yale_University_Shield_1.svg/960px-Yale_University_Shield_1.svg.png',
  'Delaware': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Flag_of_Delaware.svg/960px-Flag_of_Delaware.svg.png',
  'Florida': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Ocean_drive_day_2009j.JPG/960px-Ocean_drive_day_2009j.JPG',
  'Georgia': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/A2ATL20250614-0721_%28cropped%29.jpg/960px-A2ATL20250614-0721_%28cropped%29.jpg',
  'Hawaii': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Hawaii.svg/960px-Flag_of_Hawaii.svg.png',
  'Idaho': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Shoshone_Falls%2C_Idaho.jpg/960px-Shoshone_Falls%2C_Idaho.jpg',
  'Illinois': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Millennium_Square%2C_Chicago%2C_Illinois_%289181701264%29.jpg/960px-Millennium_Square%2C_Chicago%2C_Illinois_%289181701264%29.jpg',
  'Indiana': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Indianapolis-motor-speedway-1848561.jpg/960px-Indianapolis-motor-speedway-1848561.jpg',
  'Iowa': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Morning_Skyline_-_Des_Moines%2C_Iowa_-_Winter_on_the_Des_Moines_River_%2824805016620%29_%28cropped%29.jpg/960px-Morning_Skyline_-_Des_Moines%2C_Iowa_-_Winter_on_the_Des_Moines_River_%2824805016620%29_%28cropped%29.jpg',
  'Kansas': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Monument_Rocks.jpg/960px-Monument_Rocks.jpg',
  'Kentucky': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Mammoth_Cave_Rotunda_%28USGS_Lwt02830%29.jpg/960px-Mammoth_Cave_Rotunda_%28USGS_Lwt02830%29.jpg',
  'Louisiana': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/French_Quarter%2C_looking_north_with_Mississippi_River_to_the_right_2011.jpg/960px-French_Quarter%2C_looking_north_with_Mississippi_River_to_the_right_2011.jpg',
  'Maine': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Acadia_National_Park_02.JPG/960px-Acadia_National_Park_02.JPG',
  'Maryland': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Inner_Harbor_2020.jpg/960px-Inner_Harbor_2020.jpg',
  'Massachusetts': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Faneuil_Hall_%285813514354%29.jpg/960px-Faneuil_Hall_%285813514354%29.jpg',
  'Michigan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Mackinac_Bridge_2022.jpg/960px-Mackinac_Bridge_2022.jpg',
  'Minnesota': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/2018_Mall_of_America_01.jpg/960px-2018_Mall_of_America_01.jpg',
  'Mississippi': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Illinois_Monument.jpg/960px-Illinois_Monument.jpg',
  'Missouri': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/St_Louis_night_expblend_cropped.jpg/960px-St_Louis_night_expblend_cropped.jpg',
  'Montana': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mountain_Goat_at_Hidden_Lake.jpg/960px-Mountain_Goat_at_Hidden_Lake.jpg',
  'Nebraska': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Chimney_Rock_NE.jpg/960px-Chimney_Rock_NE.jpg',
  'Nevada': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Las_Vegas_Strip_09_2017_4897.jpg/960px-Las_Vegas_Strip_09_2017_4897.jpg',
  'New Hampshire': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_New_Hampshire.svg/960px-Flag_of_New_Hampshire.svg.png',
  'New Jersey': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Atlantic_City_Boardwalk_view_south_from_Caesars_Atlantic_City_by_Silveira_Neto_June_24_2012.jpg/960px-Atlantic_City_Boardwalk_view_south_from_Caesars_Atlantic_City_by_Silveira_Neto_June_24_2012.jpg',
  'New Mexico': 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Carlsbad_Interior_Formations.jpg',
  'New York': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Statue_of_Liberty%2C_statue%2C_Liberty_Island%2C_New_York.jpg/960px-Statue_of_Liberty%2C_statue%2C_Liberty_Island%2C_New_York.jpg',
  'North Carolina': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Biltmore_Estate%2C_Asheville%2C_North_Carolina.jpg/960px-Biltmore_Estate%2C_Asheville%2C_North_Carolina.jpg',
  'North Dakota': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/View_of_Theodore_Roosevelt_National_Park.jpg/960px-View_of_Theodore_Roosevelt_National_Park.jpg',
  'Ohio': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Rock_and_Roll_Hall_of_Fame_-_Joy_of_Museums_1.jpg/960px-Rock_and_Roll_Hall_of_Fame_-_Joy_of_Museums_1.jpg',
  'Oklahoma': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/US_66.svg/960px-US_66.svg.png',
  'Oregon': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Crater_Lake_winter_pano2.jpg/960px-Crater_Lake_winter_pano2.jpg',
  'Pennsylvania': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Independence_Hall.jpg/960px-Independence_Hall.jpg',
  'Rhode Island': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Breakers_01.jpg/960px-Breakers_01.jpg',
  'South Carolina': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/East_Battery_Street_Charleston_Aug2010.jpg/960px-East_Battery_Street_Charleston_Aug2010.jpg',
  'South Dakota': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Mount_Rushmore_detail_view_%28100MP%29.jpg/960px-Mount_Rushmore_detail_view_%28100MP%29.jpg',
  'Tennessee': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/View_atop_Cliff_Tops_on_Mount_LeConte%2C_GSMNP%2C_TN.jpg/960px-View_atop_Cliff_Tops_on_Mount_LeConte%2C_GSMNP%2C_TN.jpg',
  'Texas': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Texas.svg/960px-Flag_of_Texas.svg.png',
  'Utah': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Zion_angels_landing_view.jpg/960px-Zion_angels_landing_view.jpg',
  'Vermont': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Stowe_VT_1-30-2026a.jpg/960px-Stowe_VT_1-30-2026a.jpg',
  'Virginia': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/West_Face_of_Mansion%2C_Mount_Vernon%2C_Near_Alexandria%2C_Virginia_%282731038734%29.jpg/960px-West_Face_of_Mansion%2C_Mount_Vernon%2C_Near_Alexandria%2C_Virginia_%282731038734%29.jpg',
  'Washington': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Space_Needle_2011-07-04.jpg/960px-Space_Needle_2011-07-04.jpg',
  'West Virginia': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/New_River_Gorge_Bridge.jpg/960px-New_River_Gorge_Bridge.jpg',
  'Wisconsin': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Wisconsin_Dells%2C_Wisconsin.jpg/960px-Wisconsin_Dells%2C_Wisconsin.jpg',
  'Wyoming': 'https://upload.wikimedia.org/wikipedia/commons/7/73/Grand_Canyon_of_yellowstone.jpg'
};

const specificStatesData = [
  { name: 'Texas', desc: "Boost your practice's revenue with our expert medical billing services in Texas and achieve 99% accurate claim submissions." },
  { name: 'California', desc: "Our comprehensive medical billing services in California stay updated with local California payers and ensure compliance." },
  { name: 'Florida', desc: "Searching for a trusted medical billing company in Florida. Our team offers effective RCM services to improve your revenue cycle." },
  { name: 'New York', desc: "Enhance your practice's revenue with our reliable medical billing services in New York, ensuring seamless claim processing and compliance with state regulations." },
  { name: 'New Jersey', desc: "Optimize revenue cycle management with TransMedex's expert medical billing services in New Jersey. Reduce claim denials and ensure compliance." },
  { name: 'Delaware', desc: "Boost your practice's revenue with our expert medical billing services in Delaware and achieve 99% accurate claim submissions." },
  { name: 'Pennsylvania', desc: "Optimize your revenue cycle management with TransMedex's expert medical billing services in Pennsylvania. Reduce claim denials and ensure compliance." },
  { name: 'Nevada', desc: "Looking for local medical billing services in Nevada? Partner with TransMedex for up to 30% improvement in your net revenue." },
  { name: 'Michigan', desc: "TransMedex delivers accurate medical billing services in Michigan to strengthen collections and limit claim denials." },
  { name: 'Utah', desc: "TransMedex offers consistent medical billing services in Utah to improve collections and minimize claim issues." },
  { name: 'Illinois', desc: "Choose TransMedex's medical billing services in Illinois to improve reimbursements and maintain billing compliance." },
  { name: 'Colorado', desc: "Improve reimbursements with TransMedex's medical billing services in Colorado. We reduce claim issues and support full compliance." },
  { name: 'North Carolina', desc: "Strengthen collections with TransMedex's medical billing services in North Carolina. We reduce errors and improve payments." },
  { name: 'Alabama', desc: "TransMedex provides reliable medical billing services in Alabama to reduce claim denials, improve reimbursements, and keep your practice compliant." },
  { name: 'Alaska', desc: "Get dependable medical billing services in Alaska with TransMedex. We help lower denials, speed up payments, and maintain compliance." },
  { name: 'Arizona', desc: "TransMedex delivers accurate medical billing services in Arizona to improve collections, prevent errors, and protect compliance." },
  { name: 'Arkansas', desc: "Choose TransMedex's medical billing services in Arkansas to cut claim rejections, increase revenue, and maintain billing accuracy." },
  { name: 'Connecticut', desc: "TransMedex provides trusted medical billing services in Connecticut to lower denials and keep your revenue cycle on track." },
  { name: 'Georgia', desc: "Rely on TransMedex's medical billing services in Georgia to prevent claim rejections and accelerate your practice's cash flow." },
  { name: 'Hawaii', desc: "TransMedex delivers consistent medical billing services in Hawaii to streamline your revenue cycle and ensure steady payments." },
  { name: 'Idaho', desc: "Strengthen collections with TransMedex's medical billing services in Idaho. We simplify billing operations to boost your bottom line." },
  { name: 'Indiana', desc: "TransMedex provides efficient medical billing services in Indiana to lower denials and protect your revenues." },
  { name: 'Iowa', desc: "Get dependable medical billing services in Iowa with TransMedex. We reduce billing errors and speed up payments." },
  { name: 'Kansas', desc: "TransMedex's medical billing services in Kansas help cut rejections and improve overall revenue performance." },
  { name: 'Kentucky', desc: "Improve financial stability with TransMedex's medical billing services in Kentucky. Reduce denials and ensure accuracy." },
  { name: 'Louisiana', desc: "TransMedex offers reliable medical billing services in Louisiana to prevent claim issues and increase collections." },
  { name: 'Maine', desc: "Simplify revenue management with TransMedex's medical billing services in Maine. We help reduce errors and delays." },
  { name: 'Maryland', desc: "TransMedex provides professional medical billing services in Maryland to lower denials and maintain compliance." },
  { name: 'Massachusetts', desc: "Improve payment turnaround with TransMedex's medical billing services in Massachusetts. Reduce rejections and protect revenue." },
  { name: 'Minnesota', desc: "Choose TransMedex's medical billing services in Minnesota to improve cash flow and reduce billing mistakes." },
  { name: 'Mississippi', desc: "TransMedex offers dependable medical billing services in Mississippi to lower denials and ensure clean claims." },
  { name: 'Missouri', desc: "Strengthen your revenue cycle with TransMedex's medical billing services in Missouri. We reduce rejections and delays." },
  { name: 'Montana', desc: "TransMedex provides consistent medical billing services in Montana to prevent errors and improve reimbursements." },
  { name: 'Nebraska', desc: "Improve billing accuracy with TransMedex's medical billing services in Nebraska. We help reduce denials and speed payments." },
  { name: 'New Hampshire', desc: "Choose TransMedex's medical billing services in New Hampshire to maintain compliance and reduce billing errors." },
  { name: 'New Mexico', desc: "Improve revenue performance with TransMedex's medical billing services in New Mexico. Reduce claim issues and delays." },
  { name: 'North Dakota', desc: "TransMedex offers efficient medical billing services in North Dakota to limit claim rejections and increase revenues." },
  { name: 'Ohio', desc: "Choose TransMedex's medical billing services in Ohio to improve reimbursement rates and reduce billing mistakes." },
  { name: 'Oklahoma', desc: "TransMedex provides dependable medical billing services in Oklahoma to prevent denials and improve collections." },
  { name: 'Oregon', desc: "Improve claim accuracy with TransMedex's medical billing services in Oregon. Reduce rejections and speed payments." },
  { name: 'Rhode Island', desc: "Get reliable medical billing services in Rhode Island with TransMedex. We reduce claim denials and billing delays." },
  { name: 'South Carolina', desc: "TransMedex delivers professional medical billing services in South Carolina to lower rejections and strengthen collections." },
  { name: 'South Dakota', desc: "Choose TransMedex's medical billing services in South Dakota to prevent billing errors and improve cash flow." },
  { name: 'Tennessee', desc: "TransMedex provides accurate medical billing services in Tennessee to reduce denials and protect revenue." },
  { name: 'Vermont', desc: "Improve billing performance with TransMedex's medical billing services in Vermont. Reduce denials and speed reimbursements." }
];

const allStatesList = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 
  'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 
  'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

const statesData = allStatesList.map((stateName) => {
  const specificData = specificStatesData.find(s => s.name === stateName);
  return {
    name: stateName,
    path: `/states/${stateName.toLowerCase().replace(/\s+/g, '-')}`,
    desc: specificData ? specificData.desc : `Optimize your revenue cycle management with TransMedex's expert medical billing services in ${stateName}. Reduce claim denials and ensure compliance.`,
    image: stateImages[stateName] || 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80'
  };
});

export default function StatesMainPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-slate-950 font-sans">
      
      <Header />

      {/* Hero Section */}
      <div className="bg-[#f4f5f8] pt-32 pb-16 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 items-center gap-10">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-slate-950 leading-snug"
            >
              Complete RCM Services Serving Providers Across Every US State
            </motion.h1>
          </div>
          <div className="flex justify-center md:justify-end">
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1024&q=80" 
              alt="Map of USA" 
              className="w-full h-auto max-h-72 object-contain rounded-2xl shadow-lg opacity-90"
            />
          </div>
        </div>
      </div>

      <main className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-950 mb-4 tracking-tight">
              Which States Does TransMedex Serve With Their Medical Billing Services?
            </h2>
            <p className="max-w-3xl mx-auto text-slate-600 text-[15px] leading-relaxed">
              TransMedex serves the following states with their complete medical billing services, from prior authorization and coding to claim submission and denial management.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {statesData.map((state, index) => (
              <motion.div
                key={state.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: (index % 10) * 0.05 }}
                whileHover={{ y: -8 }}
                onClick={() => navigate(state.path)}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={state.image} 
                    alt={`${state.name} cityscape`} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-[#0da1df] text-xl font-semibold mb-3">
                    {state.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {state.desc}
                  </p>
                  <span 
                    className="text-[#0da1df] font-bold text-sm tracking-wide mt-auto flex items-center group-hover:text-[#0b87ba] transition-colors"
                  >
                    Optimize Billing Now
                    <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}


