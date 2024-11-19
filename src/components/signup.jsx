import React from "react";
// import deviconApple from "./devicon-apple.svg";
// import flatColorIconsGoogle from "./flat-color-icons-google.svg";
// import layer11 from "./layer-1-1.png";
// import line1 from "./line-1.png";
// import logosMetaIcon from "./logos-meta-icon.svg";
// import petPal from "./pet-pal.png";
// import rectangle8 from "./rectangle-8.svg";
// import rectangle from "./rectangle.png";

export const SignUp = () => {
  return (
    <div className="bg-[#86daa8] flex flex-row justify-center w-full h-[100vh]">
      <div className="bg-variable-collection-light-green w-[1512px] h-[982px] relative">
        <div className="absolute w-[585px] h-[690px] top-[146px] left-[140px] bg-white rounded-[30px] shadow-[0px_1px_3px_#0000001a]">
          <div className="absolute w-[131px] h-[67px] top-[459px] left-20 bg-[#f7f7f7] rounded-[10px]">
            {/* <img
              className="absolute w-[39px] h-[39px] top-4 left-[46px]"
              alt="Flat color icons"
              src={flatColorIconsGoogle}
            /> */}
          </div>

          <div className="absolute w-[136px] h-[71px] top-[457px] left-[232px] bg-[#f7f7f7] rounded-[10px]">
            {/* <img
              className="absolute w-[46px] h-[30px] top-[21px] left-[45px]"
              alt="Logos meta icon"
              src={logosMetaIcon}
            /> */}
          </div>

          <div className="absolute w-[137px] h-[71px] top-[457px] left-[383px] bg-[#f7f7f7] rounded-[10px]">
            {/* <img
              className="absolute w-[35px] h-[35px] top-4 left-[51px]"
              alt="Devicon apple"
              src={deviconApple}
            /> */}
          </div>

          {/* <img
            className="absolute w-[37px] h-1.5 top-[167px] left-[62px]"
            alt="Rectangle"
            src={rectangle}
          /> */}

          <div className="absolute w-[466px] h-[45px] top-[322px] left-14">
            <div className="relative w-[464px] h-[45px] bg-greyish rounded-lg border border-solid border-dark-grey">
              <div className="absolute w-[88px] top-3 left-[15px] [font-family:'Instrument_Sans-SemiBold',Helvetica] font-semibold text-[#90a0b7] text-sm tracking-[0] leading-[normal]">
                Password
              </div>
            </div>
          </div>

          <div className="absolute w-[466px] h-[45px] top-[261px] left-14">
            <div className="relative w-[464px] h-[45px] bg-greyish rounded-lg border border-solid border-dark-grey">
              <p className="w-[275px] absolute top-[13px] left-[15px] [font-family:'Instrument_Sans-SemiBold',Helvetica] font-semibold text-[#90a0b7] text-sm tracking-[0] leading-[normal]">
                Email address / Phone No. / Username
              </p>
            </div>
          </div>

          <div className="absolute w-[466px] h-[45px] top-48 left-14">
            <div className="relative w-[464px] h-[45px] bg-greyish rounded-lg border border-solid border-dark-grey">
              <div className="w-[242px] absolute top-[13px] left-[15px] [font-family:'Instrument_Sans-SemiBold',Helvetica] font-semibold text-[#90a0b7] text-sm tracking-[0] leading-[normal]">
                Name/ Nickname
              </div>
            </div>
          </div>

          <div className="absolute top-[405px] left-20 [font-family:'Instrument_Sans-Regular',Helvetica] font-normal text-variable-collection-primary-color text-base tracking-[0] leading-[normal]">
            Or continue with
          </div>

          {/* <img
            className="absolute w-[304px] h-px top-[414px] left-[214px]"
            alt="Line"
            src={line1}
          /> */}

          <div className="absolute w-[314px] h-[62px] top-[575px] left-[136px]">
            <div className="relative w-[312px] h-[62px] bg-[#39628e] rounded-lg">
              <div className="absolute top-4 left-[72px] [font-family:'Instrument_Sans-Regular',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal]">
                Create account
              </div>
            </div>
          </div>

          <div className="absolute top-[126px] left-14 [font-family:'Instrument_Sans-SemiBold',Helvetica] font-semibold text-variable-collection-primary-color text-2xl tracking-[0.23px] leading-[normal]">
            Sign Up
          </div>

          <div className="absolute w-[120px] h-12 top-[63px] left-14">
            {/* <img
              className="absolute w-[71px] h-[17px] top-[18px] left-[49px]"
              alt="Pet pal"
              src={petPal}
            /> */}

            {/* <img
              className="absolute w-[47px] h-12 top-0 left-0 object-cover"
              alt="Layer"
              src={layer11}
            /> */}
          </div>
        </div>

        {/* <img
          className="absolute w-[597px] h-[903px] top-[35px] left-[871px]"
          alt="Rectangle"
          src={rectangle8}
        /> */}
      </div>
    </div>
  );
};
