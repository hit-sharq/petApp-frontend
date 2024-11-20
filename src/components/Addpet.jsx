import React from "react";
// import bxCheckbox from "./bx-checkbox.svg";
// import fluentIosArrow24Filled2 from "./fluent-ios-arrow-24-filled-2.svg";
// import fluentIosArrow24Filled from "./fluent-ios-arrow-24-filled.svg";
// import frame14 from "./frame-14.svg";
// import hugeiconsCancel012 from "./hugeicons-cancel-01-2.svg";
// import hugeiconsCancel013 from "./hugeicons-cancel-01-3.svg";
// import hugeiconsCancel01 from "./hugeicons-cancel-01.svg";
// import image from "./image.svg";
// import vector2 from "./vector-2.svg";
// import vector from "./vector.svg";

export const AddPet = () => {
  return (
    <div className="bg-[#deefdf] flex flex-row justify-center w-full">
      <div className="bg-[#deefdf] w-[1512px] h-[1489px]">
        <div className="relative w-[1361px] h-[1344px] top-[68px] left-16 bg-[#ffffff] rounded-[10px] shadow-[0px_1px_3px_#0000001a]">
          <div className="flex flex-col w-[1133px] items-start gap-[33px] absolute top-[72px] left-[67px]">
            <div className="relative self-stretch mt-[-1.00px] font-sub-heading font-[number:var(--sub-heading-font-weight)] text-[#39628e] text-[length:var(--sub-heading-font-size)] tracking-[var(--sub-heading-letter-spacing)] leading-[var(--sub-heading-line-height)] [font-style:var(--sub-heading-font-style)]">
              Add Pet Details
            </div>

            <div className="flex items-start gap-[173px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col w-[480px] items-start gap-[37px] relative">
                <div className="gap-[18px] self-stretch w-full flex flex-col items-start relative flex-[0_0_auto]">
                  <div className="relative self-stretch mt-[-1.00px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-[#38618d] text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                    Pet’s Name
                  </div>

                  <div className="flex h-[45px] items-center gap-2.5 p-3.5 relative self-stretch w-full bg-greyish rounded-[10px] border border-solid border-[#b3b3b3]">
                    <div className="relative w-fit mt-[-1.50px] font-small-body font-[number:var(--small-body-font-weight)] text-[#90a0b7] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]">
                      Enter Pet’s Name
                    </div>
                  </div>
                </div>

                <div className="gap-3.5 self-stretch w-full flex flex-col items-start relative flex-[0_0_auto]">
                  <div className="relative self-stretch mt-[-1.00px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-[#38618d] text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                    Pet’s Breed
                  </div>

                  <div className="flex items-center gap-2.5 px-3.5 py-3 relative self-stretch w-full border-dark-grey h-[45px] bg-greyish rounded-lg border border-solid">
                    <div className="relative w-fit font-small-body font-[number:var(--small-body-font-weight)] text-purple-fade text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]">
                      Breed
                    </div>
                  </div>
                </div>

                <div className="relative self-stretch w-full h-[88px]">
                  <div className="absolute w-[480px] -top-px left-0 font-heading-2 font-[number:var(--heading-2-font-weight)] text-[#38618d] text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                    Date of Birth
                  </div>

                  <div className="absolute w-[480px] h-[45px] top-[43px] left-0 bg-greyish rounded-lg border border-solid border-dark-grey">
                    <div className="absolute top-3 left-3.5 font-small-body font-[number:var(--small-body-font-weight)] text-purple-fade text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]">
                      24/12/2024
                    </div>

                    {/* <img
                      className="absolute w-[26px] h-[29px] top-[7px] left-[441px]"
                      alt="Vector"
                      src={vector}
                    /> */}
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[480px] items-start gap-[41px] relative">
                <div className="gap-[18px] self-stretch w-full flex flex-col items-start relative flex-[0_0_auto]">
                  <div className="relative self-stretch mt-[-1.00px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-[#38618d] text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                    Pet Type
                  </div>

                  <div className="relative self-stretch w-full h-[45px] bg-greyish rounded-lg border border-solid border-dark-grey">
                    <p className="absolute top-[13px] left-3.5 font-small-body font-[number:var(--small-body-font-weight)] text-[#90a0b7] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]">
                      Enter what type of pet it is e.g. cat, dog, rabbit
                    </p>

                    {/* <img
                      className="absolute w-7 h-7 top-[3px] left-[438px]"
                      alt="Fluent ios arrow"
                      src={fluentIosArrow24Filled}
                    /> */}
                  </div>
                </div>

                <div className="w-[323px] gap-[15px] flex flex-col items-start relative flex-[0_0_auto]">
                  <div className="relative self-stretch mt-[-1.00px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-[#38618d] text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                    Pet’s Gender
                  </div>

                  <div className="flex items-center gap-[71px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-[22px] relative flex-[0_0_auto]">
                      {/* <img
                        className="relative w-9 h-9"
                        alt="Frame"
                        src={frame14}
                      /> */}

                      <div className="relative w-fit font-body font-[number:var(--body-font-weight)] text-variable-collection-primary-color text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                        Male
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-[22px] relative flex-[0_0_auto]">
                      <div className="relative w-9 h-9 bg-greyish rounded-lg border border-solid border-dark-grey" />

                      <div className="relative w-fit font-body font-[number:var(--body-font-weight)] text-variable-collection-primary-color text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                        Female
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[1133px] items-start gap-[33px] absolute top-[567px] left-[67px]">
            <div className="relative self-stretch mt-[-1.00px] font-sub-heading font-[number:var(--sub-heading-font-weight)] text-[#39628e] text-[length:var(--sub-heading-font-size)] tracking-[var(--sub-heading-letter-spacing)] leading-[var(--sub-heading-line-height)] [font-style:var(--sub-heading-font-style)]">
              Add Health Details
            </div>

            <div className="flex items-start gap-[172px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col w-[481px] items-start gap-[38px] relative">
                <div className="flex flex-col items-start gap-[18px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative self-stretch mt-[-1.00px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-[#38618d] text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                    Last Weight Check
                  </div>

                  <div className="flex h-[45px] items-center gap-2.5 p-3.5 relative self-stretch w-full bg-greyish rounded-[10px] border border-solid border-[#b3b3b3]">
                    <p className="relative w-fit mt-[-1.50px] font-small-body font-[number:var(--small-body-font-weight)] text-[#90a0b7] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]">
                      Enter pet’s last weight check
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative self-stretch mt-[-1.00px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-[#38618d] text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                    Medical Records
                  </div>

                  <div className="flex flex-col h-[45px] items-start gap-2.5 px-px py-0 relative self-stretch w-full">
                    <div className="absolute w-[480px] top-0 left-0 border-purple-fade h-[45px] bg-greyish rounded-lg border border-solid">
                      <div className="absolute top-[13px] left-[314px] font-small-body font-[number:var(--small-body-font-weight)] text-variable-collection-primary-color text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]">
                        Medication
                      </div>
                    </div>

                    <div className="relative w-[249px] h-[45px] bg-variable-collection-primary-color rounded-lg border border-solid border-purple-fade">
                      <div className="absolute top-[13px] left-[86px] font-small-body font-[number:var(--small-body-font-weight)] text-white text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]">
                        Vaccination
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-[23px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-[433px] h-[45px] bg-white rounded-lg border border-solid border-dark-grey">
                      <div className="absolute top-3 left-3.5 font-small-body font-[number:var(--small-body-font-weight)] text-purple-fade text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]">
                        Enter Vaccination Name
                      </div>
                    </div>

                    {/* <img
                      className="relative w-6 h-6"
                      alt="Hugeicons cancel"
                      src={hugeiconsCancel01}
                    /> */}
                  </div>

                  <div className="flex items-center gap-[23px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-[433px] h-[45px] bg-white rounded-lg border border-solid border-dark-grey">
                      <div className="absolute top-3 left-3.5 font-small-body font-[number:var(--small-body-font-weight)] text-purple-fade text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]">
                        Enter Vaccination Name
                      </div>
                    </div>

                    {/* <img
                      className="relative w-6 h-6"
                      alt="Hugeicons cancel"
                      src={image}
                    /> */}
                  </div>
                </div>

                <div className="relative self-stretch w-full h-[88px]">
                  <div className="absolute w-[480px] -top-px left-0 font-heading-2 font-[number:var(--heading-2-font-weight)] text-[#38618d] text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                    Last Vet Visit
                  </div>

                  <div className="absolute w-[480px] h-[45px] top-[43px] left-0 bg-greyish rounded-lg border border-solid border-dark-grey">
                    <div className="absolute top-3 left-3.5 font-small-body font-[number:var(--small-body-font-weight)] text-purple-fade text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]">
                      24/12/2024
                    </div>

                    {/* <img
                      className="absolute w-[26px] h-[29px] top-[7px] left-[441px]"
                      alt="Vector"
                      src={vector2}
                    /> */}
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[480px] items-start gap-[37px] relative">
                <div className="flex flex-col items-start gap-[18px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative self-stretch mt-[-1.00px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-[#38618d] text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                    Operation/Major Procedures
                  </div>

                  <div className="relative self-stretch w-full h-[45px] bg-greyish rounded-lg border border-solid border-dark-grey">
                    <p className="absolute top-[13px] left-3.5 font-small-body font-[number:var(--small-body-font-weight)] text-[#90a0b7] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]">
                      Enter pets last operations or major procedures
                    </p>

                    {/* <img
                      className="absolute w-7 h-7 top-[3px] left-[438px]"
                      alt="Fluent ios arrow"
                      src={fluentIosArrow24Filled2}
                    /> */}
                  </div>
                </div>

                <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="mt-[-1.00px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-[#38618d] text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] relative self-stretch [font-style:var(--heading-2-font-style)]">
                    Food Allergies
                  </div>

                  <div className="relative self-stretch w-full h-[45px]">
                    <div className="relative w-[480px] border-purple-fade h-[45px] bg-greyish rounded-lg border border-solid">
                      <p className="absolute top-[13px] left-[23px] font-small-body font-[number:var(--small-body-font-weight)] text-variable-collection-primary-color text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]">
                        You can add as many as you like
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-[23px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-[433px] h-[45px] bg-white rounded-lg border border-solid border-dark-grey">
                      <div className="absolute top-3 left-3.5 font-small-body font-[number:var(--small-body-font-weight)] text-purple-fade text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]">
                        Enter pet food allergy
                      </div>
                    </div>

                    {/* <img
                      className="relative w-6 h-6"
                      alt="Hugeicons cancel"
                      src={hugeiconsCancel012}
                    /> */}
                  </div>

                  <div className="flex items-center gap-[23px] w-full flex-[0_0_auto] relative self-stretch">
                    <div className="relative w-[433px] h-[45px] bg-white rounded-lg border border-solid border-dark-grey">
                      <div className="absolute top-3 left-3.5 font-small-body font-[number:var(--small-body-font-weight)] text-purple-fade text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]">
                        Enter pet food allergy
                      </div>
                    </div>

                    {/* <img
                      className="relative w-6 h-6"
                      alt="Hugeicons cancel"
                      src={hugeiconsCancel013}
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[286px] items-start gap-[38px] absolute top-[1176px] left-[67px]">
            <div className="relative w-[251px] h-8">
              <p className="absolute top-[7px] left-9 [font-family:'Lato-Regular',Helvetica] font-normal text-variable-collection-primary-color text-sm text-center tracking-[0] leading-[normal]">
                <span className="[font-family:'Lato-Regular',Helvetica] font-normal text-[#38618d] text-sm tracking-[0]">
                  I agree to all{" "}
                </span>

                <span className="[font-family:'Lato-SemiBold',Helvetica] font-semibold">
                  Terms and Conditions
                </span>
              </p>

              {/* <img
                className="absolute w-8 h-8 top-0 left-0"
                alt="Bx checkbox"
                src={bxCheckbox}
              /> */}
            </div>

            <button className="all-[unset] box-border flex h-[66px] items-center justify-center gap-2.5 px-[60px] py-[11px] relative self-stretch w-full">
              <div className="absolute w-[286px] h-[66px] top-0 left-0 bg-[#39628e] rounded-[10px]" />

              <div className="relative w-[125px] font-sub-heading font-[number:var(--sub-heading-font-weight)] text-[#ffffff] text-[length:var(--sub-heading-font-size)] text-center tracking-[var(--sub-heading-letter-spacing)] leading-[var(--sub-heading-line-height)] [font-style:var(--sub-heading-font-style)]">
              <a href="/overview">Submit</a>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
