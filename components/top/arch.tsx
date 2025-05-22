import Link from "next/link"
import { JSX } from "react"

interface AchievementProps {
  icon: JSX.Element
  title: string
  url?: string,
  description: string
}

export default function Achievement({ icon, title, description, url }: AchievementProps) {
  const content = (
    <>
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 overflow-hidden rounded-lg">{icon}</div>
        <h3 className="font-bold text-xl">{title}</h3>
      </div>
      <p>{description}</p>
    </>
  );

  return (
    url ? (
      <Link className="p-4 bg-blue-50 rounded-2xl grid gap-1 shadow-md hover:shadow-lg transition-all duration-200" href={url} target="_blank">
        {content}
      </Link>
    ) : (
      <div className="p-4 bg-blue-50 rounded-2xl grid gap-1 shadow-md hover:shadow-lg transition-all duration-200">
        {content}
      </div>
    )
  );
}