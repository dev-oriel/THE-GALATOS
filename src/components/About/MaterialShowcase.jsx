import React from "react";

const MaterialShowcase = () => (
  <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[600px]">
      <div className="md:col-span-8 h-full overflow-hidden rounded-xl">
        <div
          className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-1000"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCTHZjiH9K6qv9tCiBLDtR_oq8nUEItctKvFzsXNtZmBEb6r31pYY7Q0M5dW-nmj1fdL-omX-P0Rc-gyOXOjgEkLaraE-V8NiSxfgzvPjv7uqLuONwkBgILQL5e2L8vQWY7c8MUdtOGjqHRrWyd6_UnzoId4BB737-e0VfEcOR_3IuEK7RU_AQJW11SQgCD4IqSnOAFj-Qu8z-uuj48C9IcJL0l8MD-GqitrkrrepzJR7GUfgcztTzPP8YUvuGwOT0caFTQMEMu0w5h')",
          }}
        ></div>
      </div>
      <div className="md:col-span-4 flex flex-col gap-4">
        <div className="h-1/2 overflow-hidden rounded-xl">
          <div
            className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-1000"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_6Fhk3BgCoQLQijbMX8ao3vqrhWPiLGWcUVWjFy57KVHWY8AvG1yNaQ7kkm0pvYxaafF1zsziAGMDnlQJeyWoH8e3sihhwuLtoaP5I1salVrW027YqTAUfr0M1hhU1HzsjGnMBCynpPN2qKtPKWVIm7IMnDt0z3lYx8e6LVcyrjbKyDmtOM9tKzQTcQodnlUOTKFk6lVbQ1CsAdPiLUkC2ZZVG8pu_A8cQbZ0PJ5pHWLnDpKAYzOVqvWDdPvBbk8UCWQ8RVFcr-ao')",
            }}
          ></div>
        </div>
        <div className="h-1/2 overflow-hidden rounded-xl">
          <div
            className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-1000"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAFwggGEPIRrtLTx6T2sL7jrvvEV8nOMUMOtcrgD9od4TIfpqMzzSjVwZcwj6VcxKGKW28FayH-LYPEVT1HfypMIHCAQ17E2PTB8y_oe08Y6_tjaiXc8ZHE7uZAbcTxBAgGtd2VHcCPQR-dDmgLS_T8XrXgT2BfyJErftPt81LiBFIeUPz8HJVprW9C5SIaW_FWY7lvVXKIaYM2nrVUt-XWb7aVU07M7_bYA-cCPyIJIIh5GmwTnx2Y51F6pk4LTDh63_7kYtEw9Cij')",
            }}
          ></div>
        </div>
      </div>
    </div>
    <div className="mt-12 text-center max-w-2xl mx-auto italic font-serif text-2xl text-slate-700">
      "In a world of mass production, the handmade is the ultimate form of
      rebellion and soul."
    </div>
  </section>
);

export default MaterialShowcase;
