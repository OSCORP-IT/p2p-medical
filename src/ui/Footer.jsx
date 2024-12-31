import LogoWhite from "../assets/logo.png";
import SmallText from "../components/SmallText";
import Heading2 from "../components/Heading2";
import FacebookIcon from "../icon/Facebook";
import InstagramIcon from "../icon/Instagram";
import LinkedInIcon from "../icon/LinkedIn";
import Text from "../components/Text";
import FootEnvelope from "../icon/FootEnvelope";
import FootCall from "../icon/FootCall";
import House from "../icon/House";
function Footer() {
  return (
    <div className="bg-white mt-10 tab:mt-0 py-5 px-4 sm:px-0">
      <div className="sm:hidden w-full sm:w-[65%] m-auto bg-white pt-4 pb-5 px-2 sm:px-6 rounded-md -mt-16 sm:-mt-20 mb-6">
        <Heading2
          color={`text-headerColor`}
          align={`text-center`}
          font={`font-semibold font-poppins leading-tight`}
          padding={`py-0`}
        >
          Newsletter
        </Heading2>
        <SmallText color={`textColor1`} align={`text-center`}>
          Want to know what we’re up to? Sign up for the newsletter and join out
          tribe
        </SmallText>

        <input
          type="text"
          className="p-2 rounded-md w-full border border-gray-500 mt-2"
          placeholder="Email Address"
        />
        <button className="w-full mt-2 bg-gradient-to-l from-[#ffa412] to-[#7cc600] capitalize rounded-md px-4 sm:px-6 py-3 text-xs font-semibold text-textColor1 text-center">
          subscribe
        </button>
      </div>
      <div>
        <div className="px-4 tab:px-0 tab:w-11/12 laptop:w-5/6 m-auto flex flex-wrap gap-8 tab:gap-0 tab:flex-nowrap items-start justify-between">
          <div className="w-full sm:w-[45%] tab:w-[30%] mb-2 sm:mb-0">
            <img src={LogoWhite} alt="logo" className="w-max m-auto sm:m-0" />
            <SmallText
              color={`textColor1`}
              padding={`py-2 leading-tight`}
              align={`text-center sm:text-left`}
            >
              Lorem ipsum dolor sit amet consectetur. Sem in faucibus habitasse
              netus quis facilisis vitae blandit duis. Nunc pulvinar elit
              fermentum amet tellus et mi ac fringilla.
            </SmallText>
            <div className="flex items-center gap-5">
              <FacebookIcon />
              <InstagramIcon />
              <LinkedInIcon />
            </div>
          </div>
          <div className="w-[40%] hidden sm:block tab:hidden">
            <Heading2
              color={`text-headerColor`}
              padding={`pb-1`}
              font={`font-semibold font-poppins leading-tight`}
            >
              Newsletter
            </Heading2>
            <SmallText color={`textColor1`}>
              Want to know what we’re up to? Sign up for the newsletter and join
              out tribe
            </SmallText>
            <input
              type="text"
              className="p-2 rounded-md border border-gray-500 w-full mb-2"
              placeholder="Email Address"
            />
            <button className="w-full bg-gradient-to-l from-[#ffa412] to-[#7cc600] capitalize rounded-md px-6 py-3 text-xs font-semibold text-textColor1">
              subscribe
            </button>
          </div>
          <div className="w-max pr-4">
            <Text
              color={"primary"}
              font={`font-medium uppercase tracking-wide`}
            >
              contact info
            </Text>
            <div className="pt-1 flex items-center gap-2">
              <div className="border rounded-md border-headerColor p-1">
                <FootEnvelope />
              </div>
              <SmallText font={`font-semibold`} color={`textColor1`}>
                info@fintech.com
              </SmallText>
            </div>
            <div className="pt-2 flex items-center gap-2">
              <div className="border rounded-md border-headerColor p-1">
                <FootCall />
              </div>
              <SmallText font={`font-semibold`} color={`textColor1`}>
                +880 1XXX XXXXXX
              </SmallText>
            </div>
            <div className="pt-2 flex items-center gap-2">
              <div className="border rounded-md border-headerColor p-1">
                <House />
              </div>
              <div>
                <SmallText
                  font={`font-semibold`}
                  color={`textColor1`}
                  padding={`pt-1`}
                >
                  House # 22, Road # 19/A
                </SmallText>
                <SmallText
                  font={`font-semibold`}
                  color={`textColor1`}
                  padding={`pb-1`}
                >
                  Banani, Dhaka-1213
                </SmallText>
              </div>
            </div>
          </div>
          <div className="w-max pr-4">
            <Text
              color={"primary"}
              font={`font-medium uppercase tracking-wide`}
            >
              quick links
            </Text>
            <div className="pt-1">
              <SmallText color={`textColor1 cursor-pointer`}>
                Dental Financing
              </SmallText>
              <SmallText color={`textColor1 cursor-pointer`}>
                Bariatric Surgery Financing
              </SmallText>
              <SmallText color={`textColor1 cursor-pointer`}>
                Plastic Surgery Financing
              </SmallText>
              <SmallText color={`textColor1 cursor-pointer`}>
                Fertility Treatment Financing
              </SmallText>
              <SmallText color={`textColor1 cursor-pointer`}>
                Mental Health Financing
              </SmallText>
            </div>
          </div>
          <div className="w-[25%] hidden tab:block">
            <Heading2
              color={`text-headerColor`}
              padding={`pb-1`}
              font={`font-semibold font-poppins leading-tight`}
            >
              Newsletter
            </Heading2>
            <SmallText color={`textColor1`}>
              Want to know what we’re up to? Sign up for the newsletter and join
              out tribe
            </SmallText>
            <input
              type="text"
              className="p-2 rounded-md border border-gray-500 w-full mb-2"
              placeholder="Email Address"
            />
            <button className="w-full bg-gradient-to-l from-[#ffa412] to-[#7cc600] capitalize rounded-md px-6 py-3 text-xs font-semibold text-textColor1">
              subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 border-t border-t-primary">
        <div className="px-4 tab:px-0 tab:w-11/12 laptop:w-5/6 m-auto flex items-center justify-center pt-2.5">
          <div className="flex items-center gap-3 sm:gap-5">
            <SmallText
              color={`textColor1`}
              align={`text-left pr-3 sm:pr-5 border-r border-r-textColor1/50`}
              padding={`py-0`}
            >
              © 2025 Fintech
            </SmallText>
            <SmallText
              color={`textColor1`}
              align={`text-left pr-5 border-r border-r-textColor1/50`}
              padding={`py-0`}
            >
              Terms
            </SmallText>
            <SmallText color={`textColor1`}>Privacy</SmallText>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
