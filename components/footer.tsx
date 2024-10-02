import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icon";

const Footer = () => {
  return (
    <div className="text-center flex items-center justify-center flex-col mt-8 text-sm">
      <div className="flex space-x-4 py-5">
        <a href="#">
          <GithubIcon />
        </a>
        <a href="#">
          <TwitterIcon />
        </a>
        <a href="#">
          <LinkedinIcon />
        </a>
      </div>
      <div>
        {`© 2024 - `}
        <a href="https://github.com/hrdv10" className="text-blue-500">
          hrdv10
        </a>
      </div>
      <div>
        {`Powered by `}
        <a href="https://github.com/hrdv10" className="text-blue-500">
          nextjs
        </a>
        {`, theme by `}
        <a href="https://github.com/hrdv10" className="text-blue-500">
          hrdv10
        </a>
      </div>
    </div>
  );
};

export default Footer;
