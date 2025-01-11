const Title = ({ subHeading, heading, generalText }) => {
  return (
    <div className="mx-auto text-center md:w-4/12 my-8">
      <div className="bg-[#f5ffe6] inline-flex items-center justify-center px-3 py-1 rounded-lg gap-2">
        <p className="text-[#749B3F] font-[Rubik]  text-[20px] leading-[23.7px] font-medium tracking-[-1px]">
          {subHeading}
        </p>
      </div>
      <h3
        className="text-[48px] leading-[56.88px] font-[Rubik] font-medium tracking-[-2%]"
        style={{ letterSpacing: "-1px" }}
      >
        {heading}
      </h3>
      <p className="font-[Questrial] text-center">{generalText}</p>
    </div>
  );
};

export default Title;
