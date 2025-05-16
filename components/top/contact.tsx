import { FC } from "react";
import Link from "next/link";
import { Icon } from '@iconify/react';

interface Props {
  className?: string;
  title: string;
  icon: string;
  url: string;
  accountID?: string;
  bgColor: string;
  textColor: string;
}

const Account: FC<Props> = ({ className, title, icon, url, accountID, bgColor, textColor }) => {
  return (
    <div className={`p-2 rounded-xl ${bgColor} ${textColor} ${className}`}>
      <Link
        href={url}
        className="flex flex-row justify-between items-center gap-3"
        target="_blank"
      >
        <Icon icon={icon} height="40px" /> 
        <div className="grow flex flex-col">
          <h3 className="text-md md:text-2xl font-bold">{title}</h3>
          <span className="md:text-xl font-mono">{accountID !== undefined ? accountID : url}</span>
        </div>
      </Link>
    </div>
  );
};

export default Account;