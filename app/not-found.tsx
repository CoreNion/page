import Link from 'next/link'

export const metadata = {
  title: '404 Not Found | CoreNion',
}
 
export default function NotFound() {
  return (
    <main className='w-full h-full grid place-content-center text-center gap-3'>
      <h1 className='font-bold text-4xl'>404 | Not Found</h1>
      <p>お探しのページは見つかりませんでした。</p>
      <Link className='p-2 bg-slate-100 hover:bg-slate-200 transition-all duration-200 border border-slate-400 rounded-full' href="/">ホームへ戻る</Link>
    </main>
  )
}