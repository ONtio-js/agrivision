import Image from "next/image";
import Button from "./components/Button";

export default function Home() {
  return (
		<div className='relative'>
			<div
				className='bg-black/90 flex flex-col items-center py-20 pb-60  '
				style={{ clipPath: 'ellipse(100% 90% at 50% 0%)' }}
			>
				<h2 className='text-center text-[4rem] px-20 leading-[70px] capitalize font-bold text-white py-4 '>
					Effortlessly streamline and manage project with workflow
				</h2>
				<h5 className='text-gray-300 pb-5  text-center text-[1.4rem] px-64'>
					Manage tasks, collaborate seamlessly, and keep your team on
					track- all in one place, with real-time insights, progress
					tracking, customizable workflows and integrated tools.
					clip-path:
				</h5>
				<Button title={'start 7 days free trial'} />
			</div>
			<div>
				<img src='/assets/hero1.png' className='absolute left-20 z-50' width={300} />
				<img src='/assets/hero2.png' className='absolute right-44 z-50 -bottom-[30rem]' width={200}/>
				<img src='/assets/hero3.png'  className='absolute top-[26rem] right-[50%] left-[50%] translate-x-[-50%] '/>
			</div>
		</div>
  );
}
