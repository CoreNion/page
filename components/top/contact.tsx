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
    <div className={`p-2 rounded-xl ${bgColor} ${textColor} ${className ?? ""}`}>
      <Link
        href={url}
        className="grid grid-cols-[auto_1fr] gap-2 items-center"
        target="_blank"
        prefetch={false}
      >
        <Icon icon={icon} height="40px" /> 
        <div className="grid grid-cols-1 gap-1">
          <h3 className="text-md md:text-2xl font-bold">{title}</h3>
          <span className="md:text-xl font-mono">{accountID !== undefined ? accountID : url}</span>
        </div>
      </Link>
    </div>
  );
};

export default Account;