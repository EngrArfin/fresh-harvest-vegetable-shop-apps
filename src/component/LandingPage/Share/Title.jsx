const Title = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center md:w-4/12 my-8">
      <p className="text-yellow-600">---{subHeading}---</p>
      <h3 className="text-4xl uppercase border-y-4">{heading}</h3>
    </div>
  );
};

export default Title;
